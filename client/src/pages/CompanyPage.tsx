import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export const CompanyPage = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};
