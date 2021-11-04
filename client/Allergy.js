import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import allergens from './allergens';
import Checkbox from './Checkbox';


class Allergy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    console.log(this.state.checkedItems);
  }

  render() {
    const allergies = [];
    this.state.checkedItems.forEach((val, key) => {
      if (val) allergies.push(key);
      console.log(allergies);
    });
    return (
      <div className="allergy_list">
        <Fragment>
          {
            allergens.map(item => (
              <label key={item.medication}>
                <Checkbox name={item.drugClass} checked={this.state.checkedItems.get(item.drugClass)} onChange={this.handleChange} />
                <span style={{ marginLeft: '20px' }}></span>
                {item.medication}
              </label>
            ))
          }
        </Fragment>
      </div>
    );
  }
}

export default Allergy;