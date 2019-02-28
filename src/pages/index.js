import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends Component {
  render () {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout title={siteTitle}>
        <SEO
          title='All posts'
          keywords={['blog', 'gatsby', 'javascript', 'react', 'serverless']}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <div style={{ color: '#B2BABF' }}>
                <small>{node.frontmatter.date}  — </small>
                <small>{node.timeToRead} min read</small>
              </div>
              <p style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <p>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  Continue Reading →
                </Link>
              </p>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`;
