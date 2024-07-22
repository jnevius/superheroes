
import md5 from 'md5';

const PUBLIC_KEY = '04770a99f1a9f6697cb1ae8bdb8ffe90';
const PRIVATE_KEY = '376958fb773eb58854090968a2c532f476eecdae';
const BASE_URL = 'https://gateway.marvel.com/v1/public';

const getMarvelCharacters = async () => {
  const ts = new Date().getTime();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const url = `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data from Marvel API');
  }

  const data = await response.json();
  return data.data.results;
};

export { getMarvelCharacters };
