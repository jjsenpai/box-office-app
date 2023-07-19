const ActorCard = ({
  name,
  id,
  image,
  gender,
  birthday,
  deathday,
  country,
}) => {
  return (
    <div>
      <h1>
        {name} {gender && `(${gender})`}
      </h1>
      <div>#{id}</div>
      <img src={image}></img>
      <div>{!!birthday && `Born ${birthday}`}</div>
      <div>{(!!deathday && `Died ${deathday}`) || `Alive`}</div>
      <div>{(!!country && `Comes From ${country}`) || `No country known`}</div>
    </div>
  );
};

export default ActorCard;
