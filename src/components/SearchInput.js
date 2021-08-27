import { TextField } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import { useDictionary } from '../context/Dictionary';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const { setWord } = useDictionary();
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setWord(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, setWord]);
  return <TextField label='Search' value={query} onChange={(e) => setQuery(e.target.value)} />;
};

export default SearchInput;
