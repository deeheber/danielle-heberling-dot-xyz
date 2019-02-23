import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Contact extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h3>This is the contact page</h3>
      </Layout>
    );
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
