import React, { useState } from 'react';
import UserCreate from './UserCreate';

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
      <UserCreate />
    </div>
  );
};

export default App;
