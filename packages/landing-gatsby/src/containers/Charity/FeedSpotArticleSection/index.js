import React, { Fragment } from 'react';
//import { useStaticQuery, graphql } from 'gatsby';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/theme/charity';
import { ResetCSS } from 'common/assets/css/style';
import Navbar from 'containers/Charity/Navbar';
import Footer from 'containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from 'containers/Charity/charity.style';
import Seo from 'components/seo';
import BannerWrapper, {
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

const FeedSpotArticleSection = ({ pageContext }) => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <Seo title="EC Solutions" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <BannerWrapper>
              <ContentWrapper>
                {/*<div>{pageContext.id}</div>*/}
                <h1>{pageContext.title}</h1>
                {/*<div>{pageContext.slug}</div>*/}
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: pageContext.content }}
                />
              </ContentWrapper>
            </BannerWrapper>
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};

export default FeedSpotArticleSection;

// eslint-disable-next-line no-lone-blocks
