import React from 'react';
import { Link } from 'gatsby';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import NavbarWrapper from './navbar.style';
import MenuWrapper from './navbar.style';
//, { MenuWrapper, Button }
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import 'react-sharingbuttons/dist/main.css';

import logoImage from 'common/assets/image/charity/EC-SolutionsBanner_2.jpg';
//import heartImage from 'common/assets/image/charity/heart-red.png';

const Navbar = () => {
  const fb_url = 'https://www.facebook.com/ECSolutionsGroup';
  const tw_url = 'https://twitter.com/ECSolutionsGrp';
  const shareText = 'Check out EC Solutions!';

  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="EC Solutions" />
        </Link>
        {/* <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#donate" offset={81}>
            Help us help them
          </AnchorLink>
          <Button>
            <span className="text">SPREAD</span>
            <Image src={heartImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>*/}
        <MenuWrapper>
          <Facebook url={fb_url} />
          <Twitter url={tw_url} shareText={shareText} />
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
