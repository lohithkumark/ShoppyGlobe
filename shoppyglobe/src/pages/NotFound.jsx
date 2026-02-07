import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>{error?.statusText || "Invalid URL"}</p>
    </div>
  );
}

export default NotFound;
