import React from "react"
import { Link } from "gatsby"

const linkStyle = {
  margin: `0 1rem`,
  boxShadow: `none`
};

const linkActiveStyle = {
  borderBottom: `1px solid #FFC20E`
};

function Nav () {
  return (
    <nav>
      <Link style={{ ...linkStyle, marginLeft: 0 }} activeStyle={linkActiveStyle} to="/">
        Blog
      </Link>
      <Link style={linkStyle} activeStyle={linkActiveStyle} to="/about">
        About
      </Link>
      <Link style={linkStyle} activeStyle={linkActiveStyle} to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default Nav
