import React from 'react';

const Allergies = (props) => {
  const allergens = {
    'Aleve/Naproxen': 'NSAID',
    'Allegra/Fexofenadine': 'antihistamine',
    'Aspirin': 'NSAID',
    'Bacitracin': 'bacitracin',
    'Benadryl/Diphenhydramine': 'antihistamine',
    'Bonine/Meclizine': 'antihistamine',
    'Claritin/Loratidine': 'antihistamine',
    'Colase/Docusate': 'docusate',
    'Delsym/Dextromethorphan': 'dextromethorphan',
    'Dimetapp/Bromapheniramine': 'antihistamine',
    'Dramamine/Dimenthydrinate': 'antihistamine',
    'Dulcolax/Bisacodyl': 'bisacodyl',
    'Ex-Lax/Senna': 'senna',
    'Immodium/Loperamide': 'loperamide',
    'Lamisil/Terbinafine': 'terbinafine',
    'Lotrimin AF/Clotrimazole': 'azole',
    'Melatonin': 'melatonin',
    'Micro Guard/Miconazole': 'azole',
    'Monistat/Miconazole': 'azole',
    'Motrin/Ibuprofen': 'NSAID',
    'Neosporin/Neomycin-Bacitracin-Polymyin B': 'bacitracin',
    'Nexium/Esomeprazole': 'PPI',
    'Patanol': 'antihistamine',
    'Pepcid/Famotidine': 'H2',
    'Pepto-Bismol/Bismuth Subsalicylate': 'bismuth',
    'Prevacid/Lansoprazole': 'PPI',
    'Prilosec/Omeprazole': 'PPI',
    'Robitussin/Guaifenesin': 'guaifenesin',
    'Tums/Anti-acid tabs': 'antiacid',
    'Tylenol/Acetaminophen': 'acetaminophen',
    'Zaditor/Ketotifen': 'antihistamine',
    'Zyrtec/Ceterizine': 'antihistamine',
  };


  const createCheckOff = () => {
    const allergies = [];
    // eslint-disable-next-line prefer-const
    for (let key in allergens) {
      allergies.push(
        <div><input className="allergies" type="checkbox" id={key} name={key} value={allergens[key]} />
          <label htmlFor={key}>{key}</label><br /></div>
      );
    }
    console.log(allergies);
    return allergies;
  };

  return (
    <div>
      <div className="allergy_list">
        <span style={{ color: 'coral' }}><strong>Please check off your allergies:</strong></span>
        {createCheckOff()}
      </div>
    </div>
  );
};

export default Allergies;