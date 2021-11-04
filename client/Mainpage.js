import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Medication from './Medications';

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'page': 'main'
    };

    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(id) {
    const newState = {};
    if (this.state['page'] === id) {
      newState['page'] = id;
    }
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
        Category: 'booboo',
        Title: 'Cuts and Scrapes'
      }
    ];
    return(
      <div id="main_categories">
        <Fragment>
          {
            mainObj.map(el => {
              return <button id={el.Category} onClick={this.selectPage(el.Category)} className="primary">{el.Title}</button>;
            })
          }
        </Fragment>
      </div>
    );
  }

  render() {
    let pageContent = [];
    if(this.state.page === 'main') pageContent = this.genMidBody();

    return (
      <div>
        {pageContent}
      </div>
    );
  }
}

export default Mainpage;