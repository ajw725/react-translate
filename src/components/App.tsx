import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
  const [language, setLanguage] = useState('English');

  return (
    <div className="ui container">
      <LanguageSelector onLanguageChange={setLanguage} />
      Current language: {language}
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
