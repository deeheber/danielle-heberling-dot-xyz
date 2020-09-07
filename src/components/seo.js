import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO ({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        let origin = "";
        if (typeof window !== "undefined") {
          origin = window.location.origin;
        }
        const imageSrc = data.defaultThumbnail.childImageSharp.sizes.src;
        const image = `${origin}${imageSrc}`;
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: image
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:image',
                content: image
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    defaultThumbnail: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
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
`;
