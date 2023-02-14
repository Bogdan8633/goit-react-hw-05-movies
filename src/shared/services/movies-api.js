import axios from 'axios';

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
  return data;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
