import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const About = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout title={siteMetadata.title}>
      <Seo title="About" keywords={['blog', 'gatsby', 'javascript', 'react', 'serverless']} />
      <h3>Nice to meet you.</h3>
      <div>
        <div style={{ float: 'left', paddingRight: '1.5rem' }}>
          <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt={siteMetadata.author} />
        </div>
        <p>
          Throughout my entire life, I questioned why and how things work with a strong interest in making
          them better.
        </p>
        <p>
          Career wise, I used to work in tech support for{' '}
          <a href="https://support.apple.com/" target="_blank" rel="noopener noreferrer">
            AppleCare
          </a>{' '}
          and later{' '}
          <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer">
            Squarespace
          </a>
          . I enjoyed helping customers; however, I felt that my job centered around asking an engineer to fix
          a bug or UX issue.
        </p>
        <p>
          Because of my desire to provide a better customer experience and to take matters into my own hands,
          I taught myself how to code and became a software engineer.
        </p>
        <p>
          Currently loving TypeScript/JavaScript, GraphQL, AWS SAM, and AWS CDK, but I'm open to learning new
          languages and technologies if it makes sense for the project/team, or matches my interest.
        </p>
        <p>
          The information on this site serves as a personal reminder of my commitment to life long learning,
          improvement, creating things, and knowledge sharing. Feel free to reach out anytime.
        </p>
        <p>
          Since technology is always evolving, disclaimer that older content might contain out of date
          information and examples.
        </p>
        <p>
          Any opinions expressed on this site are mine and are not reflective of any organizations that I am
          affiliated with.
        </p>
      </div>
    </Layout>
  );
};

export const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 200, height: 200)
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export default About;
