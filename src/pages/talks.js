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
                <h3>The Serverless Mindset</h3>
                <p style={{ marginBottom: '0' }}>Serverless Days Nashville</p>
                <p style={{ marginBottom: '0' }}>February 27, 2020 - Nashville, TN</p>
                <p><a href="https://www.youtube.com/watch?v=eW2rK4bnk1k" target="_blank" rel="noopener noreferrer">View</a></p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}>The Power of Serverless for Transforming Careers and Communities</h3>
                <p style={{ marginBottom: '0' }}>AWS re:Invent</p>
                <p style={{ marginBottom: '0' }}>December 3, 2019 - Las Vegas, NV</p>
                <p><a href="https://www.pscp.tv/w/1yoJMzjeXypxQ" target="_blank" rel="noopener noreferrer">View</a></p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}>Leveling Up in Serverless</h3>
                <p style={{ marginBottom: '0' }}>Serverlessconf</p>
                <p style={{ marginBottom: '0' }}>October 9, 2019 - New York, NY</p>
                <p><a href="https://acloud.guru/series/serverlessconf-nyc-2019/view/leveling-up-in-serverless" target="_blank" rel="noopener noreferrer">View</a></p>
              </div>

              <div style={{ borderBottom: '1px solid lightgrey' }}>
                <h3 style={{ marginTop: '1.75rem' }}>Serverless: More than a Buzzword</h3>
                <p style={{ marginBottom: '0' }}>Act-W National</p>
                <p>June 29, 2019 - Portland, OR</p>
              </div>

              <div>
                <h3 style={{ marginTop: '1.75rem' }}>Yinzer's First Alexa Skill</h3>
                <p style={{ marginBottom: '0' }}>Donut JS</p>
                <p style={{ marginBottom: '0' }}>March 27, 2018 - Portland, OR</p>
                <p><a href="https://www.youtube.com/watch?v=77rk1uYzayM" target="_blank" rel="noopener noreferrer">View</a></p>
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
