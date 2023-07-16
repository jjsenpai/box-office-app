import { useState } from 'react';
import { searchForActors, searchForShows } from '../API/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ q: searchStr, searchOption }) => {
    try {
      setApiError(null);
      let result;

      if (searchOption === 'shows') result = await searchForShows(searchStr);
      else result = await searchForActors(searchStr);

      setApiData(result);
    } catch (error) {
      setApiError(error);
      console.log(error);
    }
  };

  const renderApiData = () => {
    if (apiError) return <div>Error Occured {apiError.message}</div>;

    if (apiData)
      return apiData[0].show
        ? apiData.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : apiData.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));

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
