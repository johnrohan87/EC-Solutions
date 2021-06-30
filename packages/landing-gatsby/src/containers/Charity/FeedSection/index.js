import React from 'react';
//, { Fragment }, Link
import { useStaticQuery, graphql } from 'gatsby';
//import { Icon } from 'react-icons-kit';
//import { chevronRight } from 'react-icons-kit/feather/chevronRight';
//import Image from 'gatsby-image';
//import Text from 'common/components/Text';
//import Heading from 'common/components/Heading';
//import GlideCarousel from 'common/components/GlideCarousel';
//import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  PostContainer,
  //ImageArea,
  //HighlightedText,
} from './bannerSection.style';

const FeedSection = () => {
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
        {/* 
        <TextArea>
          {data.allFeedMdcNewsRss
            ? data.allFeedMdcNewsRss.edges.map((item) => {
                return (
                  <div
                    key={item.node.title}
                    style={{
                      border: '5px solid red',
                      margin: '10px',
                      padding: '10px',
                    }}
                  >
                    <br />
                    Title - {item.node.title}
                    <br />
                    <br />
                    <a
                      href={
                        'https://www.miamidade.gov/global/news-item.page?Mduid_news=' +
                        item.node.guid
                      }
                    >
                      Link
                    </a>
                    <br />
                    <br />
                    Content - {item.node.content}
                    <br />
                  </div>
                );
              })
            : 'nothing'}
        </TextArea>
        */}
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default FeedSection;
