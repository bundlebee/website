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
        <section id="content1" className="home-section">
          <div className="container">
            <h3>Installation Instructions</h3>
            <div className="line">
              {`Install the plugin with npm:`}
              <pre className="editor editor-colors">
                <span>{`npm install -g bundle-bee`}</span>
              </pre>
              <span className="source shell">
              </span>
            </div>
            <h1>Basic Usage</h1>
            <p>{"Bundle Bee utlizes the outputted JSON stats file (relative to the root directory)"}</p>
            <h1>Items To Watch For</h1>
            <ul>
              <li>{"When bundling with Parcel, you must define any variables that have been deconstructed from a node module"}</li>
              <li>{"Rollup may build faster, but with Parcel your bundled project will be smaller in size"}</li>
              <li>{"Make sure your root directory contains a directory called \"src\" and there is an index.js file within src"}</li>
            </ul>

          </div>
        </section>
        <section id="content2" className="home-section">
          <div id="config">
            <h2>Example Config Files</h2>
            <button onClick={this.handleWebpackClick}>WEBPACK</button>
            <button onClick={this.handleParcelClick}>PARCEL</button>
            <button onClick={this.handleRollupClick}>ROLLUP</button>
            {ExampleConfig}
          </div>
          <div className="downloads">
            <h3>{"Download Executable"}</h3>
            <button>MacOS</button>
            <button>Windows 10</button>
            <button>Linux</button>
          </div>
        </section>
      </div>
    )
  };
};
