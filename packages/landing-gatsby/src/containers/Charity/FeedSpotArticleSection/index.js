import React from 'react';
//import { useStaticQuery, graphql } from 'gatsby';

const FeedSpotArticleSection = ({ pageContext }) => {
  console.log(pageContext);

  return (
    <>
      <div>
        <div>{pageContext.id}</div>
        <div>{pageContext.title}</div>
        <div>{pageContext.link}</div>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
    </>
  );
};

export default FeedSpotArticleSection;

// eslint-disable-next-line no-lone-blocks
