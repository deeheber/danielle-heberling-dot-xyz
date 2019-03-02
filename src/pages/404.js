import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class NotFoundPage extends Component {
  render () {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO title='404: Not Found' />
        <h3>Not Found</h3>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
