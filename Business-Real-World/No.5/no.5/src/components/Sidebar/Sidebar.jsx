import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const adminMenuItems = [
  { label: "Home", to: "/home", icon: "H" },
  { label: "Detail", to: "/detail", icon: "D" },
  { label: "Add", to: "/add", icon: "A" },
];

const userMenuItems = [
  { label: "Home", to: "/user/home", icon: "H" },
  { label: "Likes", to: "/user/likes", icon: "L" },
];

function Sidebar({ mode = "admin" }) {
  const menuItems = mode === "user" ? userMenuItems : adminMenuItems;
  const caption = mode === "user" ? "User Suite" : "Management Suite";

  return (
    <aside className={styles.sidebar}>
      <p className={styles.caption}>{caption}</p>

      <nav className={styles.navList}>
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.iconBox}>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
