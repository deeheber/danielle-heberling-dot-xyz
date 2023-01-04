import React from 'react';
import { FaDev, FaGithub, FaLinkedin, FaRss, FaTwitter } from 'react-icons/fa';
import { SiPolywork } from 'react-icons/si';

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
          href="https://www.polywork.com/deeheber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="polywork link"
        >
          <SiPolywork size={35} />
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
          aria-label="dev.to link"
        >
          <FaDev size={35} />
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
