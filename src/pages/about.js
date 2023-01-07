import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const About = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout title={siteMetadata.title}>
      <Seo
        title="About"
        keywords={[
          'blog',
          'gatsby',
          'javascript',
          'react',
          'serverless',
          'software development',
          'software engineer',
          'software engineering',
          'software engineer blog',
          'cloud',
          'devops',
          'aws',
        ]}
      />
      <h3>Nice to meet you.</h3>
      <div>
        <div style={{ float: 'left', paddingRight: '1.5rem' }}>
          <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt={siteMetadata.author} />
        </div>
        <p>
          Career wise, I used to work in tech support. I enjoyed helping customers; however, I felt that my
          job centered around asking engineers to fix bugs.
        </p>
        <p>
          Because of my desire to provide a better customer experience and to take matters into my own hands,
          I taught myself how to code and became a software engineer.
        </p>
        <p>
          I enjoy using Typescript, GraphQL, and AWS serverless services. I'm always open to learning new
          technologies if it makes sense for the project or matches my interest.
        </p>
        <p>
          The information on this site serves as a personal reminder of my commitment to life long learning,
          improvement, creating things, and knowledge sharing.
        </p>
        <p>
          Since technology is always evolving, disclaimer that older content might contain out of date
          information and examples.
        </p>
        <p>
          Any opinions expressed on this site are mine and are not reflective of any organizations that I am
          affiliated with.
        </p>
        <p>
          I'm almost always passively seeking new opportunites (speaking, writing, mentoring, job,
          volunteering, open source etc). Here's my{' '}
          <a
            href="https://heberling-files.s3.us-west-2.amazonaws.com/resume-DanielleHeberling-online.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resumé
          </a>{' '}
          if that's of interest to you. Feel free to reach out if you think it might be a good mutual fit.
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
