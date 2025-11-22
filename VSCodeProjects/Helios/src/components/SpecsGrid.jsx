const SpecsGrid = ({ title, groups }) => {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {title && (
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {title}
          </h2>
        )}
        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-xl p-5 bg-black/40"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-3">
                {group.label}
              </h3>
              <dl className="space-y-2">
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <dt className="text-gray-400">{item.name}</dt>
                    <dd className="text-gray-100 font-medium">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsGrid;
