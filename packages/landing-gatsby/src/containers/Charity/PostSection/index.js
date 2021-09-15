import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  //TextArea,
  PostContainer,
  //ImageArea,
  //HighlightedText,
} from './bannerSection.style';
//https://youtu.be/TjyderLIZf4
//https://www.youtube.com/embed/
import ReactPlayer from 'react-player';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import moment from 'moment';
//import { Autoplay } from 'swiper';

const PostSection = () => {
  /*embedded_link {
  author_name
  author_url
  embed_url
}*/

  const data = useStaticQuery(graphql`
    {
      allPrismicPostTemplate {
        edges {
          node {
            id
            data {
              post_content {
                raw
                html
              }
              post_image {
                alt
                url
                gatsbyImageData
              }
              post_title {
                raw
              }
            }
            first_publication_date
          }
        }
      }
    }
  `);

  const arrangeData = (data) => {
    //console.log(data);
    let arrangedData = data.sort((a, b) => {
      let tmpA = moment(a.node.first_publication_date);
      let tmpB = moment(b.node.first_publication_date);
      //.replace(/-/g,'/')

      //console.log(tmpA,tmpB)
      let result = moment().subtract(tmpA - tmpB);

      //console.log(moment(tmpA).isBefore(moment(tmpB)))

      result = moment(tmpA).isBefore(moment(tmpB)) ? -1 : 1;
      return result;
    });
    let reversedResult = arrangedData.reverse();
    //console.log(reversedResult);

    let htmlResult = reversedResult.map((item) => {
      //console.log(item.node);
      const image = getImage(item.node.data.post_image.gatsbyImageData);
      //updating for push
      return (
        <>
          <div
            id="tv"
            key={item.node.data.post_title.raw[0].text}
            style={{
              border: '15px solid darkgrey',
              margin: '20px 0',
            }}
          >
            <h2>{item.node.data.post_title.raw[0].text}</h2>
            {/*
            //timestamp test
            <h2>{item.node.first_publication_date}</h2>
            */}
            <br />
            <div className="imagesContainer">
              <div>
                <GatsbyImage
                  image={image}
                  alt="test"
                  imgStyle={{ objectFit: 'contain' }}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.node.data.post_content.html,
                }}
              />
            </p>
            <div className="videoContainer">
              {item.node.data.embedded_link ? (
                <div>
                  <ReactPlayer
                    url={item.node.data.embedded_link.embed_url}
                    height="100%"
                    width="100%"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <br />
        </>
      );
    });
    return htmlResult;
  };

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <PostContainer>
          {data.allPrismicPostTemplate
            ? arrangeData(data.allPrismicPostTemplate.edges)
            : 'nothing'}
        </PostContainer>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default PostSection;

{
  /**
   data.allPrismicPostTemplate.edges.map((item) => {
                console.log(item.node)
                const image = getImage(
                  item.node.data.post_image.gatsbyImageData
                );
                //updating for push
                return (
                  <>
                    <div
                      id="tv"
                      key={item.node.data.post_title.raw[0].text}
                      style={{
                        border: '15px solid darkgrey',
                        margin: '20px 0',
                      }}
                    >
                      <h2>{item.node.data.post_title.raw[0].text}</h2>
                      <h2>{item.node.first_publication_date}</h2>
                      <br />
                      <div className="imagesContainer">
                        <div>
                          <GatsbyImage
                            image={image}
                            alt="test"
                            imgStyle={{ objectFit: 'contain' }}
                            style={{ height: '100%', width: '100%' }}
                          />
                        </div>
                      </div>
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.node.data.post_content.html,
                          }}
                        />
                      </p>
                      <div className="videoContainer">
                        {item.node.data.embedded_link ? (
                          <div>
                            <ReactPlayer
                              url={item.node.data.embedded_link.embed_url}
                              height="100%"
                              width="100%"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <br />
                  </>
                );
              })
   */
}
