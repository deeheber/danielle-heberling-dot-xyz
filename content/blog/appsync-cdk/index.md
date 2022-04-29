---
title: Build a GraphQL API with TypeScript, AWS AppSync, and CDK
date: '2021-06-13T22:12:03.284Z'
---

## What We're Building

Previously, I had used <a href="https://aws.amazon.com/serverless/sam/" target="_blank" rel="noopener noreferrer">AWS SAM</a> to build a <a href="https://github.com/deeheber/note-service" target="_blank" rel="noopener noreferrer">CRUD app for notes</a>. Recently, I wanted to learn more about the <a href="https://aws.amazon.com/cdk/" target="_blank" rel="noopener noreferrer">AWS Cloud Development Kit (CDK)</a>, <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a>, and <a href="https://aws.amazon.com/appsync/" target="_blank" rel="noopener noreferrer">AWS AppSync</a>, so I decided to refactor my original project.

Disclaimer that at the time of writing the <a href="https://aws.amazon.com/blogs/developer/announcing-aws-cloud-development-kit-v2-developer-preview/" target="_blank" rel="noopener noreferrer">CDK v2 is in developer preview</a>. This blog post will use CDK v1.

If you want to skip ahead, take a look the finished project <a href="https://github.com/deeheber/note-service-next-generation/tree/blog-post" target="_blank" rel="noopener noreferrer">here</a>.

## Setup

If this is your first time using the CDK, bootstrap your AWS account. The `Prerequisites` section in <a href="https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html" target="_blank" rel="noopener noreferrer">this guide</a> has the steps.

Start by installing the CDK npm package and running the <a href="https://docs.aws.amazon.com/cdk/latest/guide/cli.html" target="_blank" rel="noopener noreferrer">cdk init</a> command. This is helpful because it gives you a directory structure along with a very minimal stack to get started.

On top of the initial scaffolding in `/lib/note-service-stack.ts` let's add some extra imports.

```typescript
import { CfnOutput, Construct, RemovalPolicy, Stack, StackProps } from '@aws-cdk/core';
import { FieldLogLevel, GraphqlApi, Schema } from '@aws-cdk/aws-appsync';
import { AttributeType, BillingMode, Table } from '@aws-cdk/aws-dynamodb';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
```

The notes will be persisted in DynamoDB, so let's also add the following CDK code to create a notes-table.

```typescript
const notesTable = new Table(this, 'NotesTable', {
  billingMode: BillingMode.PAY_PER_REQUEST,
  partitionKey: { name: 'id', type: AttributeType.STRING },
  removalPolicy: RemovalPolicy.DESTROY,
  tableName: 'notes-table',
});
```

## Create the API

The next step is to set up our api like this.

```typescript
const api = new GraphqlApi(this, 'NotesApi', {
  name: 'notes-api',
  logConfig: {
    fieldLogLevel: FieldLogLevel.ERROR,
  },
  schema: Schema.fromAsset('src/graphql/schema.graphql'),
});
```

The schema property points to a file in the repository. You can also provide this inline if your prefer. The schema needs to be well formed in order to have a successful deploy of the stack.

## Between the API and DataStore

The basic flow for GraphQL is:

```md
schema => resolver => data source
```

The schema is your API contract. It says here's my query and mutation definitions in this API and he's what I expect to receive back from this specific query or mutation. Each field in that schema definition can be connected to a resolver that connects to the datasource.

For example our Query to get a note by id looks like this

```graphql
  getNote(id: ID!): Note
```

It takes an `id` parameter and expectes a `Note` to be returned. A `Note` is defined in the schema to look like this

```graphql
type Note {
  id: ID!
  content: String!
  author: String!
  createdAt: String!
  updatedAt: String
}
```

Traditionally on AWS one would use <a href="https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-programming-guide.html" target="_blank" rel="noopener noreferrer">Velocity Template Language (VTL)</a> to resolve GraphQL schema fields to a datasource; however, last year AWS released the concept of a <a href="https://aws.amazon.com/blogs/mobile/appsync-direct-lambda/" target="_blank" rel="noopener noreferrer">direct Lambda resolver</a>. There's definitely reasons to continue using VTL over direct Lambda resolvers that I won't get into here, but I personally was pretty excited about this development since it meant that I could directly resolve to a Lambda used as a data source without needing to write any VTL.

## Create Resolver and Data Source

For demonstration purposes let's focus on the `getNote` Query. This is a query that a client will make to this API that will send a note id and receive the note back.

Keep in mind that you'll also need to do similar things for all other queries/mutations in your API (in this case it's `listNotes` query, `createNote` mutation, `deleteNote` mutation, `updateNote` mutation).

Let's start by adding some CDK code to create the Lambda function

```typescript
const getLambda = new Function(this, 'GetLambda', {
  functionName: 'get-lambda',
  runtime: Runtime.NODEJS_14_X,
  handler: 'get.handler',
  code: Code.fromAsset('src/get'),
  memorySize: 3008,
});
```

The `code` property points to the source code for this function in `src/get`. This will contain the code necessary to retrieve our note from DynamoDB.

We'll then want to add this Lambda as a data source to the api we previously created.

```typescript
const getDs = api.addLambdaDataSource('getDatasource', getLambda);
```

Next let's create a resolver to resolve the `getNote` Query field in our schema to our Lambda data source.

```typescript
getDs.createResolver({
  typeName: 'Query',
  fieldName: 'getNote',
});
```

The final step is to ensure our Lamba has proper permissions to perform operations on DynamoDB, so let's send it the table name as an environment variable and grant it read permissions.

```typescript
getLambda.addEnvironment('TABLE_NAME', notesTable.tableName);
notesTable.grantReadData(getLambda);
```

## Finished Project

I personally have really enjoyed using GraphQL and the AWS CDK in my projects and hope you do too. Check out the full example <a href="https://github.com/deeheber/note-service-next-generation/tree/blog-post" target="_blank" rel="noopener noreferrer">here</a>. Contributions are welcome.
