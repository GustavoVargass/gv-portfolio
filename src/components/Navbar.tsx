import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Moon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const menuItems = [
    { key: "about", href: "#about" },
    { key: "technologies", href: "#technologies" },
    { key: "projects", href: "#projects" },
    { key: "axk", href: "#axk" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo (Desktop) / Hamburger (Mobile) */}
          <div className="flex items-center">
            {/* Hamburger - Mobile Only */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-yellow-400 focus:outline-none text-2xl mr-2"
            >
              {isOpen ? "" : "☰"}
            </button>

            {/* Logo */}
            <a
              href="#home"
              className="text-2xl text-yellow-400 font-bold md:ml-0 ml-auto md:absolute md:left-0 md:relative"
            >
              GV
            </a>
          </div>

          {/* Menu Items - Desktop Only */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="relative text-yellow-400 hover:text-gray-100 transition-colors duration-300 group"
              >
                {t(`navbar.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Right Side - Switcher + Theme */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="bg-gray-700 text-gray-300 rounded px-3 py-1.5 h-9"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-yellow-400 text-black w-3/4 h-screen fixed top-0 left-0 z-40 shadow-lg"
          >
            {/* Top Bar inside Mobile Menu */}
            <div className="flex justify-between items-center p-4">
              {/* Logo inside menu */}
              <a href="#home" className="text-2xl text-black font-bold">
                GV
              </a>
              {/* Close Button (✖️) */}
              <button
                onClick={toggleMenu}
                className="text-black hover:text-axk-blue transition-colors duration-200 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={2.5} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 p-8">
              <a
                href="#about"
                className="text-lg font-semibold"
                onClick={toggleMenu}
              >
                {t("navbar.about")}
              </a>
              <a
                href="#technologies"
                className="text-lg font-semibold"
                onClick={toggleMenu}
              >
                {t("navbar.technologies")}
              </a>
              <a
                href="#projects"
                className="text-lg font-semibold"
                onClick={toggleMenu}
              >
                {t("navbar.projects")}
              </a>
              <a
                href="#axk"
                className="text-lg font-semibold"
                onClick={toggleMenu}
              >
                {t("navbar.axk")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
