import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
  const language = useContext(LanguageContext);

  const buttonText = () => {
    switch (language) {
      case 'English':
        return 'Submit';
      case 'Dutch':
        return 'Voorleggen';
      default:
        return 'Submit';
    }
  };

  return (
    <div>
      <button className="ui button primary">{buttonText()}</button>
    </div>
  );
};

export default Button;
