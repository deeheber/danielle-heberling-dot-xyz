import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio () {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%'
              }}
              imgStyle={{
                borderRadius: '50%'
              }}
            />
            <p>
              {author} is a queer yinzer software engineer building the future of serverless at <a href='https://www.stackery.io/' target='_blank' rel='noopener noreferrer'>Stackery</a>. She's also pretty into <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>reactJS</a> and building <a href='https://developer.amazon.com/alexa-skills-kit' target='_blank' rel='noopener noreferrer'>Alexa skills</a>. she/her
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
