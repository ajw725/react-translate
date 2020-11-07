import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
  const buttonText = (language: string) => {
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
    <button className="ui button primary">
      <LanguageContext.Consumer>
        {(language) => buttonText(language)}
      </LanguageContext.Consumer>
    </button>
  );
};

export default Button;
