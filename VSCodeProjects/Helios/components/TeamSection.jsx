const TeamSection = ({ title = "Our Team", members }) => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          {title}
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-24 h-24 rounded-full bg-slate-800 border border-white/10 mb-2" />
              <h3 className="text-sm md:text-base font-semibold">
                {m.name}
              </h3>
              <p className="text-xs text-gray-400">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
