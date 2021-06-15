import React from 'react';
import GoogleMapReact from 'google-map-react';

import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

import mapImage from 'common/assets/image/charity/EC-SolutionsBanner.jpg';

const GoogleMapSection = (props) => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  let defaultProps = {
    center: {
      lat: 25.65,
      lng: -80.44,
    },
    zoom: 11,
  };

  return (
    <SectionWrapper>
      <Container width="1200px">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <img
              lat={25.65881}
              lng={-80.44656}
              text="EC Solutions"
              height="60px"
              width="60px"
              style={{ borderRadius: '50%' }}
              src={mapImage}
            />
          </GoogleMapReact>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default GoogleMapSection;
