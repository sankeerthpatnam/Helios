const TimelineSection = ({ title, items }) => {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            {title}
          </h2>
        )}
        <div className="border-l border-white/10 pl-6 space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-3.5 top-1.5 w-2 h-2 rounded-full bg-cyan-400" />
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gray-400 mb-1">
                {item.label}
              </p>
              <h3 className="text-sm md:text-base font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
