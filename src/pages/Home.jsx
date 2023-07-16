import { useState } from 'react';
import { searchForShows } from '../API/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiError(null);
      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiError(error);
      console.log(error);
    }
  };

  const onSearchInputChange = data => {
    //for 2 way data transfer
    setSearchStr(data.target.value);
  };

  const renderApiData = () => {
    if (apiError) return <div>Error Occured {apiError.message}</div>;

    if (apiData)
      return apiData.map(item => (
        <div key={item.show.id}>{item.show.name}</div>
      ));
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Submit</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
