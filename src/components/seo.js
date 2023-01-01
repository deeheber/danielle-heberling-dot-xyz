import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function Seo({ canonical, description, keywords = [], title }) {
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
  /**
   * TODO: make this unique to the thumbnail image for each blog post (if applicable)
   *
   * For now, we use the favicon image for all blog posts.
   *
   * See: https://github.com/deeheber/danielle-heberling-dot-xyz/issues/22
   */
  const image = `${origin}${imageSrc}`;

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={data.site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
    </>
  );
}

export default Seo;
