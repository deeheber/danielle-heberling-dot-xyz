import React from 'react';
import {
  FaGithub, FaTwitter,
  FaInstagram, FaLinkedin,
  FaRss
} from 'react-icons/fa';

function Footer () {
  const socialStyle = {
    boxShadow: 'none',
    paddingRight: '0.5rem',
    cursor: 'pointer'
  };

  return (
    <footer>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener noreferrer'>Gatsby</a>,
          Deployed via
        {` `}
        <a href='https://www.netlify.com/' target='_blank' rel='noopener noreferrer'>Netlify</a>
      </div>
      {/* TODO: Programically create these nodes */}
      <div style={{ paddingTop: '1rem' }}>
        <a style={socialStyle} href='https://twitter.com/deeheber' target='_blank' rel='noopener noreferrer'><FaTwitter size={35} /></a>
        <a style={socialStyle} href='https://github.com/deeheber' target='_blank' rel='noopener noreferrer'><FaGithub size={35} /></a>
        <a style={socialStyle} href='https://www.linkedin.com/in/deeheber' target='_blank' rel='noopener noreferrer'><FaLinkedin size={35} /></a>
        <a style={socialStyle} href='https://www.instagram.com/deeheber' target='_blank' rel='noopener noreferrer'><FaInstagram size={35} /></a>
        <a style={socialStyle} href='/rss.xml' target='_blank' rel='noopener noreferrer'><FaRss size={35} /></a>
      </div>
    </footer>
  );
}

export default Footer;
