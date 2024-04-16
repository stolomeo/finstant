import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container relative p-6 mx-auto">
      <div className="flex items-center justify-center lg:justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/" className="text-4xl hover:text-primary">
            finstant
          </Link>
          <div className="hidden lg:flex">
            <Link to="/search" className="font-bold hover:text-primary">
              Search
            </Link>
          </div>
        </div>
        <div className="items-center hidden space-x-6 lg:flex">
          <Link to="login" className="hover:text-primary">
            Login
          </Link>
          <Link
            to="register"
            className="px-8 py-3 font-bold text-white rounded bg-primary hover:opacity-70"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};
