import { Moon, Sun, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";


function NavBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 duration-300 transition bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md border-b border-white/10 dark:border-zinc-700/20 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="public/V logo.ico" alt="icon" className="md:w-10 w-8"/>
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-[#242524] dark:text-white text-center">
          <span className="block md:hidden font-pacifico text-[30px] duration-300 transition">Vintage</span>
          <span className="hidden md:block font-pacifico text-[30px] duration-300 transition font-thin">Vintage : Image Gallery</span>
        </div>

        {/* Right: Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full duration-300 transition"
            aria-label="Toggle Dark Mode"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
