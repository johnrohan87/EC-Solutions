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
//https://youtu.be/TjyderLIZf4
//https://www.youtube.com/embed/
import ReactPlayer from 'react-player';

const PostSection = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicPostTemplate {
        edges {
          node {
            id
            data {
              embedded_link {
                author_name
                author_url
                embed_url
              }
              post_content {
                raw
              }
              post_image {
                alt
                url
              }
              post_title {
                raw
              }
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
          {data.allPrismicPostTemplate
            ? data.allPrismicPostTemplate.edges.map((item) => {
                return (
                  <div
                    key={item.node.data.post_title.raw[0].text}
                    style={{
                      border: '15px solid lightgrey',
                      margin: '10px',
                      padding: '10px',
                    }}
                  >
                    <h2>{item.node.data.post_title.raw[0].text}</h2>
                    <br />
                    <img src={item.node.data.post_image.url} />
                    {item.node.data.embedded_link ? (
                      <ReactPlayer
                        url={item.node.data.embedded_link.embed_url}
                      />
                    ) : null}

                    <p>
                      {item.node.data.post_content.raw.map((item) => {
                        return <p>{item.text}</p>;
                      })}
                    </p>
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
