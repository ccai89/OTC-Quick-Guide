import React, { Component } from 'react';

class Medications extends Component{
  constructor(props) {
    super(props);
    this.state = {
      "medicationList": []
    };
  }

  genDrugInfo(drugClass){
    const drugInfo = [];

    drugClass.forEach((el,i) =>{
      drugInfo.push(
        <div className="suggestions">
          <div><strong>Brand Name:</strong> {el.brand}</div>
          <div><strong>Generic Name:</strong> {el.generic} {el.strength_1}</div>
          <div><strong>Dosing:</strong> {el.directions_s1} {el.extra_info}</div>
          <div>{(el.strength_2) ? <div><strong>Other Strengths:</strong> {el.generic} {el.strength_2} - {el.directions_s2}</div> : <div/>}</div>
          <div>{(el.strength_3) ? <div><strong>Other Strengths:</strong> {el.generic} {el.strength_3} - {el.directions_s3}</div> : <div/>}</div>
          <div>{(el.max_dose) ? <div><strong>Max Dose:</strong> {el.max_dose}/day</div> : <div/>}</div>
          <div>{(el.fun_fact) ? <div><strong>Fun Fact:</strong> {el.fun_fact}</div> : <div/>}</div>
        </div>
      );
    });
    return drugInfo;
  }

  render() {
    return(
      <div>
        <span id="title"> Here are your options</span>
        {this.genDrugInfo(this.props.drugClass)}
      </div>
    );
  }
}

export default Medications;