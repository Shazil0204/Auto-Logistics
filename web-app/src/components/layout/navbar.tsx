import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faSearch, faReceipt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const tabs = [
    { id: "search", label: "Search", icon: faSearch, path: "/search" },
    { id: "issue", label: "Issue", icon: faFileAlt, path: "/issue" },
    { id: "invoice", label: "Invoice", icon: faReceipt, path: "/invoice" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="fixed mt-10 xl:w-[20%] sm:w-[35%] w-[60%] bg-white shadow-xl border">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center py-4 px-6 w-full ${
                  isActive ? "text-[#008080]" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={tab.icon} className="h-8 w-6" />
              <span className="text-sm">{tab.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
