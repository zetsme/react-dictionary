import { Typography } from '@material-ui/core';
import { useDictionary } from '../context/Dictionary';

const Definitions = () => {
  const { results, language } = useDictionary();
  return (
    <>
      {results.title && (
        <>
          <h1>{results.title}</h1> <p>{results.message}</p>
        </>
      )}
      {results.length > 0 && <Typography>{language}</Typography> &&
        results.map(({ origin, meanings, phonetics }, index) => (
          <div key={index}>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
              {phonetics[0].audio && (
                <audio style={{ width: '100%' }} controls src={`http:${phonetics[0].audio}`}>
                  Not Supported
                </audio>
              )}
              {origin && (
                <div>
                  <Typography display='inline' variant='h5'>
                    Origin:{' '}
                  </Typography>
                  <Typography display='inline' variant='h5' color='primary'>
                    {origin}
                  </Typography>
                </div>
              )}
              {meanings.map((meaning, index) => (
                <div key={index}>
                  {meaning.partOfSpeech && (
                    <Typography style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      {meaning.partOfSpeech}:
                    </Typography>
                  )}
                  {meaning.definitions.map((item) => (
                    <div
                      style={{
                        marginBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '.5rem',
                      }}
                      key={item.definition}
                    >
                      <Typography color='secondary' variant='h5'>
                        {item.definition}
                      </Typography>
                      {item.example && (
                        <Typography variant='body2'>Example: {item.example}</Typography>
                      )}
                      {item.synonyms.length > 0 && (
                        <div>
                          <Typography display='inline' color='primary'>
                            Synonyms:
                          </Typography>
                          <Typography display='inline'>
                            {item.synonyms.map((synonym) => (
                              <span key={synonym}> {synonym} </span>
                            ))}
                          </Typography>
                        </div>
                      )}
                      {item.antonyms.length > 0 && (
                        <div>
                          <Typography display='inline' color='primary'>
                            Antonyms:
                          </Typography>
                          <Typography display='inline'>
                            {item.antonyms.map((antonym) => (
                              <span key={antonym}> {antonym}</span>
                            ))}
                          </Typography>
                        </div>
                      )}
                    </div>
                  ))}
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};
export default Definitions;
