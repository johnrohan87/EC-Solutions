import React from 'react';
import { WithStore } from 'pure-react-carousel';

class propsComponent extends React.Component {
  render() {
    return <div>Hello from my component</div>;
  }
}

export default WithStore(propsComponent, (state) => ({
  // these are read only properties.  we use the "deepFreeze"
  // npm package to make these properties immutable. You don't have to use
  // all of these, just pick the ones you need.
  currentSlide: state.currentSlide,
  disableAnimation: state.disableAnimation,
  hasMasterSpinner: state.hasMasterSpinner,
  imageErrorCount: state.imageErrorCount,
  imageSuccessCount: state.imageSuccessCount,
  lockOnWindowScroll: state.lockOnWindowScroll,
  masterSpinnerThreshold: state.masterSpinnerThreshold,
  naturalSlideHeight: state.naturalSlideHeight,
  naturalSlideWidth: state.naturalSlideWidth,
  orientation: state.orientation,
  slideSize: state.slideSize,
  slideTraySize: state.slideTraySize,
  step: state.step,
  dragStep: state.dragStep,
  totalSlides: state.totalSlides,
  touchEnabled: state.touchEnabled,
  dragEnabled: state.dragEnabled,
  visibleSlides: state.visibleSlides,
}));
