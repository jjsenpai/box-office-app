import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
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
