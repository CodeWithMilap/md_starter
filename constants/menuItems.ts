const menuItems = [
    {
      title: "Product",
      isButton: true,
      items: [
        {
          title: "Analytics",
          href: "#",
        },
        {
          title: "Engagement",
          href: "#",
        },
        {
          title: "Security",
          href: "#",
        },
        {
          title: "Integrations",
          href: "#",
        },
      ],
    },
    {
      title: "Features",
      href: "#",
      isButton: false,
      items: undefined, // Add this property as undefined for items that don't have sub-items
    },
    {
      title: "Marketplace",
      href: "#",
      isButton: false,
      items: undefined, // Add this property as undefined for items that don't have sub-items
    },
    {
      title: "Company",
      href: "#",
      isButton: false,
      items: undefined, // Add this property as undefined for items that don't have sub-items
    },
  ];
  
  export default menuItems; // Export the array so that it can be imported in other parts of your application
  