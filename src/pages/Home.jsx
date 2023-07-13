import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSearch = async ev => {
    ev.preventDefault();
    const info = (
      await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
    ).json();
    const body = await info;
    console.log(body);
  };

  const onSearchInputChange = data => {
    //for 2 way data transfer

    setSearchStr(data.target.value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
