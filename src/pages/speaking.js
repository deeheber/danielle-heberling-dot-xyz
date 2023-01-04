import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Speaking = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout title={siteMetadata.title}>
      <Seo
        title="Speaking"
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

    <h3>2022</h3>
      <ul>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=ameuy2BbphE&t=1s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Post AWS re:Invent recap with #reInventHunt
          </a>
        </li>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://youtu.be/_kY7o3De_9A?t=15557" target="_blank" rel="noopener noreferrer">
            What I learned going from AWS SAM to CDK
          </a>
        </li>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://youtu.be/Ey7bNVT4W1g?t=10181" target="_blank" rel="noopener noreferrer">
            The local cloud, ideas to ensure developer productivity in serverless architectures
          </a>
        </li>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://www.youtube.com/watch?v=7QP5jdXb8WA" target="_blank" rel="noopener noreferrer">
            Serverless Architecture, an Honest Conversation
          </a>
        </li>
      </ul>

    <h3>2020</h3>
      <ul>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://youtu.be/8hmg4cgBEsg?t=8586" target="_blank" rel="noopener noreferrer">
            Serverless Mythbusters
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=eW2rK4bnk1k" target="_blank" rel="noopener noreferrer">
            The Serverless Mindset
          </a>
        </li>
      </ul>

    <h3>2019</h3>
      <ul>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://www.pscp.tv/w/1yoJMzjeXypxQ" target="_blank" rel="noopener noreferrer">
            The Power of Serverless for Transforming Careers and Communities
          </a>
        </li>
        <li
          style={{
            marginBottom: 0,
          }}
        >
          <a href="https://www.serverlesschats.com/25/" target="_blank" rel="noopener noreferrer">
            Serverless Chats Ep. 25
          </a>
        </li>
        <li>
          <a
            href="https://acloud.guru/series/serverlessconf-nyc-2019/view/leveling-up-in-serverless"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leveling Up in Serverless
          </a>
        </li>
      </ul>

    <h3>2018</h3>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=77rk1uYzayM" target="_blank" rel="noopener noreferrer">
            Yinzer's First Alexa Skill
          </a>
        </li>
      </ul>
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
