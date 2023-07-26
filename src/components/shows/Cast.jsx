const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => {
        return (
          <div key={person.id}>
            <h3>
              {person.name} | {character.name} {voice && `| voiceover`}
            </h3>
            <img
              src={person.image ? person.image.medium : '/image-not-found.png'}
              alt={person.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
