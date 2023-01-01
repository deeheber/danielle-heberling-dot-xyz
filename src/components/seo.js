import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

function Seo({ canonical, description, lang, meta, keywords, title }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      thumbnail: file(absolutePath: { regex: "/d-icon.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 400, height: 400)
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  // Social image stuff
  let origin = '';
  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }
  const imageSrc = data.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src;
  const image = `${origin}${imageSrc}`;

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        link={canonical ? [{ rel: 'canonical', key: canonical, href: canonical }] : []}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:image',
            content: image,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:image',
            content: image,
          },
          {
            name: 'twitter:creator',
            content: data.site.siteMetadata.author,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
              : []
          )
          .concat(meta)}
      />
    </>
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Seo;
