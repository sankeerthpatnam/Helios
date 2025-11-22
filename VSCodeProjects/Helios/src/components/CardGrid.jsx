import { Link } from "react-router-dom";

const CardGrid = ({ title, subtitle, cards }) => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-10">
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm md:text-base text-gray-300">{subtitle}</p>
          )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 to-black flex flex-col"
            >
              <div className="h-32 md:h-40 bg-slate-800">
                {/* 3D model / render placeholder */}
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-cyan-300/80">
                  {card.tag}
                </p>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-xs text-gray-300 flex-1">
                  {card.description}
                </p>
                {card.to && (
                  <Link
                    to={card.to}
                    className="mt-2 inline-flex items-center text-xs tracking-wide text-cyan-300 hover:text-cyan-200"
                  >
                    {card.ctaLabel || "View Module"}
                    <span className="ml-1">↗</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
