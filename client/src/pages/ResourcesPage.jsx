import { useState } from "react";
import PageHero from "../components/common/PageHero";

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Data Analytics: A Beginner's Guide",
      category: "Tutorial",
      date: "November 5, 2025",
      readTime: "8 min read",
      excerpt:
        "Learn the fundamentals of data analytics and how to leverage data for better business decisions. This comprehensive guide covers key concepts, tools, and best practices.",
      author: "Data Analytics Team",
    },
    {
      id: 2,
      title: "5 Key Performance Indicators Every Business Should Track",
      category: "Best Practices",
      date: "November 1, 2025",
      readTime: "6 min read",
      excerpt:
        "Discover the essential KPIs that provide insights into your business health and performance. Learn how to measure, monitor, and optimize these critical metrics.",
      author: "Business Intelligence Team",
    },
    {
      id: 3,
      title: "The Future of AI in Business Analytics",
      category: "Industry Insights",
      date: "October 28, 2025",
      readTime: "10 min read",
      excerpt:
        "Explore how artificial intelligence is revolutionizing business analytics. From predictive modeling to automated insights, discover what's next in AI-powered analytics.",
      author: "Research Team",
    },
    {
      id: 4,
      title: "Customer Segmentation Strategies That Actually Work",
      category: "Case Study",
      date: "October 25, 2025",
      readTime: "7 min read",
      excerpt:
        "Real-world examples of successful customer segmentation strategies. Learn how leading companies use data to understand and serve their customers better.",
      author: "Marketing Analytics Team",
    },
    {
      id: 5,
      title: "Building an Effective Dashboard: Design Principles",
      category: "Tutorial",
      date: "October 22, 2025",
      readTime: "9 min read",
      excerpt:
        "Master the art of dashboard design with proven principles and techniques. Create visualizations that inform, engage, and drive action.",
      author: "UX & Analytics Team",
    },
    {
      id: 6,
      title: "Data Privacy and Security in Analytics: What You Need to Know",
      category: "Compliance",
      date: "October 18, 2025",
      readTime: "11 min read",
      excerpt:
        "Navigate the complex landscape of data privacy regulations. Learn best practices for maintaining security while leveraging analytics.",
      author: "Compliance Team",
    },
  ];

  const categories = [
    "All",
    "Tutorial",
    "Best Practices",
    "Industry Insights",
    "Case Study",
    "Compliance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Resources & Blog"
        subtitle="Insights, guides, and thought leadership from our analytics experts"
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Knowledge Hub
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                Learn & <span className="gradient-text">Grow</span> with Us
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Stay updated with the latest trends, best practices, and
                insights in data analytics. Our blog features practical guides,
                case studies, and industry thought leadership.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    category === activeCategory
                      ? "bg-gradient-to-r from-brand-purple to-brand-accent text-white shadow-md"
                      : "bg-white text-secondary-700 border-2 border-gray-200 hover:border-brand-purple/40 hover:text-brand-purple"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          id="blog"
          className="py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white scroll-mt-20"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-brand-purple/40 overflow-hidden"
                >
                  {/* Placeholder Image */}
                  <div className="h-48 bg-gradient-to-br from-brand-purple/20 to-brand-accent/20 flex items-center justify-center group-hover:from-brand-purple/30 group-hover:to-brand-accent/30 transition-all duration-300">
                    <svg
                      className="w-16 h-16 text-brand-purple/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-secondary-500">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-3 group-hover:text-brand-purple transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-secondary-700">
                            {post.author}
                          </p>
                          <p className="text-xs text-secondary-500">
                            {post.date}
                          </p>
                        </div>
                      </div>

                      <button className="text-brand-purple hover:text-brand-accent font-semibold text-sm flex items-center gap-1 group/btn">
                        Read More
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-accent text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Get the latest insights, tips, and updates delivered directly
                  to your inbox. No spam, just valuable content.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
