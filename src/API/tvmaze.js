const BASE_URL = 'https://api.tvmaze.com';

const getApi = async query => {
  const info = (await fetch(`${BASE_URL}${query}`)).json();
  const body = await info;
  return body;
};

export const searchForShows = searchQuery =>
  getApi(`/search/shows?q=${searchQuery}`);

export const searchForActors = searchQuery =>
  getApi(`/search/people?q=${searchQuery}`);

export const showById = searchQuery =>
  getApi(`/shows/${searchQuery}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async searchQueryArray => {
  const promises = searchQueryArray.map(searchQuery =>
    getApi(`/shows/${searchQuery}`)
  );
  const result = await Promise.all(promises);
  console.log(result);
  return result;
};
