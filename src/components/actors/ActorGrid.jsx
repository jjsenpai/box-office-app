import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          id={data.person.id}
          name={data.person.name}
          birthday={data.person.birthday}
          deathday={data.person.deathday ? data.person.deathday : ''}
          country={data.person.country ? data.person.country.name : ''}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : '/image-not-found.png'
          }
        />
      ))}
    </div>
  );
};

export default ActorGrid;
