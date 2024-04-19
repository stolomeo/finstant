import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { UserProvider } from "./context";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
      </UserProvider>
    </>
  );
}

export default App;
