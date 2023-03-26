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
    margin: 2rem;
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
    padding: 3vw 5vw 1vw 5vw;
    color: white;
    text-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 30px #000000;
    @media only screen and (max-width: 1440px) {
      font-size: 25px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 25px;
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
  margin: 5vw 0px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  height: 100%;
  max-width: 100vw;
  img {
    min-height: 10vh;
    padding: 0.1rem;
    margin-top: 1rem;
    max-width: 50vw;
    -webkit-filter: drop-shadow(0px 0px 20px #000000);
    filter: drop-shadow(0px 0px 20px #000000);
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    img {
      height: 260px;
      padding: 20px 0;
      max-width: 70vw;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    img {
      height: 200px;
      padding: 20px 0;
      max-width: 80vw;
    }
  }
`;
export const ImageWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  height: 100%;
  max-width: 100vw;
  img {
    min-height: 40vh;
    padding: 0.1rem;
    margin-top: 1rem;
    max-width: 50vw;
    -webkit-filter: drop-shadow(0px 0px 20px #000000);
    filter: drop-shadow(0px 0px 20px #000000);
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    img {
      min-height: 30vh;
      padding: 20px 0;
      max-width: 70vw;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    img {
      height: 100%;
      min-height: 25vh;
      padding: 20px 0;
      width: auto;
    }
  }
`;

export default SectionWrapper;
