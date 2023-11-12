import React from 'react';
import { FaDev, FaGithub, FaLinkedin, FaRss, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const socialStyle = {
    boxShadow: 'none',
    paddingRight: '0.5rem',
    cursor: 'pointer',
  };

  const data = [
    { link: 'https://twitter.com/deeheber', aria: 'twitter link', icon: <FaXTwitter size={35} /> },
    { link: 'https://github.com/deeheber', aria: 'github link', icon: <FaGithub size={35} /> },
    { link: 'https://www.linkedin.com/in/deeheber', aria: 'linkedin link', icon: <FaLinkedin size={35} /> },
    { link: 'https://dev.to/deeheber', aria: 'dev.to link', icon: <FaDev size={35} /> },
    { link: '/rss.xml', aria: 'rss feed', icon: <FaRss size={35} /> },
  ];

  return (
    <footer>
      {data.map((item) => (
        <a
          key={item.aria}
          style={socialStyle}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.aria}
        >
          {item.icon}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
