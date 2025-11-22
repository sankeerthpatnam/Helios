import Hero from "../components/Hero";
import SplitGraphicText from "../components/SplitGraphicText";
import SpecsGrid from "../components/SpecsGrid";
import TimelineSection from "../components/TimelineSection";
import CTASection from "../components/CTASection";

const BelugaBeta = () => {
  return (
    <>
      <Hero
        eyebrow="Beluga Beta / Naval Propulsion"
        title="Hydrogen Propulsion for Naval Platforms."
        subtitle="Beluga Beta is a hydrogen-centric propulsion concept for naval and maritime systems demanding continuous operation."
        ctas={[
          { label: "Run in Foundry", to: "/foundry" },
          { label: "Back to Projects", to: "/projects", variant: "outline" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Naval Propulsion Core"
        title="Stability, runtime, and duty cycle."
        description="Beluga Beta centers on hydrogen propulsion topologies appropriate for surface or near-surface maritime vehicles. The digital twin includes hydrodynamic drag, energy budgets, and integration with onboard systems."
        note="Replace this placeholder with a 3D model of a hull-integrated propulsion layout or propulsor assembly."
      />

      <SpecsGrid
        title="Beluga Beta / Technical Snapshot"
        groups={[
          {
            label: "Configuration",
            items: [
              { name: "Domain", value: "Naval propulsion" },
              {
                name: "Focus",
                value: "Continuous duty, maritime operating envelopes",
              },
            ],
          },
          {
            label: "Simulation Hooks",
            items: [
              { name: "Hydrodynamics", value: "Hull and propulsor modeling" },
              { name: "Thermal Loop", value: "Duty cycle-driven performance" },
            ],
          },
        ]}
      />

      <TimelineSection
        title="Future Applications / Naval"
        items={[
          {
            label: "Near-Term",
            title: "Hydrogen-assisted maritime systems.",
            description:
              "Hybrid propulsion concepts that combine hydrogen with existing naval systems.",
          },
          {
            label: "Mid-Term",
            title: "Hydrogen-centric patrol and logistics craft.",
            description:
              "Medium-size vessels that run on hydrogen propulsion architectures validated through Beluga Beta.",
          },
          {
            label: "Long-Term",
            title: "Hydrogen-native maritime fleets.",
            description:
              "Vessels designed fully around hydrogen generation, storage, and propulsion modules.",
          },
        ]}
      />

      <CTASection
        title="Explore Beluga Beta in Foundry."
        description="Simulate maritime duty cycles, hydrodynamic conditions, and mission profiles powered by Beluga Beta."
        buttonLabel="Open Foundry"
        to="/foundry"
      />
    </>
  );
};

export default BelugaBeta;
