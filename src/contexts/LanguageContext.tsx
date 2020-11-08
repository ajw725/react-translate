import React, { useState } from 'react';

interface LanguageStoreProps {
  children: any;
}

const Context = React.createContext({
  language: 'English',
  onLanguageChange: (_language: string) => {},
});

export const LanguageStore = (props: LanguageStoreProps) => {
  const [language, setLanguage] = useState('English');

  const providerValue = {
    language: language,
    onLanguageChange: setLanguage,
  };

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};

export default Context;
