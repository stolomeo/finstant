import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

type UserContextType = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(UserContext);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const isLoggedIn = useMemo(() => !!user && !!token, [user, token]);

  useEffect(() => {
    // Recover auth state from localStorage
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const login = useCallback(
    (user: User, token: string) => {
      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      navigate("/");
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.clear();
    navigate("/");
  }, [navigate]);

  const contextValue = useMemo(
    () => ({
      user,
      token,
      isLoggedIn,
      login,
      logout,
    }),
    [user, token, isLoggedIn, login, logout]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
