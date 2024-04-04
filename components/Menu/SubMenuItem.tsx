import Link from "next/link";
import React from "react";

// Define the structure of a sub-menu item
interface SubItem {
  title: string; // Title of the sub-menu item
  description: string; // Description of the sub-menu item
  href: string; // URL to navigate to when the item is clicked
}

// Define the properties that the SubMenuItem component receives
interface SubMenuItemProps {
  subItem: SubItem; // The sub-menu item to be displayed
}

// Create the SubMenuItem component
const SubMenuItem: React.FC<SubMenuItemProps> = ({ subItem }) => (
  // This part represents the appearance of a single sub-menu item
  <div className="group relative flex items-center">
    <div className="flex-auto">
      {/* Create a link that leads to the specified 'href' when clicked */}
      <Link
        href={subItem.href}
        className="block py-3 px-5"
      >
        {subItem.title} {/* Display the title of the sub-menu item */}
        <span className="absolute inset-0"></span>{" "}
        {/* Visual styling element */}
      </Link>
    </div>
  </div>
);

export default SubMenuItem;
