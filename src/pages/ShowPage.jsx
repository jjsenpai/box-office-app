import { useParams } from 'react-router-dom';
import { showById } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowFocused from '../components/shows/ShowFocused';
import ShowFocusedDetails from '../components/shows/ShowFocusedDetails';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

const ShowPage = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['showId', showId],
    queryFn: () => showById(showId),
    refetchOnWindowFocus: false,
  });

  console.log(showData);

  if (showError) {
    return <div>Error Occured</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowFocused
          name={showData.name}
          image={showData.image}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <ShowFocusedDetails
          seasons={showData._embedded.seasons}
          premiered={showData.premiered}
          status={showData.status}
          network={showData.network}
        />

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>This is show {showId}</div>;
};

export default ShowPage;
