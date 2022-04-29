import React from 'react';
import { FaDev, FaGithub, FaLinkedin, FaMedium, FaRss, FaTwitter } from 'react-icons/fa';

function Footer() {
  const socialStyle = {
    boxShadow: 'none',
    paddingRight: '0.5rem',
    cursor: 'pointer',
  };

  return (
    <footer>
      {/* TODO: Programically create these nodes */}
      <div>
        <a
          style={socialStyle}
          href="https://twitter.com/deeheber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter link"
        >
          <FaTwitter size={35} />
        </a>
        <a
          style={socialStyle}
          href="https://github.com/deeheber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github link"
        >
          <FaGithub size={35} />
        </a>
        <a
          style={socialStyle}
          href="https://www.linkedin.com/in/deeheber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin link"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          style={socialStyle}
          href="https://dev.to/deeheber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin link"
        >
          <FaDev size={35} />
        </a>
        <a
          style={socialStyle}
          href="https://medium.com/@deeheber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin link"
        >
          <FaMedium size={35} />
        </a>
        <a
          style={socialStyle}
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="rss feed"
        >
          <FaRss size={35} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
