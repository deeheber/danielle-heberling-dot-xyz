import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Speaking = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout title={siteMetadata.title}>
      <Seo title="Speaking" keywords={['blog', 'gatsby', 'javascript', 'react', 'serverless']} />

      <div>
        <h3>2022</h3>
        <p>
          <a href="https://www.youtube.com/watch?v=7QP5jdXb8WA" target="_blank" rel="noopener noreferrer">
            Serverless Architecture, an Honest Conversation
          </a>
        </p>
      </div>

      <div>
        <h3>2020</h3>
        <p
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://youtu.be/8hmg4cgBEsg?t=8586" target="_blank" rel="noopener noreferrer">
            Serverless Mythbusters
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=eW2rK4bnk1k" target="_blank" rel="noopener noreferrer">
            The Serverless Mindset
          </a>
        </p>
      </div>

      <div>
        <h3>2019</h3>
        <p
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://www.pscp.tv/w/1yoJMzjeXypxQ" target="_blank" rel="noopener noreferrer">
            The Power of Serverless for Transforming Careers and Communities
          </a>
        </p>
        <p
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://www.serverlesschats.com/25/" target="_blank" rel="noopener noreferrer">
            Serverless Chats Ep. 25
          </a>
        </p>
        <p>
          <a
            href="https://acloud.guru/series/serverlessconf-nyc-2019/view/leveling-up-in-serverless"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leveling Up in Serverless
          </a>
        </p>
      </div>

      <div>
        <h3>2018</h3>
        <p>
          <a href="https://www.youtube.com/watch?v=77rk1uYzayM" target="_blank" rel="noopener noreferrer">
            Yinzer's First Alexa Skill
          </a>
        </p>
      </div>
    </Layout>
  );
};

export const speakingQuery = graphql`
  query SpeakingQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export default Speaking;
