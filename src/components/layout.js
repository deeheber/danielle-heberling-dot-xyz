import React, { Fragment } from "react"
import { Link } from "gatsby"

import Nav from "./nav";
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
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
      )
    } else {
      header = (
        <Fragment>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0
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
          </h3>
          <Nav />
        </Fragment>
      )
    }
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
        <main>{children}</main>
        <hr />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
