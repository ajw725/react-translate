import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
  const { language } = useContext(LanguageContext);
  const color = useContext(ColorContext);

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
    <button className={`ui button ${color || 'primary'}`}>
      {buttonText()}
    </button>
  );
};

export default Button;
