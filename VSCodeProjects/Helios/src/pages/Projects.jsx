import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";
import CTASection from "../components/CTASection";

const Projects = () => {
  return (
    <>
      <Hero
        eyebrow="Beta Engine Modules"
        title="Our Beta Propulsion Engines."
        subtitle="Four hydrogen-powered beta modules, each mapped to a different domain: land, air, naval, and power generation."
        ctas={[
          { label: "Explore Turtle (Land)", to: "/turtle-beta" },
          { label: "Explore Pelican (Air)", to: "/pelican-beta", variant: "outline" },
        ]}
      />

      <CardGrid
        title="Helios Beta Modules"
        subtitle="Each beta engine is instrumented inside Foundry for configuration, visualization, and scenario testing."
        cards={[
          {
            tag: "Land Propulsion",
            title: "Turtle Beta",
            description:
              "Hydrogen-based ground propulsion architecture designed for high-torque, high-durability terrestrial vehicles.",
            to: "/turtle-beta",
            ctaLabel: "Open Turtle",
          },
          {
            tag: "Air Propulsion",
            title: "Pelican Beta",
            description:
              "Airframe-integrated hydrogen propulsion for aerial platforms, tuned for endurance and efficiency.",
            to: "/pelican-beta",
            ctaLabel: "Open Pelican",
          },
          {
            tag: "Naval Propulsion",
            title: "Beluga Beta",
            description:
              "Naval-focused hydrogen propulsion for surface or near-surface vessels, optimized for continuous duty cycles.",
            to: "/beluga-beta",
            ctaLabel: "Open Beluga",
          },
          {
            tag: "Hydrogen Generation",
            title: "Beaver Beta",
            description:
              "Hydrogen generator system for powering external loads or feeding propulsion stacks across domains.",
            to: "/beaver-beta",
            ctaLabel: "Open Beaver",
          },
        ]}
      />

      <CTASection
        title="Connect Engines to Missions."
        description="Foundry is designed to scale from these beta modules into real programs across land, air, sea, and power generation."
        buttonLabel="Talk to the Team"
        to="/join-our-mission"
      />
    </>
  );
};

export default Projects;
