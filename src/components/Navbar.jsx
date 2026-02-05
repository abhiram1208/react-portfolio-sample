import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "../store/themeSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // (can remove if unused)

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-primary">
            Abhiram
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {mode === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-indigo-700" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {mode === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-indigo-700" />
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              <svg
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <div className="px-4 py-3 space-y-3">
            <a
              href="#about"
              className="block hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
