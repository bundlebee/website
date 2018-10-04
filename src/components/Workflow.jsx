// @ts-nocheck
import React, { Component } from 'react'
import '../styles/workflow.css';

import WebpackConfig from './example-images/webpack-example-config.png';
import ParcelConfig from './example-images/parcel-example-config.png';
import RollupConfig from './example-images/rollup-example-config.png';

export default class Workflow extends Component {
  constructor() {
    super();
    this.state = {
      config: ''
    };
    this.handleWebpackClick = this.handleWebpackClick.bind(this);
    this.handleParcelClick = this.handleParcelClick.bind(this);
    this.handleRollupClick = this.handleRollupClick.bind(this);
  }

  handleWebpackClick() {
    this.setState({ config: 'Webpack' });
  }

  handleParcelClick() {
    this.setState({ config: 'Parcel' });
  }

  handleRollupClick() {
    this.setState({ config: 'Rollup' });
  }

  DisplayWebpackConfig() {
    return <img src={WebpackConfig} alt="WebpackConfig" />
  }
  DisplayParcelConfig() {
    return <img src={ParcelConfig} alt="ParcelConfig" />
  }
  DisplayRollupConfig() {
    return <img src={RollupConfig} alt="RollupConfig" />
  }

  render() {

    let ExampleConfig = null;
    if (this.state.config === 'Webpack') ExampleConfig = this.DisplayWebpackConfig();
    else if (this.state.config === 'Parcel') ExampleConfig = this.DisplayParcelConfig();
    else if (this.state.config === 'Rollup') ExampleConfig = this.DisplayRollupConfig();

    return (
      <div className="workflow">
        <section className="home-section">
          <div id="config">
            <h2>Example Config Files</h2><p>{`(Click a tool below:)`}</p>
            <button onClick={this.handleWebpackClick}>WEBPACK</button>
            <button onClick={this.handleParcelClick}>PARCEL</button>
            <button onClick={this.handleRollupClick}>ROLLUP</button>
            {ExampleConfig}
          </div>
        </section>
        <section id="content1" className="home-section">
          <div className="container">
            <h3>Installation Instructions</h3>
            <div className="line">
              {`Clone Repo locally:`}
              <pre className="editor editor-colors">
                <span>{`git clone https://github.com/bundlebee/bundle-bee.git bundle-bee`}</span>
              </pre>
              <pre>
                <span>{`cd bundle-bee`}</span>
              </pre>
              <pre>
                <span>{`npm i || yarn`}</span>
              </pre>
              <pre>
                <span>{`npm run electron || yarn electron`}</span>
              </pre>

            </div>
            <h1>Items To Watch For</h1>
            <ul>
              <li>{"When bundling with Parcel, you must define any variables that have been deconstructed from a node module"}</li>
              <li>{"Rollup may build faster, but with Parcel your bundled project will be smaller in size"}</li>
              <li>{"Make sure your root directory contains a directory called \"src\" and there is an index.js file within src"}</li>
            </ul>
            <h1>Additional Resources</h1>
            <ul>
              <li>
                <a href="https://wanago.io/courses/webpack-4-course/">Webpack Course</a>
              </li>
              <li>
                <a href="https://code.lengstorf.com/learn-rollup-js/">Rollup Tutorial</a>
              </li>
              <li>
                <a href="https://x-team.com/blog/rollup-webpack-parcel-comparison/">Bundle Comparison</a>
              </li>
              <li>
                <a href="https://medium.com/@ibrahimbutt/if-youve-ever-configured-webpack-parcel-will-blow-your-mind-b615468cee78">Medium Parcel Article</a>
              </li>

            </ul>
          </div>
        </section>
        <div className="download">
          <h3>{"Download Executable"}</h3>
          <a className="btn btn-lg btn-block" href="https://s3-us-west-2.amazonaws.com/www.bundlebee.io/pgm.zip" download=""><span  ></span>MacOS</a>
          <p class="fine-print">64-bit macOS 10.10 and later</p>
          <a className="windows" href=""><span  ></span>Windows10</a>
          <p class="fine-print">Coming Soon</p>
        </div>

      </div>
    )
  };
};
