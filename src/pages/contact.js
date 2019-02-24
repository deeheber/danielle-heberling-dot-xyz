import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const inputStyle = {
      borderRadius: `0.3rem`,
      cursor: `pointer`,
      width: `100%`,
      padding: `0.5rem`
    };

    const divStyle = {
      padding: `1rem 0`
    };

    return (
      <Layout title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `serverless`, `software engineer`]}
        />
          <h3>Let's talk more.</h3>
          <div>
            <p>
              Fill out the form to get in touch. Alternately, you can reach out to me via my social media accounts.
            </p>
            <form name="contact" method="post" data-netlify="true">
              <div style={ divStyle }>
                <label htmlFor="name">Name </label>
                <br />
                <input style={inputStyle} type="text" id="name" name="name" />
              </div>
              <div style={ divStyle }>
                <label htmlFor="email">Email </label>
                <br />
                <input style={inputStyle}  type="text" id="email" name="email" />
              </div>
              <div style={ divStyle }>
                <label htmlFor="message">Message</label>
                <br />
                <textarea style={inputStyle} rows="6" id="message" name="message"></textarea>
              </div>
              <div style={ divStyle }>
                <input style={{ ...inputStyle, background: `#FFC20E`, width: `10rem` }} type="submit" />
              </div>
            </form>
          </div>
      </Layout>
    );
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
