const BASE_URL = 'https://api.tvmaze.com';

const getApi = async query => {
  const info = (await fetch(`${BASE_URL}${query}`)).json();
  const body = await info;
  return body;
};

export const searchForShows = searchQuery =>
  getApi(`/search/shows?q=${searchQuery}`);
