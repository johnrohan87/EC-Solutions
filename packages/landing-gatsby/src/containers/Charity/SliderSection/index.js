import React from 'react';
import Container from 'common/components/UI/Container';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import style from 'pure-react-carousel/dist/react-carousel.es.css';
import buttons from './styles.module.scss';
import propsComponent from './propsComponent';
//import { styles } from 'styled-system';

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    description:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Daniel',
    userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
  },
  {
    title: 'Tortor Dapibus',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Samantha',
    userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
  },
  {
    title: 'Phasellus volutpat metus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Michael',
    userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
  },
  {
    title: 'Ultricies Vulputate Mollis',
    description:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Jessica',
    userProfile: 'https://s7.postimg.cc/7ihnu80ij/4_3x.png',
  },
  {
    title: 'Odo Aenean Quam Tortor',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'William',
    userProfile: 'https://s7.postimg.cc/f9ydt4zmj/2_3x.png',
  },
  {
    title: 'Volutpat Aenean metus',
    description:
      'quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Katerina',
    userProfile: 'https://s7.postimg.cc/hsk2th5tn/6_3x.png',
  },
];

const SliderSection = (props) => {
  return (
    <Container width="1200px" className={style}>
      <h2>Custom style and animations</h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        totalSlides={6}
      >
        <div className={buttons.container}>
          <Slider>
            {content.map((item, key) => {
              return (
                <Slide index={key} className={buttons.slides}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: '100%',
                      width: '100%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <h2 className={buttons.h2}>
                      {item.title}
                      {key}
                    </h2>
                    <p>{item.description}</p>
                    <propsComponent />
                    <button>{item.button}</button>
                    <div>
                      <div
                        style={{ backgroundImage: `url(${item.userProfile})` }}
                      >
                        {item.user}
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </Slider>
          <ButtonBack className={buttons.buttonBack}>{'<'}</ButtonBack>
          <ButtonNext className={buttons.buttonNext}>{'>'}</ButtonNext>
        </div>
      </CarouselProvider>
    </Container>
  );
};

export default SliderSection;
