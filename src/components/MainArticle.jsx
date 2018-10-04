// @ts-nocheck
import React from 'react';
import '../styles/main.css';
import * as webpack from './webpack.svg';
import parcel from './parcel.svg';
import rollup from './rollup.svg';

const MainArticle = () => {
  return (
    <div className="main">
      <div className="intro">
  {/* <h3>{"Test your React project against Webpack, Parcel and Rollup"}</h3> */}
        <div className="cards">
          {/* <div className="left">{"Current web applications can grow immensely in a very short period of time.  Having the proper bundle tool is immensely useful for not just the developers but for the final product that is pushed to production.  Bundle Bee provides the ability for React developers to test, not just their current bundle configuration, but also compare it to other potential solutions to see which option is the most performant in terms of speed and bundle size.  This not only saves the developers time in setting up their bundle tools, but more importantly enables them to ship the fastest code for their users."}</div> */}
        {/* <div className="right">{`Utilize Bundle Bee to visually represent the build speeds and sizes.  Compare against the top 3 bundle tools on the market:`} < br /> {`Webpack, Parcel & Rollup`} */}
            {/* <div className="bundle-logos">
              <img src={webpack} alt="Webpack"></img>
              <img src={parcel} alt="Parcel" />
              <img src={rollup} alt="Rollup" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
};

export default MainArticle;