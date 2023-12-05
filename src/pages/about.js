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
        <section style={{ float: 'left', paddingRight: '1.25rem' }}>
          <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt={siteMetadata.author} />
        </section>
        <p>
          Career wise, I used to work in tech support. I enjoyed helping customers; however, I felt that my
          job centered around asking engineers to fix bugs.
        </p>
        <p>
          Because of my desire to provide a better customer experience and to take matters into my own hands,
          I taught myself how to code and became a software engineer.
        </p>
        <p>
          TypeScript, GraphQL, and AWS Serverless services are my current tools of choice. I'm open to
          learning new technologies if it makes sense for the project or matches my interest.
        </p>
        <p>
          I got my start in the Serverless community through my work as a Software Engineer at{' '}
          <a href="https://www.stackery.io/" target="_blank" rel="noopener noreferrer">
            Stackery
          </a>
          . The work that we started at Stackery eventually led to what became{' '}
          <a href="https://aws.amazon.com/application-composer/" target="_blank" rel="noopener noreferrer">
            AWS Application Composer
          </a>
          . In 2023, I was named an{' '}
          <a
            href="https://aws.amazon.com/developer/community/heroes/danielle-heberling/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Serverless Hero
          </a>
          .
        </p>
        <section style={{ float: 'right', paddingLeft: '1.25rem' }}>
          <GatsbyImage
            image={data.waterfall.childImageSharp.gatsbyImageData}
            alt="Danielle standing in front of a waterfall"
          />
        </section>
        <p>
          This site serves as a personal reminder of my commitment to life long learning, improvement,
          creating things, and knowledge sharing.
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
        gatsbyImageData(width: 200)
      }
    }
    waterfall: file(absolutePath: { regex: "/waterfall.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
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
