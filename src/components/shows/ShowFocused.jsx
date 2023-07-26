const ShowFocused = ({ name, image, rating, summary, genres }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={image ? image.original : '/image-not-found.png'} alt={name} />
      <div>Rating : {(rating && rating.average) || 'NA'} </div>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      <div>Genres : {genres.join(' ')}</div>
    </div>
  );
};

export default ShowFocused;
