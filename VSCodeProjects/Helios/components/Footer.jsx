const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Helios Systems.</span>
        <span className="uppercase tracking-[0.2em]">
          Hydrogen • Propulsion • Simulation
        </span>
      </div>
    </footer>
  );
};

export default Footer;
