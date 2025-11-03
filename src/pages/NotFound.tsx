import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-slate-600">Page not found.</p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
