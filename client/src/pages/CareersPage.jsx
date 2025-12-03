import { useState } from "react";
import PageHero from "../components/common/PageHero";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Application submitted:", formData);
  };
  const openPositions = [
    {
      id: 1,
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead complex data science projects, develop predictive models, and mentor junior team members.",
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Design and implement ML pipelines, deploy models to production, and optimize performance.",
    },
    {
      id: 3,
      title: "Data Engineer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Build and maintain data infrastructure, create ETL pipelines, and ensure data quality.",
    },
    {
      id: 4,
      title: "AI Research Scientist",
      department: "Research",
      location: "On-site",
      type: "Full-time",
      experience: "PhD preferred",
      description:
        "Conduct cutting-edge AI research, publish papers, and develop innovative solutions.",
    },
    {
      id: 5,
      title: "Business Intelligence Analyst",
      department: "Analytics",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Create dashboards, analyze business metrics, and deliver actionable insights to stakeholders.",
    },
    {
      id: 6,
      title: "Data Science Intern",
      department: "Data Science",
      location: "On-site",
      type: "Internship",
      experience: "Students welcome",
      description:
        "Work on real-world projects, learn from experienced professionals, and kickstart your career.",
    },
  ];

  const benefits = [
    {
      id: "salary",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
    },
    {
      id: "global",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Global Opportunities",
      description: "Work with clients worldwide",
    },
    {
      id: "learning",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Learning & Growth",
      description: "Continuous training and development",
    },
    {
      id: "flexible",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Flexible Hours",
      description: "Work-life balance is our priority",
    },
    {
      id: "innovation",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovation Focus",
      description: "Work on cutting-edge projects",
    },
    {
      id: "team",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Great Team",
      description: "Collaborative and supportive culture",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Join Our Team"
        subtitle="Be part of a team that's shaping the future of AI and data science"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Why Join Us Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                We believe in creating an environment where our team can thrive,
                innovate, and grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-6 lg:p-8 border-2 border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80"
                    alt="Join our team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                      Start Your Journey
                    </h3>
                    <p className="text-brand-glow text-lg">
                      Join a team of innovators and experts
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Application Form */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                    Apply Now
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                    Submit Your{" "}
                    <span className="gradient-text">Application</span>
                  </h2>
                  <p className="text-lg text-secondary-600">
                    Fill out the form below and we'll review your application.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-secondary-900 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-brand-purple focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-secondary-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-brand-purple focus:outline-none transition-colors"
                      placeholder="john@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-secondary-900 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-brand-purple focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-semibold text-secondary-900 mb-2"
                    >
                      Applying For Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-brand-purple focus:outline-none transition-colors"
                    >
                      <option value="">Select a position</option>
                      <option value="Senior Data Scientist">
                        Senior Data Scientist
                      </option>
                      <option value="Machine Learning Engineer">
                        Machine Learning Engineer
                      </option>
                      <option value="Data Engineer">Data Engineer</option>
                      <option value="AI Research Scientist">
                        AI Research Scientist
                      </option>
                      <option value="Business Intelligence Analyst">
                        Business Intelligence Analyst
                      </option>
                      <option value="Data Science Intern">
                        Data Science Intern
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-semibold text-secondary-900 mb-2"
                    >
                      Resume / CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-brand-purple focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-purple/10 file:text-brand-purple hover:file:bg-brand-purple/20 file:cursor-pointer"
                      />
                    </div>
                    <p className="mt-2 text-xs text-secondary-500">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="block text-sm font-semibold text-secondary-900 mb-2"
                    >
                      Cover Letter / Message
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                      placeholder="Tell us why you'd be a great fit..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-accent text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>Submit Application</span>
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Open Positions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Current Opportunities
              </h2>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your
                skills and aspirations.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={position.id}
                  className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl group"
                  style={{
                    animation: "fadeIn 0.6s ease-out forwards",
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-secondary-900">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-semibold rounded-full">
                          {position.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-secondary-600">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          <span>{position.experience}</span>
                        </div>
                      </div>

                      <p className="text-secondary-600 leading-relaxed">
                        {position.description}
                      </p>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <button className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-accent text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                        <span>Apply Now</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                      </button>
                    </div>
                  </div>
                </div>
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
                  Don't See Your Role?
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals. Send us your
                  resume and we'll keep you in mind for future opportunities.
                </p>
                <button className="px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                  <span>Submit Your Resume</span>
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
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;
