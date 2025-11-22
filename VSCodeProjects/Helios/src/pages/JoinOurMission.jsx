import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import CTASection from "../components/CTASection";
import SplitGraphicText from "../components/SplitGraphicText";

const JoinOurMission = () => {
  return (
    <>
      <Hero
        eyebrow="Join Our Mission"
        title="Hydrogen Propulsion for the Next Era."
        subtitle="Helios is building a hydrogen-first propulsion and simulation layer for land, air, sea, and beyond. We’re looking for engineers, partners, and institutions who want to accelerate that future."
        ctas={[
          { label: "Careers & Collaborations", to: "/join-our-mission" },
          { label: "View Beta Engines", to: "/projects", variant: "outline" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Mission"
        title="From simulation artifacts to real engines."
        description="We believe the next generation of propulsion systems must be built hydrogen-native from day zero. Foundry, our digital twin environment, is the starting point for that transition—connecting physics, design, and eventually hardware. The beta engines you see across Turtle, Pelican, Beluga, and Beaver are the first step."
        note="Use this section to describe your mission for investors, government partners, and early collaborators."
      />

      <TeamSection
        members={[
          { name: "Founder / CEO", role: "Helios Systems" },
          { name: "Founding Engineer", role: "Propulsion & Simulation" },
          { name: "Founding Partner", role: "Strategy & Programs" },
        ]}
      />

      <SplitGraphicText
        eyebrow="Careers, Investors & Government"
        title="Align with Helios."
        description="Whether you're building advanced propulsion, running research programs, or shaping policy, we’re assembling a coalition that can translate hydrogen-native concepts into deployable systems."
        note="This is a placeholder for specific roles, investor notes, and government program alignments (AFWERX, DARPA, DIU, etc.)."
        reverse
      />

      <CTASection
        title="Ready to talk?"
        description="Use the contact channels on this page (or your preferred path) to connect with the Helios team about careers, investments, or government programs."
        buttonLabel="Back to Home"
        to="/"
      />
    </>
  );
};

export default JoinOurMission;
