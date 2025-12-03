import PageHero from "../components/common/PageHero";
import TeamCard from "../components/team/TeamCard";

const TeamPage = () => {
  const teamMembers = {
    founders: [
      {
        name: "Sumithra M.G",
        designation: "Co-Founder & CEO",
        bio: "A visionary leader driving the democratization of advanced analytics. Dr. Sumithra combines deep technical expertise with strategic business acumen to transform enterprise data into predictive intelligence.",
        expertise: ["Decision Intelligence", "Strategic Leadership", "AI Automation"],
      },
      {
        name: "Chandran V",
        designation: "Co-Founder & CTO",
        bio: "Leading the technological innovation behind our autonomous decision intelligence platform. Dr. Chandran specializes in building scalable, real-time AI architectures.",
        expertise: ["AI Architect", "Cloud Computing", "Tech Innovation"],
      },
      {
        name: "Suriya M",
        designation: "Co-Founder & CFO",
        bio: "Expert in financial strategy and sustainable business growth. Dr. Suriya ensures operational excellence and drives measurable business impact through optimized resource allocation.",
        expertise: ["Financial Strategy", "Growth Optimization", "Business Operations"],
      },
    ],
    verticalHeads: [
      {
        name: "Elakkiya  B",
        designation: "Head - Learning & Development",
        bio: "Driving organizational excellence through continuous learning. Dr. Elakkiya leads our initiatives to foster talent and build a culture of innovation and growth.",
        expertise: ["Talent Development", "Learning Strategy", "Organizational Growth"],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Meet Our Team"
        subtitle="Passionate experts driving innovation in data science and AI"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
      />
      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* About Our Team Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                About Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                A Team of <span className="gradient-text">Visionaries</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our leadership team combines decades of experience in data
                science, machine learning, and business strategy. Together, they
                guide our mission to deliver transformative solutions that
                empower organizations worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Founding Team Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple font-bold text-sm rounded-full border-2 border-brand-purple/20 mb-6 shadow-md">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Founding <span className="gradient-text">Team</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {teamMembers.founders.map((founder) => (
                <TeamCard key={founder.name} member={founder} isFounder={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Vertical Heads Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Vertical <span className="gradient-text">Heads</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent rounded-full mx-auto mb-6" />
              <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Leaders driving excellence across our key operational verticals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto justify-center">
              {teamMembers.verticalHeads.map((head) => (
                <TeamCard key={head.name} member={head} />
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                  Join Our Team
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Be part of a team that's shaping the future of data science
                  and AI.
                </p>
                <a
                  href="/company/careers"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>View Open Positions</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
