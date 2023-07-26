const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons = {seasons.length}</p>
      <p>
        Total episodes ={' '}
        {seasons.reduce((prev, curr) => {
          return prev + curr.episodeOrder;
        }, 0)}
        {/* <div>
          {seasons.map(item => {
            return <img key={item.id} src={item.image.medium}></img>;
          })}
        </div> */}
      </p>
    </div>
  );
};

export default Seasons;
