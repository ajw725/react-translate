import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { onLanguageChange } = useContext(LanguageContext);

  return (
    <div>
      Select a language: &nbsp;
      <i className="flag us" onClick={() => onLanguageChange('English')} />
      <i className="flag nl" onClick={() => onLanguageChange('Dutch')} />
    </div>
  );
};

export default LanguageSelector;
