import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const FeedSpotArticleSection = () => {
  const data = useStaticQuery(graphql`
    {
      allFeedFeedSpot {
        edges {
          node {
            title
            link
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <>
      <div>
        {data.allFeedFeedSpot
          ? data.allFeedFeedSpot.edges.map((item, key) => {
              return (
                <div>
                  <div>{item.node.title}</div>
                  <div>
                    {item.node.link
                      .replace(/.*\/\/[^\/]*/, '')
                      .replaceAll('/', '')}
                  </div>
                </div>
              );
            })
          : 'nothing'}
      </div>
    </>
  );
};

export default FeedSpotArticleSection;

// eslint-disable-next-line no-lone-blocks
