import React from 'react';
import { Link } from 'gatsby';

// TODO: Figure out linkActive

const linkStyle = {
  margin: '0 1rem',
  boxShadow: 'none'
};

function Nav () {
  return (
    <nav>
      <Link style={{ ...linkStyle, marginLeft: 0 }} to='/'>
        Blog
      </Link>
      <Link style={linkStyle} to='/about'>
        About
      </Link>
      <a style={linkStyle} href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'>
        Contact
      </a>
    </nav>
  );
}

export default Nav;
