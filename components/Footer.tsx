"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  return (
    // Footer section with a top border and dark text color
    <footer className="border-t border-dark text-dark">
      <Container className="md:flex md:items-center md:justify-between">
        {/* List of links in the footer */}
        <ul className="my-4 flex flex-wrap items-center gap-6 text-xs font-medium lg:my-5 lg:gap-x-12 lg:text-sm">
          <li>
            {/* Link to Privacy Policy */}
            <Link
              href="#"
              className={`border-b-2 border-transparent py-1 ${
                pathname === "/privacy-policy" ? "!border-dark" : ""
              }  hover:border-blue`}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            {/* Link to FAQ (Frequently Asked Questions) */}
            <Link
              href="#"
              className={`border-b-2 border-transparent py-1 ${
                pathname === "/faq" ? "!border-dark" : ""
              }  hover:border-blue`}
            >
              FAQ
            </Link>
          </li>
          <li>
            {/* Link to Support page */}
            <Link
              href="#"
              className={`border-b-2 border-transparent py-1 ${
                pathname === "/support" ? "!border-dark" : ""
              }  hover:border-blue`}
            >
              Support
            </Link>
          </li>
          <li>
            {/* Link to Social Icons (for social media links, perhaps) */}
            <Link
              href="#"
              className={`border-b-2 border-transparent py-1 ${
                pathname === "/social" ? "!border-dark" : ""
              }  hover:border-blue`}
            >
              Social Icons
            </Link>
          </li>
        </ul>
        {/* Copyright information with a link to the MD website */}
        <span className="text-xs font-medium sm:text-center lg:text-sm">
          © 2023{" "}
          <Link
            href="/"
            className="border-b-2 border-transparent py-1 hover:border-blue"
          >
            MD
          </Link>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
