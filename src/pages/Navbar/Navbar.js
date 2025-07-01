import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = {
    Home: "",
    About: "about",
    Skills: "skills",
    Projects: "projects",
    Contact: "contact",
    "CV / Resume": "cv",
  };

  const getActiveItem = () => {
    const currentPath = location.pathname.replace("/", "");
    const foundItem = Object.keys(navItems).find(
      (key) => navItems[key] === currentPath
    );
    return foundItem || "Home";
  };

  const [active, setActive] = useState(getActiveItem());

  useEffect(() => {
    setActive(getActiveItem());
  }, [location.pathname]);

  const handleChangePage = (item, url) => {
    navigate(`/${url}`);
  };

  return (
    <div className="navbar">
      <nav>
        {Object.keys(navItems).map((item) => (
          <li
            key={item}
            onClick={() => handleChangePage(item, navItems[item])}
            className={active === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </nav>
      <div className="var-page">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
