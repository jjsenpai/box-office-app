const ShowCard = ({ name, id, image, summary, onStarMeClick, isStarred }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>#{id}</div>
      <img src={image}></img>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
      <div>{summary}</div>
      <button type="button" onClick={() => onStarMeClick(id)}>
        {isStarred ? 'UNSTAR' : 'STAR'}
      </button>
    </div>
  );
};

export default ShowCard;
