import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

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
            <form
              name="contact"
              method="post"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: `none` }}>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <div style={ divStyle }>
                <label>
                  Name <br />
                  <input style={inputStyle} name="name" onChange={this.handleChange} />
                </label>
              </div>
              <div style={ divStyle }>
                <label>
                  Email <br />
                  <input style={inputStyle} name="email" onChange={this.handleChange} />
                </label>
              </div>
              <div style={ divStyle }>
                <label>Message <br />
                <textarea style={inputStyle} rows="6" name="message" onChange={this.handleChange}></textarea>
                </label>
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
