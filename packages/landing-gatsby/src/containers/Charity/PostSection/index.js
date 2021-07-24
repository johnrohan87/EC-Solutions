import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  PostContainer,
  //ImageArea,
  //HighlightedText,
} from './bannerSection.style';

const PostSection = () => {
  /**
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };
   */

  const data = useStaticQuery(graphql`
    {
      allFeedMdcNewsRss {
        edges {
          node {
            title
            link
            content
            guid
          }
        }
      }
      allFeedFloridaTodayRss {
        edges {
          node {
            title
            link
            pubDate
            enclosure {
              url
            }
            guid
            author
            dc {
              creator
            }
            content {
              encoded
            }
          }
        }
      }
    }
  `);

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <PostContainer>
          {data.allFeedFloridaTodayRss
            ? data.allFeedFloridaTodayRss.edges.map((item) => {
                return (
                  <div
                    key={item.node.title}
                    style={{
                      border: '15px solid lightgrey',
                      margin: '10px',
                      padding: '10px',
                    }}
                  >
                    <h2>{item.node.title}</h2>
                    <div>
                      <a href={item.node.guid}>{item.node.guid}</a>
                    </div>
                    <br />
                    <br />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.content.encoded,
                      }}
                    />
                    <br />
                  </div>
                );
              })
            : 'nothing'}
        </PostContainer>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default PostSection;
