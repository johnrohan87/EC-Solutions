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

const ECBanner = () => {
  return (
    <SectionWrapper>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Help when you need it" />
          <Text content="" />
        </SectionHeader>
        <ImageWrapper>
          <Image src={ecBanner} alt="EC Solutions Banner" height="500px" />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ECBanner;
