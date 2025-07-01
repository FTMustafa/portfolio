import { Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const navItems = {
    Home: "",
    About: "about",
    Skills: "skills",
    Projects: "projects",
    Contact: "contact",
    "CV / Resume": "cv",
  };

  const handleChangePage = (item, url) => {
    setActive(item);
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
      <div className="var-pages">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
