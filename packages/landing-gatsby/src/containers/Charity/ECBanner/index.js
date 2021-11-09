import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

import ecBanner from 'common/assets/image/charity/New-EC-Logo.png';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ECBanner = () => {
  return (
    <SectionWrapper style={{ minHeight: '600px' }}>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Victim Services" />
          {/*<Text content="Help when you need it" />*/}
          <h2 style={{ marginTop: '0px' }}>Help when you need it</h2>
        </SectionHeader>
        <ImageWrapper style={{ overflow: 'hidden' }}>
          <ParallaxProvider>
            <Parallax y={[-50, 50]} tagOuter="figure">
              <Image
                src={ecBanner}
                alt="EC Solutions Banner"
                height="260px"
                width="100%"
              />
            </Parallax>
          </ParallaxProvider>
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ECBanner;
