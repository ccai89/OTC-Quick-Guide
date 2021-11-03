import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from './styles.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="primary_buttons">
          <span className="primary" id="pain">General Pain</span>
          <span className="primary" id="tummy">Upset Stomach</span>
          <span className="primary" id="rash">Topical Irritation</span>
          <span className="primary" id="allergy">Allgeries</span>
          <span className="primary" id="cough">Cough and Cold</span>
          <span className="primary" id="zzz">Sleep Aids</span>
          <span className="primary" id="eye">Eye and Ear Irritation</span>
          <span className="primary" id="booboo">Cuts and Scrapes</span>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));