import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-[1000] w-full px-[60px] py-5 transition-all duration-400 ease-in-out ${
        scrolled
          ? "border-b border-[rgba(201,169,110,0.2)] bg-[rgba(10,10,10,0.92)] py-3 backdrop-blur-xl"
          : "bg-transparent"
      } lg:px-[30px] md:px-[20px] max-[480px]:px-[16px]`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <div className="cursor-pointer font-['Playfair_Display',serif] text-[1.8rem] font-bold tracking-[2px] text-white transition-colors duration-300 md:text-[1.4rem] max-[480px]:text-[1.2rem]">
          <span className="text-white">✦</span>
          Biurh<span className="text-[#fff]">Adorn</span>
          <span className="text-white">✦</span>
        </div>

        <ul className="relative left-[255px] flex list-none gap-[48px] md:gap-[28px] max-md:hidden">
          <li>
            <a
              className="group relative pb-1 text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white"
              href="#home"
            >
              Home
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              className="group relative pb-1 text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white"
              href="#products"
            >
              Collections
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              className="group relative pb-1 text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white"
              href="#about"
            >
              About
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              className="group relative pb-1 text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white"
              href="#contact"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 max-md:hidden">
          <button className="rounded-none border-none bg-transparent p-1 text-[1.2rem] text-white/70 transition-all duration-300 hover:scale-110 hover:text-[#c9a96e]" aria-label="Search">
            🔍
          </button>
          <button className="rounded-none border-none bg-transparent p-1 text-[1.2rem] text-white/70 transition-all duration-300 hover:scale-110 hover:text-[#c9a96e]" aria-label="Cart">
            🛒
          </button>
        </div>

        <button
          className="flex flex-col gap-[5px] rounded-none border-none bg-transparent p-1 md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="block h-[2px] w-[25px] bg-white transition-all duration-300 hover:bg-[#c9a96e]" />
          <span className="block h-[2px] w-[25px] bg-white transition-all duration-300 hover:bg-[#c9a96e]" />
          <span className="block h-[2px] w-[25px] bg-white transition-all duration-300 hover:bg-[#c9a96e]" />
        </button>
      </div>

      {menuOpen ? (
        <div className="mt-4 flex flex-col gap-5 border-t border-[rgba(201,169,110,0.2)] bg-[rgba(10,10,10,0.98)] px-5 py-[30px] text-center md:hidden">
          <a className="text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white" href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a className="text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white" href="#products" onClick={() => setMenuOpen(false)}>
            Collections
          </a>
          <a className="text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white" href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a className="text-[0.9rem] font-normal uppercase tracking-[2px] text-white/80 transition-all duration-300 hover:text-white" href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
