import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <h1>Looks like this page does not exist</h1>
      <Link to="/">
        <span>&#8592;</span> Go back
      </Link>
    </main>
  );
}
