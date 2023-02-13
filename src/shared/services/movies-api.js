import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=6c7c9c59ab66a934cce9eb83e4c9fd9b
// https://api.themoviedb.org/3/search/movie?api_key=6c7c9c59ab66a934cce9eb83e4c9fd9b&query=Jack+Reacher

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '6c7c9c59ab66a934cce9eb83e4c9fd9b',
  },
});

export const searchMovies = async query => {
  const { data } = await instance.get('search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMostPopular = async () => {
  const { data } = await instance.get('movie/popular');
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const getCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  console.log('Це data з credits', data);
  return data;
};
