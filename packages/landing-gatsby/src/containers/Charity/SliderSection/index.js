import React from 'react';
//import { render } from 'react-dom';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import CustomSectionWrapper from './mapSection.style';

const content = [
  {
    title: 'Car Accident? Need Help Now?',
    description: 'Call EC Solutions for help now',
    button: `coordinator@ecsolutionsgroup.com`,
    image:
      'https://images.prismic.io/ecsolutions/4760061f-7e9b-4f85-b1a3-dae758681308_ECSolutionsAccident.jpg',
    user: 'John Doe',
    userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
  },
  {
    title: 'Grief and Crisis Counseling',
    description: 'We help provide all the solutions for your circumstances',
    button: 'coordinator@ecsolutionsgroup.com',
    image:
      'https://images.prismic.io/ecsolutions/3f2c3823-1ee8-478a-b1ce-210fd86dd3d5_grief+and+crisis+counseling.jpg',
    user: 'Samantha',
    userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
  },
  {
    title: 'Connecting',
    description: 'persons with other service providers',
    button: 'coordinator@ecsolutionsgroup.com',
    image:
      'https://images.prismic.io/ecsolutions/36c0299f-518e-4ca6-90cc-cc3675c51689_connecting.jpg',
    user: 'Michael',
    userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
  },
];

const SliderSection = (props) => {
  return (
    <CustomSectionWrapper>
      <Slider className="slider-wrapper" autoplay="500" touchDisabled="true">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>
                <a
                  style={{ color: 'black' }}
                  href="mailto:coordinator@ecsolutionsgroup.com"
                >
                  {item.button}
                </a>
              </button>
            </div>
            {/* 
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>*/}
          </div>
        ))}
      </Slider>
    </CustomSectionWrapper>
  );
};

export default SliderSection;
