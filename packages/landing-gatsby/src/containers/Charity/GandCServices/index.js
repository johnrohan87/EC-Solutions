import React, { useState } from 'react';
import { Link } from 'gatsby';
import Heading from 'common/components/Heading';
//import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import FormGroup from 'common/components/FormGroup';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import SectionWrapper, {
  SectionHeader,
  TextWrapper,
  CardWrapper,
  ImageWrapper,
  ImageWrapper2,
} from './mapSection.style';

//import ecBanner from 'common/assets/image/charity/New-EC-Logo.png';
import betterHelp from 'common/assets/image/charity/BetterHelp.png';
import CrashSupportNetwork from 'common/assets/image/charity/CrashSupportNetwork.jpeg';
//import { Button } from 'bootstrap';

//import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ECBanner = () => {
  const [Email, setEmail] = useState('');
  return (
    <SectionWrapper style={{ minHeight: '700px' }}>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Grief and Counseling Services" />
          {/*<Text content="Help when you need it" />
          <h2 style={{ marginTop: '0px' }}>Help when you need it</h2>*/}
        </SectionHeader>
        <TextWrapper>
          {/* 
          <CardWrapper style={{ margin: '2rem' }}>
            <b>
              <Text
                content="Emotional Injuries Services"
                as="h3"
                textAlign="center"
              />
            </b>
          </CardWrapper>
          */}
          <CardWrapper>
            <Link to="https://www.betterhelp.com/">
              {/** <Text content="Better Help" as="h3" textAlign="center"></Text> **/}
              <ImageWrapper style={{ overflow: 'hidden', width: '100%' }}>
                <Image
                  src={betterHelp}
                  alt="Better Help"
                  height="100%"
                  minHeight="10rem"
                  maxHeight="10vw"
                  maxWidth="450px"
                />
              </ImageWrapper>
            </Link>
            <Text
              content="Tap into the world's largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want."
              as="h4"
              textAlign="center"
            />
            <FormGroup width={'100%'} padding={'2rem !important'}>
              <form
                action="#"
                data-netlify="true"
                name="contact"
                method="post"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Text
                  as="h3"
                  content="E.C. Solutions Group is partnered with Better Help to provide free grief and counseling services. Please provide us with your email and someone from our company will be in contact with you."
                />
                <Text as="h3" content="Thank you." />
                <Input
                  name="email"
                  onChange={(e) => setEmail(e)}
                  value={Email}
                  inputType={'email'}
                  labelColor={'white'}
                />
                <Button
                  onClick={() => {
                    console.log('submited');
                  }}
                  color={'black'}
                  type={'submit'}
                  variant={'extendedFab'}
                  title={'Submit'}
                />
              </form>
            </FormGroup>
            {/**<Card><Text content="Testing" as="h4" /><Input label="Testing"/></Card>**/}
          </CardWrapper>
          <CardWrapper>
            <Link to="https://crashsupportnetwork.com/">
              <ImageWrapper2 style={{ overflow: 'hidden' }}>
                <Image
                  src={CrashSupportNetwork}
                  alt="Crash Support Network"
                  height="100%"
                  maxHeight="10vw"
                  maxWidth="450px"
                />
              </ImageWrapper2>
              <Text
                content="Crash Support Network"
                as="h3"
                textAlign="center"
              />
            </Link>
            <Text
              content="Support community for crash survivors"
              as="h3"
              textAlign="center"
            />
            <Text
              content="The Crash Support Network is an award-winning community organization supporting crash survivors since 2019"
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
