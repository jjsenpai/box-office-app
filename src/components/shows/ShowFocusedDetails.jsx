const ShowFocusedDetails = ({ premiered, status, network }) => {
  return (
    <div>
      <h1> ShowDetails </h1>
      <div>Status : {status}</div>
      <div>
        Premiered {premiered} {network ? `on ${network.name}` : ''}
      </div>
    </div>
  );
};

export default ShowFocusedDetails;
