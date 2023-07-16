import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = data => {
    //for 2 way data transfer
    setSearchStr(data.target.value);
  };

  const onRadioChange = data => {
    setSearchOption(data.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const obj = { q: searchStr, searchOption };

    onSearch(obj);
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};

export default SearchForm;
