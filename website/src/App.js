import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MainArticle from './components/MainArticle.jsx';
import ExampleImages from './components/ExampleImages.jsx';
import Workflow from './components/Workflow.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainArticle />
        <ExampleImages />
        <Workflow />
        <Footer />
      </div>
    );
  }
}

export default App;
