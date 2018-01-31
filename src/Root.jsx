import React, { Component } from 'react';

import styles from './Root.css';


export default class Root extends Component {
  constructor(props){
    super(props);

    this.state = {
      specs: {
        width: 1175,
        height: 150,
        padding: 25,
        xParam: 'sec',
        yParam: 'dif'
      }
    };

    this.handleNewSizeSpecs = this.handleNewSizeSpecs.bind(this);
  }

  handleNewSizeSpecs(e){
    e.preventDefault();

    const newSpecs = this.state.specs;
    const attr = e.target.getAttribute('value');

    let newValue = attr === 'padding' ? 5 : 10;

    if (e.target.text === '_') {
      newValue = newValue * -1;
    }
    newSpecs[attr] = newSpecs[attr] + newValue;

    this.setState({
      specs: newSpecs
    });
  }

  render() {

    var nbaLogo = require("./img/logos/nbalogo.svg"),
        twitterLinkLogo = require("./img/twitter-256.png");

    return (
      <div className="main-container">
        <div id="header">
          <div id="updated">v1.0 (1/30/18)</div>
          <img src={nbaLogo} />
          <h1>Game Pulse</h1>
          <a href="" target="_blank" id="madeby">by Stu Beezy</a> <a href="https://twitter.com/stu_beezy" target="_blank" id="twitterLink"><img src={twitterLinkLogo} /></a>
          <div className="addthis_sharing_toolbox"></div>
        </div>
      </div>
    )
  }
}
