export default function AppTitle(props) {
  const { title = 'Box-Office', subtitle = 'Looking for cinema?' } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
