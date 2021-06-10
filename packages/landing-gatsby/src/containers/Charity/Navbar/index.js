import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/assets/image/charity/EC-SolutionsBanner_2.jpg';
import heartImage from 'common/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="EC Solutions" />
        </Link>
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#donate" offset={81}>
            Help us help them
          </AnchorLink>
          <Button>
            <span className="text">SPREAD</span>
            <Image src={heartImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
