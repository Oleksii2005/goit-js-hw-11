import axios from 'axios';
const apiKey = '37337177-370a5d12901e80f2cbcbb379d';

async function getImages(query, page) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=40&page=${page}
    &orientation=horizontal&safesearch=true`;
  const res = await axios.get(url);
  return res.data;
}
export { getImages };
