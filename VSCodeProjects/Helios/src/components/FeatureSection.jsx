const FeatureSection = ({ title, subtitle, features }) => {
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
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-xl p-5 bg-white/5/5 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 mb-2">
                {feature.tag}
              </p>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
