import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
  const [language, setLanguage] = useState('English');

  return (
    <div className="ui container">
      <div>
        Select a language: &nbsp;
        <i className="flag us" onClick={() => setLanguage('English')} />
        <i className="flag nl" onClick={() => setLanguage('Dutch')} />
      </div>
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
