import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';

import Nav from './nav';
import Footer from './footer';
import { rhythm, scale } from '../utils/typography';

class Layout extends Component {
  render () {
    const { title, children } = this.props;

    const header = (
      <Fragment>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none'
          }}
          to={'/'}
        >
          <h1
            style={{
              ...scale(1.5),
              margin: '0 auto',
              fontSize: '3.25rem'
            }}
          >
            {title}
          </h1>
          <h2 style={{ marginTop: 0, ...scale(0.25) }}>Queering Software Engineering</h2>
        </Link>
        <Nav />
      </Fragment>
    );

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main style={{ borderBottom: '0.05rem solid white', marginBottom: `1.5rem` }}>
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
