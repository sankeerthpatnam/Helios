import Hero from "../components/Hero";
import SplitGraphicText from "../components/SplitGraphicText";
import SpecsGrid from "../components/SpecsGrid";
import TimelineSection from "../components/TimelineSection";
import CTASection from "../components/CTASection";

const PelicanBeta = () => {
  return (
    <>
      <Hero
        eyebrow="Pelican Beta / Air Propulsion"
        title="Hydrogen Propulsion for Aerial Platforms."
        subtitle="Pelican Beta explores hydrogen-powered air propulsion modules for long-endurance, high-efficiency aerial systems."
        ctas={[
          { label: "Run in Foundry", to: "/foundry" },
          { label: "Back to Projects", to: "/projects", variant: "outline" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Air Propulsion Core"
        title="Engineered for endurance and efficiency."
        description="Pelican Beta focuses on hydrogen propulsion topologies suitable for fixed-wing, VTOL, or blended configurations. The digital twin includes aerodynamic loading, energy loops, and control surface interfacing."
        note="Swap this placeholder with a 3D model of an airframe-integrated hydrogen propulsion system."
        reverse
      />

      <SpecsGrid
        title="Pelican Beta / Technical Snapshot"
        groups={[
          {
            label: "Configuration",
            items: [
              { name: "Domain", value: "Air propulsion" },
              { name: "Focus", value: "Endurance, efficiency" },
            ],
          },
          {
            label: "Simulation Hooks",
            items: [
              { name: "Aerodynamics", value: "Wing/propulsor integration" },
              { name: "Flight Envelope", value: "Scenario-based mission runs" },
            ],
          },
        ]}
      />

      <TimelineSection
        title="Future Applications / Air"
        items={[
          {
            label: "Near-Term",
            title: "Subscale flight demonstrators.",
            description:
              "Hydrogen-powered test vehicles used to validate energy profiles and control strategies.",
          },
          {
            label: "Mid-Term",
            title: "Mission-specific aerial systems.",
            description:
              "Persistent ISR, logistics, and comms platforms running on hydrogen propulsion architectures.",
          },
          {
            label: "Long-Term",
            title: "Hydrogen-native aircraft families.",
            description:
              "Aerial systems designed from the ground up around Pelican-derived propulsion stacks.",
          },
        ]}
      />

      <CTASection
        title="Explore Pelican Beta in Foundry."
        description="Use Foundry to iterate on hydrogen air propulsion concepts and see their impact across full mission profiles."
        buttonLabel="Open Foundry"
        to="/foundry"
      />
    </>
  );
};

export default PelicanBeta;
