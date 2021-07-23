import React from 'react';
//import { render } from 'react-dom';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';

const content = [
  {
    title: 'Domestic Violence',
    description: 'EC Solutions was there for me when I had no other options',
    button: `★ ★ ★ ★ ★`,
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'John Doe',
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
    <div>
      <Slider className="slider-wrapper">
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
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
