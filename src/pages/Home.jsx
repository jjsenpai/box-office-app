import { useState } from 'react';
import { searchForActors, searchForShows } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

const Home = () => {
  const [filter, setFilter] = useState('');

  const { data: apiData, error: apiError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForActors(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = ({ q: searchStr, searchOption }) => {
    setFilter({ q: searchStr, searchOption });
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
