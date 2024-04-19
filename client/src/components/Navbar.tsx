import { NavLink } from "react-router-dom";
import { useAuth } from "../context";

export const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  return (
    <nav className="container relative p-6 mx-auto">
      <div className="flex items-center justify-center lg:justify-between">
        <div className="flex items-center space-x-20">
          <NavLink
            to="/"
            className="text-4xl hover:text-primary"
            aria-label="Home"
          >
            finstant
          </NavLink>
          <div className="hidden lg:flex">
            <NavLink to="/search" className="font-bold hover:text-primary">
              Search
            </NavLink>
          </div>
        </div>
        <div className="items-center hidden space-x-6 lg:flex">
          {isLoggedIn ? (
            <>
              <h2 className="hover:text-primary">Welcome, {user?.username}</h2>
              <button
                onClick={logout}
                className="px-8 py-3 font-bold text-white rounded bg-primary hover:opacity-70"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="login" className="hover:text-primary">
                Login
              </NavLink>
              <NavLink
                to="register"
                className="px-8 py-3 font-bold text-white rounded bg-primary hover:opacity-70"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
