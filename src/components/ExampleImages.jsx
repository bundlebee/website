import React from 'react';

import step1 from './example-images/bundle-bee-step1.png';
import step2 from './example-images/bundle-bee-step2.png';
import step3 from './example-images/bundle-bee-step3.png';
import step4 from './example-images/bundle-bee-step4.png';
import step5 from './example-images/bundle-bee-step5.png';



const ExampleImages = () => {
  return (
    <div id="example-images">
      <img src={step1} alt="example images" />
      <img src={step2} alt="example images" />
      <img src={step3} alt="example images" />
      <img src={step4} alt="example images" />
      <img src={step5} alt="example images" />
    </div>
  )
};

export default ExampleImages;