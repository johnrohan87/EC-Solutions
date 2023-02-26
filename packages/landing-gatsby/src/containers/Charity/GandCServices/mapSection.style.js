import styled from 'styled-components';
import ecBackground from 'common/assets/image/charity/GandCServices.jpg';

const SectionWrapper = styled.section`
  width: 100%;
  padding: 10px 0 10px 0;
  background-color: black;
  background-image: url(${ecBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  @media only screen and (max-width: 1440px) {
    padding: 30px 0 0 0;
  }
  @media only screen and (max-width: 1360px) {
    padding: 15px 0 0px;
  }
  @media only screen and (max-width: 991px) {
    padding: 10px 0 0 0;
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
  @media only screen and (max-width: 1440px) {
    margin-bottom: 40px;
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
    margin-top: 50px;
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

export const TextWrapper = styled.div`
  text-align: center;
  margin: 5rem;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 40px;
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
    margin-top: 50px;
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
  h3 {
    color: white;
    font-weight: 300;
    opacity: 1;
    text-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 30px #000000;
    @media only screen and (max-width: 1440px) {
      font-size: 32px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 25px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 25px;
    }
  }
  h4 {
    color: white;
    text-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 30px #000000;
    @media only screen and (max-width: 1440px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 15px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 15px;
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
export const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 10px;
  -webkit-box-shadow: 0 3px 10px;
  -moz-box-shadow: 0 3px 10px;
`;

export default SectionWrapper;
