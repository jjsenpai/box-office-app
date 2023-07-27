import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else dispatchStarred({ type: 'STAR', showId });
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          onStarMeClick={onStarMeClick}
          id={data.show.id}
          name={data.show.name}
          isStarred={starredShows.includes(data.show.id)}
          image={
            data.show.image ? data.show.image.medium : '/image-not-found.png'
          }
          summary={
            data.show.summary
              ? data.show.summary
                  .split(' ')
                  .slice(0, 10)
                  .join(' ')
                  .replace(/(<([^>]+)>)/gi, '') + '...'
              : ''
          }
        />
      ))}
    </div>
  );
};

export default ShowGrid;
