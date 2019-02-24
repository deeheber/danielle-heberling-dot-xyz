import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Success extends React.Component {
  render () {
    return (
      <Layout title={this.props.data.site.siteMetadata.title}>
        <SEO
          title="Contact"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `serverless`, `software engineer`]}
        />
        <h3>Thanks for saying hi.</h3>
        <p>
          Form successfully submitted. I'll reply back as soon as I possibly can.
        </p>
        <p><Link to="/">Home</Link></p>
      </Layout>
    );
  }
}

export default Success

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
