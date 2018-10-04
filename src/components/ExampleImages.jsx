// @ts-nocheck
import React from 'react';

import step1 from './example-images/BundleBeeDemo-v2.gif';



const ExampleImages = () => {
  return (
    <div>
      <div id="example-images">
        
        <div id="left-col">
          <img src={step1} alt="example images" />
        </div>
        <div>
        <div className="download">
          <h3 class="download_txt">{"Download Executable"}</h3>
          <a className="btn" className="btn btn-lg btn-block" href="https://s3-us-west-2.amazonaws.com/www.bundlebee.io/pgm.zip" download=""><span  ></span>MacOS</a>
          <p class="fine-print">64-bit macOS 10.10 and later</p>
          <a className="windows" href=""><span  ></span>Windows10</a>
          <p class="fine-print">Coming Soon</p>
        </div>
          <div className="cards left">{"Current web applications can grow immensely in a very short period of time.  Having the proper bundle tool is immensely useful for not just the developers but for the final product that is pushed to production.  Bundle Bee provides the ability for React developers to test, not just their current bundle configuration, but also compare it to other potential solutions to see which option is the most performant in terms of speed and bundle size.  This not only saves the developers time in setting up their bundle tools, but more importantly enables them to ship the fastest code for their users."}</div>
        </div>
      </div>
    </div>
  )
};

export default ExampleImages;