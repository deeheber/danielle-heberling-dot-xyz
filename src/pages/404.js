import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = ({ data }) => {
  const { title } = data.site.siteMetadata;

  return (
    <Layout title={title}>
      <Seo title='404: Not Found' />
      <h3>Not Found</h3>
      <p>You just hit a route that doesn&#39;t exist...the sadness.</p>
    </Layout>
  );
}

export default NotFoundPage;

export const notFoundQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
