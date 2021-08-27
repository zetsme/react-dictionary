const apiSettings = {
  getWord: async (language, word) =>
    await (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)).json(),
};

export default apiSettings;
