import React from "react"
import { Link } from "gatsby"

const linkStyle = {
  padding: `1em`,
  boxShadow: `none`
};

const linkActiveStyle = {
  borderBottom: `1px solid yellow`
};

function Nav () {
  return (
    <nav>
      <Link style={linkStyle} activeStyle={linkActiveStyle} to="/">
        Home
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
