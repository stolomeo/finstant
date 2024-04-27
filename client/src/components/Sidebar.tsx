import { NavLink } from "react-router-dom";
import { sidebarElements } from "../utils";

type SidebarItemProps = {
  icon: JSX.Element;
  label: string;
  route: string;
};

const SidebarItem = ({ icon, label, route }: SidebarItemProps) => {
  return (
    <li>
      <NavLink
        to={route}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="ms-3">{label}</span>
      </NavLink>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <>
      <nav
        className="top-0 left-0 z-40 block w-1/6 transition-transform -translate-x-full border-gray-100 shadow-xl height-auto sm:translate-x-0 dark:border dark:border-gray-600 dark:rounded-sm"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarElements.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                route={item.route}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
