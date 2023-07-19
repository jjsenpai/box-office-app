import { Link } from 'react-router-dom';

const ShowCard = ({ name, id, image, summary }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>#{id}</div>
      <img src={image}></img>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
      </div>
      <div>{summary}</div>
      <div>Star Me</div>
    </div>
  );
};

export default ShowCard;
