import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import API from '../API';

const DictionaryContext = createContext();

const Dictionary = ({ children }) => {
  const [results, setResults] = useState([]);
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('en');
  const dictonary = useCallback(async () => {
    const data = await API.getWord(language, word);
    setResults(data);
  }, [language, word]);
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (word) {
      dictonary();
    }
  }, [dictonary, word]);
  return (
    <DictionaryContext.Provider value={{ setWord, setLanguage, language, results }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => useContext(DictionaryContext);

export default Dictionary;
