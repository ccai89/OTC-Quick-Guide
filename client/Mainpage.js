import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Medication from './Medications';

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'page': 'main',
      'height':'200px'
    };

    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(id) {
    const newState = {};
    newState.page = id;
    newState.height = '50px';
    this.setState(newState);
  }

  genMidBody() {
    const mainObj = [
      {
        Category: 'pain',
        Title: 'General Pain'
      },
      {
        Category: 'tummy',
        Title: 'Upset Stomach'
      },
      {
        Category: 'rash',
        Title: ' Skin Irritation'
      },
      {
        Category: 'allergy',
        Title: 'Allergies'
      },
      {
        Category: 'cough',
        Title: 'Cough and Cold'
      },
      {
        Category: 'zzz',
        Title: ' Sleep Aids'
      },
      {
        Category: 'eye',
        Title: 'Eye and Ear Irritation'
      },
      {
        Category: 'ouchie',
        Title: 'Cuts and Scrapes'
      }
    ];
    return(
      <div id="main_categories">
        <Fragment>
          {
            mainObj.map(el => {
              return <button id={el.Category} onClick={() => this.selectPage(el.Category)} className="primary" style = {{height:`${this.state.height}`}}> {el.Title}</button>;
            })
          }
        </Fragment>
      </div>
    );
  }


  render() {
    let pageContent = [];
    if(this.state.page === 'main') pageContent = this.genMidBody();
    else {
      console.log(this.state.page);
      pageContent = <Medication abc = {this.state.page}/>;
    }
    
    return (
      <div>
        {pageContent}
      </div>
    );
  }
}

export default Mainpage;