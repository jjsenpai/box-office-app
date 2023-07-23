import { useParams } from 'react-router-dom';
import { showById } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';

const ShowPage = () => {
  const { showId } = useParams();
  console.log(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['showId', showId],
    queryFn: () => showById(showId),
  });

  console.log(showData);

  if (showError) {
    return <div>Error Occured</div>;
  }

  if (showData) {
    return <div>Data fetched</div>;
  }

  return <div>This is show {showId}</div>;
};

export default ShowPage;
