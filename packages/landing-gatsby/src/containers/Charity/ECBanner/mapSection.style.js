import styled from 'styled-components';
import ecBackground from 'common/assets/image/charity/EC-Background.jpg';

const SectionWrapper = styled.section`
  width: 100%;
  padding: 81px 0 0 0;
  background-color: black;
  background-image: url(${ecBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1440px) {
    padding: 70px 0 0 0;
  }
  @media only screen and (max-width: 1360px) {
    padding: 45px 0 0px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 0 0 0;
  }
  .parallax-outer {
    margin: 0px;
  }
  div {
    padding: 0px;
  }
`;

export const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 90px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 0px;
  }

  h2 {
    color: white;
    font-weight: 300;
    margin-top: 100px;
    margin-bottom: 12px;
    text-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 30px #000000;
    @media only screen and (max-width: 1440px) {
      font-size: 36px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 34px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 30px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 15px;
      line-height: 28px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  height: 700px;
  img {
    @media only screen and (max-width: 480px) {
      height: 260;
    }
    @media only screen and (min-width: 300px) and (max-width: 480px) {
      height: 400px;
      padding-top: 75px;
    }
  }
`;

export default SectionWrapper;
