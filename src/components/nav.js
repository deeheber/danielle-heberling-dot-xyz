import React from 'react';
import { Link } from 'gatsby';

// Special styles for the blog link
// From https://reach.tech/router/api/Link
// Highlights as active if on a paginated blog list page or a blog detail page
// Kinda messy, so I want to redo this later prob with styled components or something
const blogLinkStyles = ({ location }) => {
  const isBlogPage = location.pathname === '/' || location.pathname.startsWith('/blog');
  return isBlogPage
    ? { style: { ...linkActiveStyle, marginRight: '1rem' } }
    : { style: { ...linkStyle, marginLeft: 0 } };
};

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
      <Link getProps={blogLinkStyles} to='/'>
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
