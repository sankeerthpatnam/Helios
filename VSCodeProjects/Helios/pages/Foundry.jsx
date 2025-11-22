import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import SplitGraphicText from "../components/SplitGraphicText";
import CTASection from "../components/CTASection";

const Foundry = () => {
  return (
    <>
      <Hero
        eyebrow="Helios Foundry"
        title="Digital Twins for Hydrogen Propulsion."
        subtitle="Foundry is a simulation and digital twin environment built to model hydrogen propulsion systems from first principles to mission-ready configurations."
        ctas={[
          { label: "Explore Simulations", to: "/projects" },
          { label: "View Beta Engines", to: "/projects", variant: "outline" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Simulation Core"
        title="Unified physics across land, air, and sea."
        description="The Foundry digital twin core provides shared physics kernels for energy transfer, fluid flow, and structural response. Each beta engine taps into the same underlying simulation spine, making cross-domain iteration faster and more reliable."
        note="Background cinematic placeholder — replace with a live render of simulation fields or engine cross-sections."
      />

      <FeatureSection
        title="Foundry Capabilities"
        subtitle="A single environment for hydrogen propulsion, from early concepts to integrated system testing."
        features={[
          {
            tag: "Multi-domain",
            title: "Cross-vehicle consistency.",
            description:
              "Use the same hydrogen physics engine to explore ground vehicles, aircraft, and naval platforms.",
          },
          {
            tag: "Looped Iteration",
            title: "From model to insight.",
            description:
              "Parameter sweeps, failure envelopes, and scenario testing all run in a consistent loop.",
          },
          {
            tag: "Hardware Bridge",
            title: "Simulation to metal.",
            description:
              "Export configurations and test plans directly into your hardware development and test pipelines.",
          },
        ]}
      />

      <CTASection
        title="Explore Beta Simulations"
        description="Start with our four beta propulsion engines and see how Foundry scales across missions, vehicles, and use cases."
        buttonLabel="View Beta Engines"
        to="/projects"
      />
    </>
  );
};

export default Foundry;
