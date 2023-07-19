import { useParams } from 'react-router-dom';

const ShowPage = () => {
  const { showId } = useParams();
  console.log(showId);
  return <div>This is show {showId}</div>;
};

export default ShowPage;
