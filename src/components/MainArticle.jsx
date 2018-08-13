import React from 'react';
import '../styles/main.css';
import webpack from './webpack.svg'
import parcel from './parcel.svg'
import rollup from './rollup.svg'

const MainArticle = () => {
  return (
    <div className="main">
      <div className="intro">
        <h2>{"SIMPLIFY YOUR BUILD PROCESS"}</h2>
        <h3>{"Test your React project against Webpack, Parcel and Rollup"}</h3>
        <div className="cards">
          <div className="left">{"Our project includes the abilitiy to create a brand new Webpack config file and show you the speed and size for how long it took to build out your project.   Our application also works for existing projects if you just want to obtain a visual representation of how long your existing build configuration takes. "}</div>
          <div className="right">{`Utilize Bundle Bee to visually represent the build speeds and sizes.  Compare against the top 3 bundle tools on the market:`} < br /> {`Webpack, Parcel & Rollup`}
            <div className="bundle-logos">
              <img src={webpack} alt="Webpack"></img>
              <img src={parcel} alt="Parcel" />
              <img src={rollup} alt="Rollup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainArticle;