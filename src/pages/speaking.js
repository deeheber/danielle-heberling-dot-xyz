import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Speaking extends Component {
  render () {
    return (
      <StaticQuery
        query={speakingQuery}
        render={data => {
          const siteMetadata = data.site.siteMetadata;
          return (
            <Layout title={siteMetadata.title}>
              <SEO
                title='Speaking'
                keywords={['blog', 'gatsby', 'javascript', 'react', 'serverless']}
              />
              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3><a style={{ boxShadow: 'none' }} href="https://www.youtube.com/watch?v=eW2rK4bnk1k" target="_blank" rel="noopener noreferrer">The Serverless Mindset</a></h3>
                <p style={{ marginBottom: '0' }}>Serverless Days Nashville</p>
                <p>February 27, 2020 - Nashville, TN</p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}><a style={{ boxShadow: 'none' }} href="https://www.pscp.tv/w/1yoJMzjeXypxQ" target="_blank" rel="noopener noreferrer">The Power of Serverless for Transforming Careers and Communities</a></h3>
                <p style={{ marginBottom: '0' }}>AWS re:Invent</p>
                <p>December 3, 2019 - Las Vegas, NV</p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}><a style={{ boxShadow: 'none' }} href="https://www.serverlesschats.com/25/" target="_blank" rel="noopener noreferrer">Episode #25: Using Serverless to Transform Careers and Communities</a></h3>
                <p style={{ marginBottom: '0' }}>Serverless Chats</p>
                <p>December 2, 2019 - The Internet</p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}><a style={{ boxShadow: 'none' }} href="https://acloud.guru/series/serverlessconf-nyc-2019/view/leveling-up-in-serverless" target="_blank" rel="noopener noreferrer">Leveling Up in Serverless</a></h3>
                <p style={{ marginBottom: '0' }}>Serverlessconf</p>
                <p>October 9, 2019 - New York, NY</p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}>Serverless: More than a Buzzword</h3>
                <p style={{ marginBottom: '0' }}>Act-W National</p>
                <p>June 29, 2019 - Portland, OR</p>
              </div>

              <div>
                <h3 style={{ marginTop: '1.75rem' }}><a style={{ boxShadow: 'none' }} href="https://www.youtube.com/watch?v=77rk1uYzayM" target="_blank" rel="noopener noreferrer">Yinzer's First Alexa Skill</a></h3>
                <p style={{ marginBottom: '0' }}>Donut JS</p>
                <p>March 27, 2018 - Portland, OR</p>
              </div>
            </Layout>
          );
        }}
      />
    );
  }
}

const speakingQuery = graphql`
  query SpeakingQuery {
    site {
      siteMetadata {
        title,
        author
      }
    }
  }
`;

export default Speaking;
