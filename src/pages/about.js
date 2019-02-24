import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render () {
    return (
      <StaticQuery
        query={aboutQuery}
        render={data => {
          const siteMetadata = data.site.siteMetadata;
          return (
            <Layout title={siteMetadata.title}>
              <SEO
                title="About"
                keywords={[`blog`, `gatsby`, `javascript`, `react`, `serverless`]}
              />
              <h3>Nice to meet you.</h3>
                <div>
                  <div style={{ float: `left`, paddingRight: `1.5rem` }}>
                    <Image
                      fixed={data.avatar.childImageSharp.fixed}
                      alt={siteMetadata.author}
                    />
                  </div>
                  <p>
                    Throughout my entire life, I questioned why and how things work with a strong desire to make them better.
                  </p>
                  <p>
                    Career wise, I used to work in tech support for <a href="https://support.apple.com/" target="_blank" rel="noopener noreferrer">AppleCare</a> and then <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer">Squarespace</a>. I loved helping customers, however I discovered that my job centered around asking an engineer to fix a bug or UX issue.
                  </p>
                  <p>
                    Because of my desire to provide a better customer experience and to take matters into my own hands, I began teaching myself how to code and became a software engineer. Currently working in the serverless space at <a href="https://www.stackery.io/" target="_blank" rel="noopener noreferrer">Stackery</a>.
                  </p>
                  <p>
                    This information on this site serves as a personal reminder of my commitment to life long learning, improvement, creating things, and knowledge sharing.
                  </p>
                </div>
            </Layout>
          )}
        }
      />
    );
  }
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title,
        author
      }
    }
  }
`

export default About
