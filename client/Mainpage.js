import React from 'react';

const Mainpage = (props) => {
  const mainObj = {
    'pain':'General Pain',
    'tummy': 'Upset Stomach',
    'rash':' Skin Irritation',
    'allergy': 'Allergies',
    'cough': 'Cough and Cold',
    'zzz':' Sleep Aids',  
    'eye': 'Eye and Ear Irritation',
    'booboo': 'Cuts and Scrapes'
  };

  const genMidBody = () => {
    const midBody = [];
    for(const key in mainObj){
      midBody.push(<button id={key} className="primary">{mainObj[key]}</button>);
    }
    return midBody;
  };

  return(
    <div>
      <div className="nav">
        <button type="submit" id='inputAllergy'>Enter Your Allergies</button>
      </div>
      <div className="primary_buttons">{genMidBody()}</div>
    </div>
  );
};

export default Mainpage;