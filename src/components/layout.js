import React, { Fragment } from "react"
import { Link } from "gatsby"

import Nav from "./nav";
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    const header = (
      <Fragment>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontSize: `3.25rem`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <Nav />
      </Fragment>
    );

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main style={{ borderBottom: `0.05rem solid white`, marginBottom: `1.5rem`}}>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>,
          Deployed via
          {` `}
          <a href="https://www.netlify.com/">Netlify</a>
        </footer>
      </div>
    )
  }
}

export default Layout
