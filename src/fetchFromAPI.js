import axios from "axios";

const baseUrl = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '20'
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


// KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA

// 86c0f43e9emshfbd6e03e23371f9p166bb3jsn343fb518e579