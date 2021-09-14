import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <>
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]
                .concat(
                  keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: keywords.join(`, `),
                      }
                    : []
                )
                .concat(meta)}
            />
            {/*  <Helmet>
              <link
                rel="authorization_endpoint"
                href="https://indieauth.com/auth"
              />
              <link
                rel="token_endpoint"
                href="https://tokens.indieauth.com/token"
              />
              <link rel="me" href="https://twitter.com/ECSolutionsGrp" />
              <link rel="me" href="https://www.facebook.com/ECSolutionsGroup" />
              <link rel="me" href="mailto:coordinator@ecsolutionsgroup.com" />
              <link
                rel="webmention"
                href="https://webmention.io/ecsolutionsgroup.com/webmention"
              />
              <link
                rel="pingback"
                href="https://webmention.io/ecsolutionsgroup.com/xmlrpc"
              />
            </Helmet>
            */}
          </>
        );
      }}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
