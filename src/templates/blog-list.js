import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  // Pagination stuff
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/blog${currentPage - 1}`;
  const nextPage = `/blog${currentPage + 1}`;

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react', 'serverless']} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const excerpt = node.excerpt.replace(/Photo by (.*?) on Unsplash/i, '');
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={`/blog${node.fields.slug}`}>
                {title}
              </Link>
            </h3>
            <div style={{ color: '#707B7C' }}>
              <small>{node.frontmatter.date} — </small>
              <small>{node.timeToRead} min read</small>
            </div>
            <p style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: excerpt }} />
            <p>
              <Link style={{ boxShadow: 'none' }} to={`/blog${node.fields.slug}`}>
                Continue Reading →
              </Link>
            </p>
          </div>
        );
      })}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {!isFirst && (
          <Link to={prevPage} rel="prev" style={{ boxShadow: 'none' }}>
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next" style={{ boxShadow: 'none', marginLeft: 'auto' }}>
            Next Page →
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
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
