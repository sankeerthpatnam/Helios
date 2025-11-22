import { Link } from "react-router-dom";

const Hero = ({ eyebrow, title, subtitle, ctas = [], align = "left" }) => {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background cinematic placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-slate-950">
        {/* Replace this with video / 3D background later */}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.23),_transparent_55%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-28 md:py-36 flex flex-col gap-6">
        <div className={`flex flex-col gap-4 ${alignment} max-w-3xl`}>
          {eyebrow && (
            <p className="text-xs tracking-[0.3em] uppercase text-cyan-300/80">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm md:text-lg text-gray-300 max-w-xl">
              {subtitle}
            </p>
          )}

          {ctas.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {ctas.map((cta, idx) =>
                cta.to ? (
                  <Link
                    key={idx}
                    to={cta.to}
                    className={`px-5 py-2.5 rounded-full text-xs md:text-sm tracking-wide border transition 
                    ${
                      cta.variant === "outline"
                        ? "border-white/40 text-gray-200 hover:bg-white/10"
                        : "bg-white text-black border-white hover:bg-gray-200"
                    }`}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <button
                    key={idx}
                    className={`px-5 py-2.5 rounded-full text-xs md:text-sm tracking-wide border transition 
                    ${
                      cta.variant === "outline"
                        ? "border-white/40 text-gray-200 hover:bg-white/10"
                        : "bg-white text-black border-white hover:bg-gray-200"
                    }`}
                  >
                    {cta.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
