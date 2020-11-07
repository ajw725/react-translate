import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color || 'primary'}`}>
          <LanguageContext.Consumer>
            {(language) => buttonText(language)}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;
