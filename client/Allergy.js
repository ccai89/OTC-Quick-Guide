import React from 'react';
import PropTypes from 'prop-types';
import allergens from './allergens';
import Checkbox from './Checkbox';


class Allergy extends React.Component {
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

  }


  render() {
    this.state.checkedItems.forEach((val,key) => console.log(key));
    return (
      <React.Fragment>
        {
          allergens.map(item => (
            <div className="allergy_list">
              <label key={item.medication}>
                <Checkbox name={item.drugClass} checked={this.state.checkedItems.get(item.drugClass)} onChange={this.handleChange} />
                {item.medication}
              </label>
            </div>
          ))
        }
      </React.Fragment>
    );
  }
}

export default Allergy;