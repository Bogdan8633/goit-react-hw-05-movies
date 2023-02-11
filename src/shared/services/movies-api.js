import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=6c7c9c59ab66a934cce9eb83e4c9fd9b
// https://api.themoviedb.org/3/search/movie?api_key=6c7c9c59ab66a934cce9eb83e4c9fd9b&query=Jack+Reacher

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    // per_page: 12,
    api_key: '6c7c9c59ab66a934cce9eb83e4c9fd9b',
  },
});

export const searchMovies = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  console.log(data);
  return data;
};

export const getMostPopular = async () => {
  const { data } = await instance.get('movie/popular');
  return data;
};

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   params: {
//     per_page: 12,
//     key: '31955904-7341a4dddd0022ded7445126a',
//   },
// });

// export const searchImages = async (q, page = 1) => {
//   const { data } = await instance.get('/', {
//     params: {
//       q,
//       page,
//       image_type: 'photo',
//       orientation: 'horizontal',
//     },
//   });
//   // console.log(data);
//   return data;
//   // return data.hits;
// };
