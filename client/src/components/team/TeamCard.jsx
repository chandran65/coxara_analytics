import PropTypes from "prop-types";

const TeamCard = ({ member, isFounder = false }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-brand-purple/40 overflow-hidden">
    <div className="p-6 sm:p-8">
      {/* Photo and Basic Info Section */}
      <div className="flex flex-col items-center text-center mb-6">
        {/* Photo */}
        <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 mb-6">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 group-hover:scale-105 transition-transform duration-300 border-4 border-white shadow-lg">
            {/* Professional Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 text-brand-purple/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-full ring-2 ring-brand-purple/20 group-hover:ring-brand-purple/40 transition-all duration-300" />
          </div>
        </div>

        {/* Name and Designation */}
        <div className="w-full">
          <h3
            className={`font-display font-bold text-secondary-900 mb-2 ${isFounder ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}
          >
            {member.name}
          </h3>
          <p className="text-brand-purple font-semibold text-sm sm:text-base mb-4">
            {member.designation}
          </p>

          {/* Social Links - Compact */}
          <div className="flex gap-2 justify-center">
            <button
              className="w-9 h-9 bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-lg flex items-center justify-center text-brand-purple hover:from-brand-purple hover:to-brand-accent hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
            <button
              className="w-9 h-9 bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-lg flex items-center justify-center text-brand-purple hover:from-brand-purple hover:to-brand-accent hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <p className="text-secondary-700 leading-relaxed text-sm sm:text-base">
          {member.bio}
        </p>
      </div>

      {/* Expertise Tags */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-3">
          Expertise
        </p>
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple text-xs sm:text-sm font-semibold rounded-lg border border-brand-purple/20 hover:border-brand-purple/40 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isFounder: PropTypes.bool,
};

export default TeamCard;
