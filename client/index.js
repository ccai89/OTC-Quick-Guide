import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from './styles.css';
import Mainpage from './Mainpage';
import Allergies from './Allergies';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'page': 'allergies'
    };
    // this.update = this.update.bind(this);
  }

  // update() {
  //   const newState = {};
  //   if(this.state['page'] === 'main')
  // }




  render() {
    let pageContent = [];
    if(this.state.page === 'main') {
      pageContent.push(Mainpage());
    }
    if(this.state.page === 'allergies') {
      pageContent = Allergies();
    }
    return(
      <div>
        {pageContent}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));