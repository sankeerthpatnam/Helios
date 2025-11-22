const SplitGraphicText = ({
  eyebrow,
  title,
  description,
  reverse = false,
  note,
}) => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Graphic / model placeholder */}
        <div className="w-full md:w-1/2">
          <div className="relative h-64 md:h-80 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-black to-slate-950 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-cyan-400/60 flex items-center justify-center text-[0.65rem] uppercase tracking-[0.25em] text-cyan-300/80">
              3D Model
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80 mb-2">
              {eyebrow}
            </p>
          )}
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h3>
          <p className="text-sm md:text-base text-gray-300 mb-3">
            {description}
          </p>
          {note && (
            <p className="text-xs text-gray-500 border-l border-white/10 pl-3 mt-4">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitGraphicText;
