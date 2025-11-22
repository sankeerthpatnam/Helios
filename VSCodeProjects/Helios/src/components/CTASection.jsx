import { Link } from "react-router-dom";

const CTASection = ({ title, description, buttonLabel, to }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-sm md:text-base text-gray-300 mb-8">
            {description}
          </p>
        )}
        {to && (
          <Link
            to={to}
            className="inline-flex px-6 py-3 rounded-full bg-white text-black text-xs md:text-sm tracking-wide border border-white hover:bg-gray-200"
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
