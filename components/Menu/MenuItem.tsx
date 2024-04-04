import React from "react";
import SubMenuItem from "./SubMenuItem"; // Importing a component for submenu items
import Link from "next/link"; // Importing a component for navigation links

// Defining the properties expected by this MenuItem component
interface MenuItemProps {
  menuItem: any; // Data for the menu item
  toggleSubMenu: () => void; // Function to toggle submenu visibility
  isSubMenuOpen: boolean; // Boolean to track if submenu is open or closed
}

// This is a functional React component named MenuItem
const MenuItem: React.FC<MenuItemProps> = ({
  menuItem,
  toggleSubMenu,
  isSubMenuOpen,
}) => {
  // If the menu item is a button (has `isButton` property), render a button
  if (menuItem.isButton) {
    return (
      <div className="relative" onClick={toggleSubMenu}>
        <button
          type="button"
          className="flex w-full justify-between lg:py-0 py-3 lg:w-auto items-center gap-x-1 "
        >
          {menuItem.title} {/* Display the menu item title */}
          <svg
            className={`h-5 w-5 flex-none ${isSubMenuOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${
            isSubMenuOpen
              ? "lg:transition lg:ease-out lg:duration-200 lg:opacity-100 lg:translate-y-0 block"
              : "lg:transition lg:ease-in lg:duration-150 lg:opacity-0 lg:translate-y-1 hidden"
          }  lg:absolute lg:left-0 lg:top-full z-10 lg:mt-7 lg:w-screen lg:max-w-md overflow-hidden   lg:shadow-3xl lg:border border-opacity-10 border-black rounded-md`}
        >
          {menuItem.items?.map((subItem: any, index: number) => (
            <SubMenuItem key={index} subItem={subItem} /> // Render submenu items
          ))}
        </div>
      </div>
    );
  } else {
    // If the menu item is not a button, render it as a navigation link
    return (
      <Link
        href={menuItem.href} // Set the link destination
        className="block py-3 lg:py-0"
      >
        {menuItem.title} {/* Display the menu item title */}
      </Link>
    );
  }
};

export default MenuItem; // Export the MenuItem component for use in other parts of the application
