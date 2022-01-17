---
title: Upgrading to CDK v2 for Typescript
date: "2022-01-18T22:12:03.284Z"
---

As of re:Invent 2021, CDK v2 is <a href="https://aws.amazon.com/about-aws/whats-new/2021/12/aws-cloud-development-kit-cdk-generally-available/" target="_blank" rel="noopener noreferrer">now generally available</a>. 🎉

This post includes a brief walkthrough on upgrading a project from v1 -> v2 as well as some personal opinions. I'll be using <a href="https://www.danielleheberling.xyz/blog/appsync-cdk/" target="_blank" rel="noopener noreferrer">this notes app</a> that we build previously to demo. If you want to skip ahead, the finished source code is <a href="https://github.com/deeheber/note-service-next-generation/tree/blog-post-2" target="_blank" rel="noopener noreferrer">on Github</a>.

Here's we go. Let's upgrade the application!

## Step 1: Disable feature flags in cdk.json
Many of the feature flags from v1 are now included in v2 and/or are no longer relevant, so let's disable all flags.

Before
```json
{
  "app": "npx ts-node --prefer-ts-exts bin/note-service.ts",
  "context": {
    "@aws-cdk/core:enableStackNameDuplicates": "true",
    "aws-cdk:enableDiffNoFail": "true",
    "@aws-cdk/core:stackRelativeExports": "true",
    "@aws-cdk/aws-ecr-assets:dockerIgnoreSupport": true,
    "@aws-cdk/aws-secretsmanager:parseOwnedSecretName": true,
    "@aws-cdk/aws-kms:defaultKeyPolicies": true,
    "@aws-cdk/aws-s3:grantWriteWithoutAcl": true
  }
}
```

After
```json
{
  "app": "npx ts-node --prefer-ts-exts bin/note-service.ts",
  "context": {
    "@aws-cdk/aws-apigateway:usagePlanKeyOrderInsensitiveId": false,
    "@aws-cdk/aws-cloudfront:defaultSecurityPolicyTLSv1.2_2021": false,
    "@aws-cdk/aws-rds:lowercaseDbIdentifier": false,
    "@aws-cdk/core:stackRelativeExports": false
  }
}
```

## Step 2: Update package.json dependencies
One of the features of CDK v2 is having mostly everything in a single library, `aws-cdk-lib`. Hopefully this can help alleviate some of the pain that developers experienced with keeping all packages up to date and in sync.

Let's focus on the `devDependencies` section of the `package.json`. In v2, we also need to add a `peerDependencies` section.

Before
```json
  "devDependencies": {
    "@aws-cdk/assert": "^1.139.0",
    "@aws-cdk/aws-appsync": "^1.139.0",
    "@aws-cdk/aws-dynamodb": "^1.139.0",
    "@aws-cdk/aws-lambda": "^1.139.0",
    "@aws-cdk/aws-lambda-nodejs": "^1.139.0",
    "@aws-cdk/aws-logs": "^1.139.0",
    "@aws-cdk/core": "^1.139.0",
    "@types/jest": "^27.4.0",
    "@types/node": "^17.0.8",
    "aws-cdk": "^1.139.0",
    "esbuild": "^0.14.11",
    "jest": "^27.4.7",
    "ts-jest": "^27.0.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.4"
  },
```

After
```json
  "peerDependencies": {
    "aws-cdk-lib": "^2.8.0",
    "constructs": "^10.0.36"
  },
  "devDependencies": {
    "@aws-cdk/assert": "^2.8.0",
    "@aws-cdk/aws-appsync-alpha": "^2.8.0-alpha.0",
    "@types/jest": "^27.4.0",
    "@types/node": "^17.0.8",
    "aws-cdk-lib": "^2.8.0",
    "constructs": "^10.0.36",
    "esbuild": "^0.14.11",
    "jest": "^27.4.7",
    "ts-jest": "^27.0.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.4"
  },
```

One thing to note in this specific project is that the AppSync dependency is currently in alpha. Personally, I would recommend exercising extreme caution before using it in a business critical application.

## Step 3: Update import statements in the code
Since we've changed some dependencies in our `package.json`, we should update our import statements to match.

Here's an example of what that looks like

Before
```typescript
import { CfnOutput, Construct, RemovalPolicy, Stack, StackProps } from '@aws-cdk/core';
import { FieldLogLevel, GraphqlApi, Schema } from '@aws-cdk/aws-appsync';
import { AttributeType, BillingMode, Table } from '@aws-cdk/aws-dynamodb';
import { Architecture, Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { RetentionDays } from '@aws-cdk/aws-logs';
```

After
```typescript
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { FieldLogLevel, GraphqlApi, Schema } from '@aws-cdk/aws-appsync-alpha';
```

## Step 4: Bootstrap your environment for v2
If you've previously been working with v1, you'll need to re-bootstrap your environment so you can deploy using CDK v2.

To do this run the following in your console after you've installed CDK v2 on your machine.

```bash
cdk bootstrap aws://<your-account-number>/<your-region>
```

## Closing thoughts
Overall the upgrade process was seamless. Keep in mind that this was just a small personal project not using many constructs, so your experience might possibly differ from mind. The team at AWS did a great job writing documentation on this topic.

Despite the announcement of CDK v2 moving out of developer preview, I did notice that many constructs for v2 are still in alpha...so that seemed somewhat misleading. I'm excited about CDK v2, but I plan to wait a bit before upgrading business critical applications to ensure that constructs are mature and will work reliably with the new version. I am pretty excited about all of the improvements under the hood and look forward to using it more extensively in the future.
