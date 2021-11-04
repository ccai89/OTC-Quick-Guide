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
          <div><strong>Generic Name:</strong> {el.generic}</div>
          <div><strong>Strengths:</strong> {el.strength_1}</div>
          <div><strong>Dosing:</strong> {el.directions_s1} {el.extra_info}</div>
          <div><strong>Max dose:</strong> {el.max_dose}</div>
          <div><strong>Fun Fact:</strong> {el.fun_fact}</div>
        </div>
      );
      if(el.strength_2){
        drugInfo.push(
          <div className="suggestions">
            <div><strong>Brand Name:</strong> {el.brand}</div>
            <div><strong>Generic Name:</strong> {el.generic}</div>
            <div><strong>Strengths:</strong> {el.strength_2}</div>
            <div><strong>Dosing:</strong> {el.directions_s2} {el.extra_info}</div>
            <div><strong>Max dose:</strong> {el.max_dose}</div>
          </div>
        );
      }
      if(el.strength_3){
        drugInfo.push(
          <div className="suggestions">
            <div><strong>Brand Name:</strong> {el.brand}</div>
            <div><strong>Generic Name:</strong> {el.generic}</div>
            <div><strong>Strengths:</strong> {el.strength_3}</div>
            <div><strong>Dosing:</strong> {el.directions_s3} {el.extra_info}</div>
            <div><strong>Max dose:</strong> {el.max_dose}</div>
          </div>
        );
      }
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