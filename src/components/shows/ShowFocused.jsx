const ShowFocused = ({ name, image, rating, summary, genres }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image ? image.original : '/image-not-found.png'} alt={name} />
      <div>Rating : {(rating && rating.average) || 'NA'} </div>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      <div>Genres : {genres.join(' ')}</div>
    </div>
  );
};

export default ShowFocused;
