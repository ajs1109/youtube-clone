import axios from "axios";

const baseUrl = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '20',
    regionCode: 'IN'
  },
  headers: {
    'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${baseUrl}/${url}`,options);
    return data;
};