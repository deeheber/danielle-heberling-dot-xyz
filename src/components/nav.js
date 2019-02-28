import React from 'react';
import { Link } from 'gatsby';

const linkStyle = {
  margin: '0 1rem',
  boxShadow: 'none'
};

const linkActiveStyle = {
  borderBottom: '1px solid #FFC20E'
};

function Nav () {
  return (
    <nav>
      <Link style={{ ...linkStyle, marginLeft: 0 }} activeStyle={linkActiveStyle} to='/'>
        Blog
      </Link>
      <Link style={linkStyle} activeStyle={linkActiveStyle} to='/about'>
        About
      </Link>
      <a style={linkStyle} href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'>
        Contact
      </a>
    </nav>
  );
}

export default Nav;
