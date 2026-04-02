import { motion } from "framer-motion";
import PropTypes from "prop-types";

const TeamCard = ({ member, index = 0 }) => {
  const accents = [
    {
      from: "from-violet-600",
      to: "to-purple-400",
      glow: "shadow-violet-500/20",
      text: "text-violet-400",
    },
    {
      from: "from-indigo-500",
      to: "to-violet-400",
      glow: "shadow-indigo-500/20",
      text: "text-indigo-400",
    },
    {
      from: "from-purple-600",
      to: "to-fuchsia-400",
      glow: "shadow-purple-500/20",
      text: "text-purple-400",
    },
    {
      from: "from-fuchsia-500",
      to: "to-violet-400",
      glow: "shadow-fuchsia-500/20",
      text: "text-fuchsia-400",
    },
  ];
  const accent = accents[index % accents.length];

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group h-full [perspective:1200px]"
    >
      <div className="relative w-full h-full min-h-[380px] [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[transform:rotateY(180deg)]">
        {/* ═══════ FRONT FACE ═══════ */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden">
          {/* Card shell */}
          <div
            className={`h-full bg-white border border-secondary-100 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:${accent.glow} transition-shadow duration-500`}
          >
            {/* Top gradient ribbon */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accent.from} ${accent.to}`}
            />

            {/* Decorative background pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Soft gradient blobs */}
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${accent.from}/[0.06] ${accent.to}/[0.06] blur-3xl`}
              />
              <div
                className={`absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-tr ${accent.from}/[0.04] ${accent.to}/[0.04] blur-3xl`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-8 py-10">
              {/* Avatar */}
              <div className="relative mb-6">
                {/* Outer animated ring */}
                <motion.div
                  className={`absolute -inset-2 rounded-full bg-gradient-to-r ${accent.from} ${accent.to} opacity-20`}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${accent.from} ${accent.to} p-[3px] shadow-xl ${accent.glow}`}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${accent.from}/[0.08] ${accent.to}/[0.08] flex items-center justify-center`}
                    >
                      <span className="text-3xl font-display font-bold bg-gradient-to-br from-brand-purple to-brand-accent bg-clip-text text-transparent select-none">
                        {initials}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-1 text-center">
                {member.name}
              </h3>

              {/* Designation */}
              <p
                className={`text-sm font-semibold bg-gradient-to-r ${accent.from} ${accent.to} bg-clip-text text-transparent text-center mb-5`}
              >
                {member.designation}
              </p>

              {/* Divider */}
              <div
                className={`w-10 h-[2px] bg-gradient-to-r ${accent.from} ${accent.to} rounded-full mb-5 opacity-40`}
              />

              {/* Hint to flip */}
              <div className="flex items-center gap-2 text-secondary-400">
                <span className="text-xs font-medium">Hover to know more</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </motion.svg>
              </div>
            </div>

            {/* Bottom shimmer bar */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.from} ${accent.to} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
            />
          </div>
        </div>

        {/* ═══════ BACK FACE ═══════ */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
          <div
            className={`h-full bg-white border border-secondary-100 rounded-2xl flex flex-col relative overflow-hidden shadow-xl ${accent.glow}`}
          >
            {/* Top gradient ribbon */}
            <div
              className={`h-1.5 bg-gradient-to-r ${accent.from} ${accent.to} flex-shrink-0`}
            />

            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div
                className={`absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br ${accent.from}/[0.06] blur-3xl`}
              />
              <div
                className={`absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-tr ${accent.to}/[0.04] blur-2xl`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-1 p-7 sm:p-8 overflow-hidden">
              {/* Header row: mini avatar + name */}
              <div className="flex items-center gap-4 mb-5 flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.from} ${accent.to} p-[2px] flex-shrink-0`}
                >
                  <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                    <span className="text-sm font-display font-bold bg-gradient-to-br from-brand-purple to-brand-accent bg-clip-text text-transparent">
                      {initials}
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-display font-bold text-secondary-900 truncate">
                    {member.name}
                  </h3>
                  <p
                    className={`text-xs font-semibold bg-gradient-to-r ${accent.from} ${accent.to} bg-clip-text text-transparent`}
                  >
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 min-h-0 mb-4 overflow-hidden">
                <svg
                  className="w-4 h-4 mb-2 flex-shrink-0"
                  style={{ color: "#6D28D9", opacity: 0.15 }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-secondary-600 leading-relaxed text-sm line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="border-t border-secondary-100 pt-4 mb-4 flex-shrink-0">
                <p className="text-[10px] font-bold text-secondary-400 uppercase tracking-[0.15em] mb-3">
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border border-secondary-100 bg-secondary-50 text-secondary-600`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links — pinned to bottom */}
              <div className="flex gap-2 pt-2 flex-shrink-0 border-t border-secondary-100">
                {[
                  {
                    label: "LinkedIn",
                    icon: (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    ),
                    fill: true,
                  },
                  {
                    label: "Email",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    ),
                    fill: false,
                  },
                ].map((social) => (
                  <motion.button
                    key={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 rounded-xl bg-secondary-50 border border-secondary-100 hover:bg-gradient-to-br hover:${accent.from} hover:${accent.to} flex items-center justify-center text-secondary-400 hover:text-white transition-all duration-200`}
                    aria-label={social.label}
                  >
                    <svg
                      className="w-4 h-4"
                      fill={social.fill ? "currentColor" : "none"}
                      stroke={social.fill ? "none" : "currentColor"}
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className={`h-[2px] bg-gradient-to-r ${accent.from} ${accent.to} opacity-40`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default TeamCard;
