import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-5xl font-bold text-blue-700">Oops!</h1>
      <p className="my-3 text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
