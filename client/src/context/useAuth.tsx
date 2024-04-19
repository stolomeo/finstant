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
  handleAuth: (user: User, token: string) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  handleAuth: () => {},
});

export const useAuth = () => useContext(UserContext);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Recover auth state from localStorage
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const handleAuth = useCallback(
    (user: User, token: string) => {
      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      navigate("/");
    },
    [navigate]
  );

  const contextValue = useMemo(
    () => ({
      user,
      token,
      handleAuth,
    }),
    [user, token, handleAuth]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
