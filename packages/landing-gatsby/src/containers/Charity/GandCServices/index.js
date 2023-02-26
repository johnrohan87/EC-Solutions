import React from 'react';
import { Link } from 'gatsby';
import Heading from 'common/components/Heading';
//import Text from 'common/components/Text';
//import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import List from 'common/components/List';
import SectionWrapper, {
  SectionHeader,
  TextWrapper,
  CardWrapper,
} from './mapSection.style';

//import ecBanner from 'common/assets/image/charity/New-EC-Logo.png';
import floridaVendorBanner from 'common/assets/image/charity/Button_Florida.png';
import floridaBanner from 'common/assets/image/charity/florida-state-seal.png';

//import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ECBanner = () => {
  return (
    <SectionWrapper style={{ minHeight: '700px' }}>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Grief and Counseling Services" />
          {/*<Text content="Help when you need it" />
          <h2 style={{ marginTop: '0px' }}>Help when you need it</h2>*/}
        </SectionHeader>
        <TextWrapper>
          <CardWrapper>
            <b>
              <Text
                content="Emotional Injuries Services"
                as="h3"
                textAlign="center"
              />
            </b>
          </CardWrapper>
          <CardWrapper>
            <Link to="https://www.betterhelp.com/">
              <Text content="Better Help" as="h3" textAlign="center"></Text>
            </Link>
            <Text
              content="Tap into the world's largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want."
              as="h4"
              textAlign="center"
            />
          </CardWrapper>
          <CardWrapper>
            <Link to="https://crashsupportnetwork.com/">
              <Text
                content="Crash Support Network"
                as="h3"
                textAlign="center"
              />
            </Link>
            <Text
              content="Support community for crash survivors"
              as="h4"
              textAlign="center"
            />
          </CardWrapper>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ECBanner;
