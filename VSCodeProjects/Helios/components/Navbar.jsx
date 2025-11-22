import { Link, NavLink } from "react-router-dom";

const navLinkClass =
  "text-sm md:text-base tracking-wide hover:text-gray-300 transition-colors";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Simple Helios logo placeholder */}
          <div className="w-7 h-7 rounded-full border border-cyan-400 flex items-center justify-center text-xs">
            H
          </div>
          <span className="tracking-[0.2em] text-xs md:text-sm uppercase text-gray-200">
            Helios
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/foundry" className={navLinkClass}>
            Foundry
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/join-our-mission" className={navLinkClass}>
            Mission
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
