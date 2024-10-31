'use client';
import { createContext, FunctionComponent, ReactNode, useState } from 'react';

interface ILanguageContext {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: 'en',
  setLanguage: () => {},
});

// Provider config
interface ILanguageProvider {
  children: ReactNode;
}
const LanguageProvider: FunctionComponent<ILanguageProvider> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
