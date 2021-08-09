export const fetchAllQuotes = async () => {
  const res = await fetch(
    'https://futuramaapi.herokuapp.com/api/quotes'
  );
  const json = await res.json();
  
  return json.map(({ character, quote }) => ({
    id: `${character} - ${quote}`,
    name: character,
    text: quote
  }));
  
};
