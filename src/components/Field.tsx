import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {
  const language = useContext(LanguageContext);

  const labelText = () => {
    switch (language) {
      case 'English':
        return 'Name';
      case 'Dutch':
        return 'Naam';
      default:
        return 'Name';
    }
  };

  return (
    <div>
      <div className="ui field">
        <label>{labelText()}</label>
        <input />
      </div>
    </div>
  );
};

export default Field;
