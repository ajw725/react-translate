import React from 'react';

interface LanguageSelectorProps {
  onLanguageChange(language: string): void;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  return (
    <div>
      Select a language: &nbsp;
      <i
        className="flag us"
        onClick={() => props.onLanguageChange('English')}
      />
      <i className="flag nl" onClick={() => props.onLanguageChange('Dutch')} />
    </div>
  );
};

export default LanguageSelector;
