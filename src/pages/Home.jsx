import { useState } from 'react';
import { searchForActors, searchForShows } from '../API/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiError(null);

      if (searchOption === 'shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForActors(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiError(error);
      console.log(error);
    }
  };

  const onSearchInputChange = data => {
    //for 2 way data transfer
    setSearchStr(data.target.value);
  };

  const onRadioChange = data => {
    setSearchOption(data.target.value);
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
      <form onSubmit={onSearch}>
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
            value="shows"
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
            value="actors"
          />
        </label>

        <br />

        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Submit</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
