import React from "react";

// Define the expected properties for the MenuButton component
interface MenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void; // Function to toggle the main menu
}

// Define the MenuButton component
const MenuButton: React.FC<MenuButtonProps> = ({ toggleMenu , isMenuOpen}) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={toggleMenu} // Call the provided toggleMenu function when the button is clicked
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
      >
        <span className="sr-only">Open main menu</span>{" "}
        {/* Screen reader accessible label */}
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default MenuButton; // Export the MenuButton component for use in other parts of the application
