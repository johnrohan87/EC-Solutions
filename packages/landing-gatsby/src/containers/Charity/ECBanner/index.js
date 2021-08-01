import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

import ecBanner from 'common/assets/image/charity/EC-SolutionsBanner_2.jpg';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ECBanner = () => {
  return (
    <SectionWrapper style={{ minHeight: '700px' }}>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Help when you need it" />
          <Text content="" />
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
