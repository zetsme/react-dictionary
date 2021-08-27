import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useDictionary } from '../context/Dictionary';
import languages from '../languages';

const LanguageSelect = () => {
  const { language, setLanguage } = useDictionary();
  return (
    <FormControl>
      <InputLabel>Language</InputLabel>
      <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {languages.map((item) => (
          <MenuItem value={item.label} key={item.label}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
