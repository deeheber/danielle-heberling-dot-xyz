import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Speaking = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  // TODO: Move this to a JSON file
  const speakingData = [
    {
      year: '2024',
      content: [
        {
          title: 'What does a Software Engineer in the Cloud actually do?',
          link: 'https://youtu.be/0EXGfdt_ZqQ?si=jhyhvOwyfR1BEDwQ',
        },
        {
          title: 'Ready. Set. Cloud Podcast - All about the Believe in Serverless community',
          link: 'https://www.readysetcloud.io/podcast/season-2/8/',
        },
        {
          title: 'Modernizing Healthcare Delivery with AWS Serverless Services',
          link: 'https://www.youtube.com/watch?v=8NoUBQHGWzs',
        },
        {
          title: 'Logicast - Season 3 Episode 11',
          link: 'https://logicastvideo.podbean.com/e/season-3-episode-11-waf-dashboards-free-data-transfer-nuclear-powered-ai',
        },
        {
          title: 'Getting Started with AWS by Using Application Composer',
          link: 'https://youtu.be/GmWY7weQI84?si=oy9fAhvnhH9toRCb',
        },
        {
          title: 'Talking Serverless Podcast #55',
          link: 'https://youtu.be/vcIjKz3b5CM?si=00ze0ReuwSE-hGf7',
        },
      ],
    },
    {
      year: '2023',
      content: [
        {
          title: 'Serverless Weather Reporting with AWS Step Functions and CDK',
          link: 'https://www.youtube.com/watch?v=qlUR5jVBC6c&t=17280s',
        },
        {
          title: 'AWS Application Composer, the App Building Future We Need',
          link: 'https://www.youtube.com/watch?v=JabQQ0f4voM',
        },
        {
          title: 'Logicast - Season 2 Episode 16',
          link: 'https://logicastvideo.podbean.com/e/season-2-episode-16-layoffs-panic-purchasing-cost-reductions/',
        },
        {
          title: 'AWS Developer Innovation Day - Community Spotlight',
          link: 'https://www.youtube.com/watch?v=a7_s6BV_4XY',
        },
      ],
    },
    {
      year: '2022',
      content: [
        {
          title: 'Post AWS re:Invent recap with #reInventHunt',
          link: 'https://www.youtube.com/watch?v=ameuy2BbphE&t=1s',
        },
        { title: 'What I learned going from AWS SAM to CDK', link: 'https://youtu.be/_kY7o3De_9A?t=15557' },
        {
          title: 'The local cloud, ideas to ensure developer productivity in serverless architectures',
          link: 'https://youtu.be/Ey7bNVT4W1g?t=10181',
        },
        {
          title: 'Serverless Architecture, an Honest Conversation',
          link: 'https://www.youtube.com/watch?v=7QP5jdXb8WA',
        },
      ],
    },
    {
      year: '2020',
      content: [
        { title: 'Serverless Mythbusters', link: 'https://youtu.be/8hmg4cgBEsg?t=8586' },
        { title: 'The Serverless Mindset', link: 'https://www.youtube.com/watch?v=eW2rK4bnk1k' },
      ],
    },
    {
      year: '2019',
      content: [
        { title: 'Serverless Chats Ep. 25', link: 'https://www.serverlesschats.com/25/' },
        {
          title: 'Leveling Up in Serverless',
          link: 'https://learn.acloud.guru/series/serverlessconf-nyc-2019/view/leveling-up-in-serverless',
        },
      ],
    },
    {
      year: '2018',
      content: [{ title: "Yinzer's First Alexa Skill", link: 'https://www.youtube.com/watch?v=77rk1uYzayM' }],
    },
  ];

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

      {speakingData.map((year) => (
        <section key={year.year}>
          <h3>{year.year}</h3>
          <ul>
            {year.content.map((talk) => (
              <li key={talk.link}>
                <a href={talk.link} target="_blank" rel="noopener noreferrer">
                  {talk.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
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
