import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "../store/themeSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden
      bg-white/70 dark:bg-gray-900/70
      backdrop-blur-lg border-b border-white/10
      shadow-lg transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold shrink-0 whitespace-nowrap
            bg-gradient-to-r from-cyan-800 to-blue-500 
            text-transparent bg-clip-text"
          >
            Abhiram
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="relative group capitalize">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full 
              bg-white/20 dark:bg-white/10 
              backdrop-blur-md 
              hover:scale-110 hover:bg-cyan-400/20 
              transition-all duration-300"
            >
              {mode === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-indigo-700" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full 
              bg-white/20 dark:bg-white/10 
              backdrop-blur-md 
              hover:scale-110 hover:bg-cyan-400/20 
              transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mode === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-indigo-700" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full z-40
          md:hidden 
          bg-white/90 dark:bg-gray-900/90 
          backdrop-blur-lg border-t border-white/10
          transition-all duration-300"
        >
          <div className="px-4 py-4 space-y-4">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-lg capitalize hover:text-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}