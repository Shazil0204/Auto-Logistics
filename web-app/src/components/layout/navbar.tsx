import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt, faSearch, faReceipt } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const tabs = [
    { id: "search", label: "Search", icon: faSearch, path: "/search" },
    { id: "issue", label: "Issue", icon: faFileAlt, path: "/issue" },
    { id: "invoice", label: "Invoice", icon: faReceipt, path: "/invoice" },
  ];

  return (
      <div className="xl:w-[20%] sm:w-[35%] w-[65%]">
        <div className="flex justify-around w-full">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center xl:py-4 xl:px-6 py-4 px-2 w-full text-white ${
                  isActive ? "bg-[#006060]" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={tab.icon} className="h-6 w-6" />
              <span className="text-md">{tab.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
  )
}

export default Navbar
