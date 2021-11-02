import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div> <MainPage> </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));
