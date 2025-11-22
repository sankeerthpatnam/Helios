import Hero from "../components/Hero";
import SplitGraphicText from "../components/SplitGraphicText";
import SpecsGrid from "../components/SpecsGrid";
import TimelineSection from "../components/TimelineSection";
import CTASection from "../components/CTASection";

const BeaverBeta = () => {
  return (
    <>
      <Hero
        eyebrow="Beaver Beta / Hydrogen Generator"
        title="Hydrogen Generation for Propulsion and Power."
        subtitle="Beaver Beta is a hydrogen generation module aimed at feeding propulsion stacks or powering external loads across domains."
        ctas={[
          { label: "Run in Foundry", to: "/foundry" },
          { label: "Back to Projects", to: "/projects", variant: "outline" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Hydrogen Generator Core"
        title="A foundation for hydrogen-native systems."
        description="Beaver Beta models the generation, conditioning, and delivery of hydrogen as a first-class system. The digital twin covers flow, storage, and interfaces to propulsion or power architectures."
        note="Replace the model placeholder with a 3D visualization of a hydrogen generator stack or modular skid."
        reverse
      />

      <SpecsGrid
        title="Beaver Beta / Technical Snapshot"
        groups={[
          {
            label: "Configuration",
            items: [
              { name: "Domain", value: "Hydrogen generation" },
              { name: "Focus", value: "Supply for propulsion & power systems" },
            ],
          },
          {
            label: "Simulation Hooks",
            items: [
              { name: "Flow & Storage", value: "Integrated hydrogen loops" },
              { name: "Integration", value: "Plugs into Turtle, Pelican, Beluga" },
            ],
          },
        ]}
      />

      <TimelineSection
        title="Future Applications / Power & Supply"
        items={[
          {
            label: "Near-Term",
            title: "Test-stand and ground support.",
            description:
              "Hydrogen generation modules supporting early engine and system testing.",
          },
          {
            label: "Mid-Term",
            title: "Distributed hydrogen infrastructure.",
            description:
              "Modular generator units feeding propulsion systems in fielded environments.",
          },
          {
            label: "Long-Term",
            title: "Hydrogen-native infrastructure.",
            description:
              "Integrated hydrogen generation, storage, and propulsion ecosystems spanning land, air, and sea.",
          },
        ]}
      />

      <CTASection
        title="Explore Beaver Beta in Foundry."
        description="Simulate hydrogen generation and delivery as a first-class part of your propulsion architecture."
        buttonLabel="Open Foundry"
        to="/foundry"
      />
    </>
  );
};

export default BeaverBeta;
