import React from 'react';
import Heading from 'common/components/Heading';
//import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

//import ecBanner from 'common/assets/image/charity/New-EC-Logo.png';
import floridaVendorBanner from 'common/assets/image/charity/Button_Florida.png';
import floridaBanner from 'common/assets/image/charity/florida-state-seal.png';

//import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ECBanner = () => {
  return (
    <SectionWrapper style={{ minHeight: '500px' }}>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Accreditations and Licensing" />
          {/*<Text content="Help when you need it" />
          <h2 style={{ marginTop: '0px' }}>Help when you need it</h2>*/}
        </SectionHeader>
        <ImageWrapper style={{ overflow: 'hidden' }}>
          {/*<ParallaxProvider>
            <Parallax x={[-50, 50]} tagOuter="figure">*/}
          <Image
            src={floridaVendorBanner}
            alt="EC Solutions Banner"
            height="100%"
            maxHeight="160px"
            maxWidth="450px"
          />
          <Image
            src={floridaBanner}
            alt="EC Solutions Banner"
            height="100%"
            maxHeight="260px"
            maxWidth="450px"
          />
          {/*</Parallax>
          </ParallaxProvider>*/}
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ECBanner;
