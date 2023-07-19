import { useState } from 'react';
import { searchForActors, searchForShows } from '../API/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ q: searchStr, searchOption }) => {
    try {
      setApiError(null);
      let result;

      if (searchOption === 'shows') result = await searchForShows(searchStr);
      else result = await searchForActors(searchStr);

      console.log(result);
      setApiData(result);
    } catch (error) {
      setApiError(error);
      console.log(error);
    }
  };

  const renderApiData = () => {
    if (apiError) return <div>Error Occured {apiError.message}</div>;

    if (apiData?.length === 0) return <div>No data found</div>;

    if (apiData)
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );

    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
