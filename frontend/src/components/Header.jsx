import { useState } from "react";
import frame2 from "../assets/Frame 2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="backdrop-blur-md bg-white/10 py-4 px-6 sticky top-0 z-50 border-b border-white/10 shadow-sm">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={frame2} alt="Logo" className="w-36 " />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden font-montserrat lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-white font-bold group transition-all duration-300"
            >
              <span
                className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                style={{ position: "relative", display: "inline-block" }}
              >
                Home
              </span>
            </a>
            <a
              href="#"
              className="text-white font-bold group transition-all duration-300 relative"
              style={{ position: "relative", display: "inline-block" }}
            >
              <span
                className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                style={{ position: "relative", display: "inline-block" }}
              >
                For You Page
              </span>
            </a>
            <a
              href="#"
              className="text-white font-bold group transition-all duration-300 relative"
              style={{ position: "relative", display: "inline-block" }}
            >
              <span
                className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                style={{ position: "relative", display: "inline-block" }}
              >
                Features
              </span>
            </a>
            <a
              href="#"
              className="text-white font-bold group transition-all duration-300 relative"
              style={{ position: "relative", display: "inline-block" }}
            >
              <span
                className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                style={{ position: "relative", display: "inline-block" }}
              >
                About
              </span>
            </a>

            <a
              href="#"
              className="text-white font-bold group transition-all duration-300 relative"
              style={{ position: "relative", display: "inline-block" }}
            >
              <span
                className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                style={{ position: "relative", display: "inline-block" }}
              >
                Blog
              </span>
            </a>
            <a
              href="#"
              className="text-white font-bold group transition-all duration-300 relative"
              style={{ position: "relative", display: "inline-block" }}
            >
              <span
                className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                style={{ position: "relative", display: "inline-block" }}
              >
                Contact
              </span>
            </a>
            <div className="login-signup flex flex-row gap-8">
              <a
                href="/"
                className="text-white font-bold group transition-all duration-300"
              >
                <button className="box-border border-2 border-[#40c9ff] w-25 p-1 rounded-md ">
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Log In
                </span>
                </button>
              </a>
              <a
                href="/"
                className="text-white font-bold group transition-all duration-300"
              >
                <button className="text-white bg-gradient-to-r from-[#40c9ff] to-[#e81cff] w-25 p-1 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_#40c9ff] hover:text-1.5xl">
                <span
                  className=""
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Sign Up
                </span>
                </button>
              </a>
            </div>
          </div>

          {/* Join Button (Uncomment if needed) */}
          {/*
          <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 font-medium transition-colors duration-300 rounded-button cursor-pointer whitespace-nowrap">
            JOIN US TODAY
          </a>
          */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white ml-4 focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-white font-bold group transition-all duration-300"
              >
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  HOME
                </span>
              </a>
              <a
                href="#"
                className="text-white font-bold group transition-all duration-300 relative"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  FOR YOU PAGE
                </span>
              </a>
              <a
                href="#"
                className="text-white font-bold group transition-all duration-300 relative"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  FEATURES
                </span>
              </a>
              <a
                href="#"
                className="text-white font-bold group transition-all duration-300 relative"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  ABOUT
                </span>
              </a>

              <a
                href="#"
                className="text-white font-bold group transition-all duration-300 relative"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  BLOG
                </span>
              </a>
              <a
                href="#"
                className="text-white font-bold group transition-all duration-300 relative"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span
                  className="group-hover:bg-gradient-to-r group-hover:from-[#40c9ff] group-hover:to-[#e81cff] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-0.5 after:bg-gradient-to-r group-hover:after:from-[#40c9ff] group-hover:after:to-[#e81cff] after:transition-all after:duration-300"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  CONTACT
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
