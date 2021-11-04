import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from './styles.css';
import Mainpage from './Mainpage';
import Allergy from './Allergy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'page': 'main',
      'button': 'Enter Your Allergies'
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    const newState = {};
    if (this.state['page'] === 'main') {
      newState['page'] = 'allergies';
      newState['button'] = 'Back';
    }
    if (this.state['page'] === 'allergies') {
      newState['page'] = 'main';
      newState['button'] = 'Enter Your Allergies';
    }
    this.setState(newState);
  }

  render() {
    let pageContent = [];
    if(this.state.page === 'main') {
      pageContent = <Mainpage />;
    }

    if(this.state.page === 'allergies') {
      pageContent = <Allergy/>;
    }

    return(
      <div>
        <div id="nav"><button id="nav_button" onClick={this.changePage}>{this.state.button}</button></div>
        {pageContent}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));