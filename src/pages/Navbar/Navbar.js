import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // npm install react-icons yapmadıysan yapmalısın
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    Home: "",
    About: "about",
    Skills: "skills",
    Projects: "projects",
    Contact: "contact",
    "CV / Resume": "cv",
  };

  // Mobilde menü aç/kapa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Menü açılınca arka planın kaymasını engelle
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  // Linke tıklayınca menüyü kapat
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="navbar-container">
      
      {/* --- MASAÜSTÜ MENÜSÜ (Senin Orijinal Tasarımın) --- */}
      <nav className="desktop-nav">
        {Object.keys(navItems).map((item) => (
          <li key={item}>
            <NavLink 
              to={`/${navItems[item]}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </nav>

      {/* --- MOBİL ÜST BAR (Sadece mobilde görünür) --- */}
      <div className="mobile-header">
        <div className="mobile-logo">&lt;Mustafa/&gt;</div>
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* --- MOBİL TAM EKRAN MENÜ (Overlay) --- */}
      <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {Object.keys(navItems).map((item, index) => (
            <li key={item} style={{ transitionDelay: `${index * 100}ms` }}>
              <NavLink 
                to={`/${navItems[item]}`} 
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-mobile" : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="var-page">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;