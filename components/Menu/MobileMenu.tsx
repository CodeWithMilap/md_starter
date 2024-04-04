import Logo from "../Logo";
import MenuButton from "./MenuButton"; // Import the MenuButton component
import MenuItem from "./MenuItem"; // Import the MenuItem component
import menuItems from "@/constants/menuItems"; // Import the menu items from a constants file

// Define the expected properties for the MobileMenu component
interface MobileMenuProps {
  isMenuOpen: boolean; // Boolean to track if the main menu is open or closed
  isSubMenuOpen: boolean; // Boolean to track if a submenu is open or closed
  toggleMenu: () => void; // Function to toggle the main menu
  toggleSubMenu: () => void; // Function to toggle the submenu
}

// Define the MobileMenu component
const MobileMenu: React.FC<MobileMenuProps> = ({
  isSubMenuOpen,
  toggleMenu,
  toggleSubMenu,
  isMenuOpen,
}) => {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo /> {/* Render the Logo component */}
          <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />{" "}
          {/* Render the MenuButton component with the toggleMenu function */}
        </div>
        <div className="mt-6 py-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                menuItem={menuItem} // Pass the menu item data to MenuItem
                toggleSubMenu={toggleSubMenu} // Pass the toggleSubMenu function to MenuItem
                isSubMenuOpen={isSubMenuOpen} // Pass the submenu open state to MenuItem
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; // Export the MobileMenu component for use in other parts of the application
