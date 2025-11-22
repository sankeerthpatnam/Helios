import Hero from "../components/Hero";
import SplitGraphicText from "../components/SplitGraphicText";
import SpecsGrid from "../components/SpecsGrid";
import TimelineSection from "../components/TimelineSection";
import CTASection from "../components/CTASection";

const TurtleBeta = () => {
  return (
    <>
      <Hero
        eyebrow="Turtle Beta / Land Propulsion"
        title="Hydrogen Ground Propulsion for Land Systems."
        subtitle="Turtle Beta is a hydrogen-based propulsion module aimed at land vehicles that demand high torque, resilience, and long-duration duty cycles."
        ctas={[
          { label: "Run in Foundry", to: "/foundry" },
          { label: "Back to Projects", to: "/projects", variant: "outline" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Land Propulsion Core"
        title="Designed for high-torque terrestrial systems."
        description="Turtle Beta focuses on hydrogen propulsion architectures for ground vehicles—from heavy rover platforms to logistics systems. The model includes drivetrain integration, thermal loops, and hydrogen storage constraints."
        note="Replace this placeholder with a 3D render of a ground drivetrain or modular land platform."
      />

      <SpecsGrid
        title="Turtle Beta / Technical Snapshot"
        groups={[
          {
            label: "Configuration",
            items: [
              { name: "Domain", value: "Land propulsion" },
              { name: "Focus", value: "High torque, continuous duty" },
            ],
          },
          {
            label: "Simulation Hooks",
            items: [
              { name: "Hydrogen Model", value: "Integrated with Foundry core" },
              { name: "Vehicle Mapping", value: "Wheel/track/axle configs" },
            ],
          },
        ]}
      />

      <TimelineSection
        title="Future Applications / Land"
        items={[
          {
            label: "Near-Term",
            title: "Uncrewed ground systems.",
            description:
              "Hydrogen-powered UGVs, logistics platforms, and autonomous ground vehicles operating with extended range.",
          },
          {
            label: "Mid-Term",
            title: "Hybridized fleets.",
            description:
              "Hydrogen modules that can coexist with electric or conventional drivetrains during transition periods.",
          },
          {
            label: "Long-Term",
            title: "Hydrogen-native land architectures.",
            description:
              "Ground vehicles designed from scratch around hydrogen propulsion, informed by Turtle Beta iterations.",
          },
        ]}
      />

      <CTASection
        title="Explore Turtle Beta in Foundry."
        description="Connect Turtle Beta to scenarios, terrains, and mission profiles inside the Helios Foundry environment."
        buttonLabel="Open Foundry"
        to="/foundry"
      />
    </>
  );
};

export default TurtleBeta;
