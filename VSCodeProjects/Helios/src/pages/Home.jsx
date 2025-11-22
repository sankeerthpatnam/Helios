import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <Hero
        eyebrow="Hydrogen Propulsion Foundry"
        title="Cinematic Simulation for the Next Generation of Engines."
        subtitle="Helios Foundry is a digital twin platform for hydrogen propulsion systems across land, air, sea, and power generation."
        ctas={[
          { label: "Explore Foundry", to: "/foundry" },
          { label: "See Beta Modules", to: "/projects", variant: "outline" },
          {
            label: "Join Our Mission",
            to: "/join-our-mission",
            variant: "outline",
          },
        ]}
      />

      <FeatureSection
        title="The Helios Foundry Stack"
        subtitle="From hydrogen physics to full-stack propulsion simulation, Foundry lets teams design, iterate, and validate engines before metal is cut."
        features={[
          {
            tag: "Digital Twin Core",
            title: "End-to-end engine twins.",
            description:
              "Create high-fidelity digital twins for land, air, and naval engines with shared physics, geometry, and control models.",
          },
          {
            tag: "Hydrogen Physics Engine",
            title: "Hydrogen-first modeling.",
            description:
              "Model combustion, flow, and energy transfer in hydrogen-based systems with modular physics kernels.",
          },
          {
            tag: "Rapid Iteration Loop",
            title: "Design, test, repeat.",
            description:
              "Run parameter sweeps, compare variants, and export configurations directly to hardware integration pipelines.",
          },
        ]}
      />

      <CTASection
        title="Ready to build the next propulsion era?"
        description="Explore the beta modules, connect with the team, or help shape Foundry for government, commercial, and research partners."
        buttonLabel="Join Our Mission"
        to="/join-our-mission"
      />
    </>
  );
};

export default Home;
