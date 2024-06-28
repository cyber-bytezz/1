import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import bxX from "@iconify-icons/bx/bx-x";

export const Nav = ({ isMobile }) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navigation = [
    { name: "Request a Free Trial", href: "/free-trial" },
    ...(isMobile ? [] : []),
  ];

  return (
    <nav className="header-nav w-full">
      <div className={`header-nav--container flex items-center justify-between ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className="flex-1">
          {/* Add any content you want on the left side, such as a logo */}
        </div>
        <div className="flex items-center space-x-2">
          {isMobile && (
            <a
              href="https://google.com" // Replace with your button link
              className="btn btn--secondary text-sm py-1 px-2 ml-auto"
              style={{ marginTop: "-0.5rem" }} // Adjusted margin-top for positioning
            >
              Book a Demo
            </a>
          )}
          <button
            onClick={toggleNav}
            type="button"
            className={`mobile-menu ${isNavOpen ? "active" : ""} ml-auto`} // Added ml-auto to push to the right
            aria-controls="navbar-dropdown"
            aria-expanded={isNavOpen}
            style={{ marginTop: isMobile ? "-0.5rem" : "0" }} // Move hamburger up by adjusting margin-top
          >
            <span className="sr-only">Toggle navigation</span>
            <Icon
              icon={isNavOpen ? "ant-design:close-outlined" : "eva:menu-outline"}
              className="h-6 w-auto text-black"
            />
          </button>
        </div>
        <div
          className={`header-nav--menu-container z-20 absolute top-full right-0 w-full bg-white md:relative md:flex md:bg-transparent ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="header-nav--menu flex flex-col items-center md:flex-row md:space-x-6 text-sm">
            {navigation.map((item) => (
              <li key={item.name} className="header-nav--menu-item">
                <Link href={item.href} legacyBehavior>
                  <a
                    className={`menu-item--link flex items-center p-2 md:p-0 ${
                      router.pathname === item.href ? "active text-blue-600" : "text-black"
                    } text-sm md:text-base whitespace-nowrap 
                    transition duration-300 ease-in-out ${
                      item.name === "Request a Free Trial" ? "hover:underline" : ""
                    }`}
                    onClick={closeNav}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          {isNavOpen && (
            <button
              onClick={closeNav}
              className="absolute top-0 right-0 mt-2 mr-2 md:hidden focus:outline-none"
              aria-label="Close navigation"
            >
              <Icon icon={bxX} className="h-6 w-6 text-black" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
