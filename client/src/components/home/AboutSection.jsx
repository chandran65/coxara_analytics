import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

/* ── Quantum Intelligence Sphere (About) ── */
const AbstractVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 select-none">
      {/* Multi-layered background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/12 to-brand-accent/6 rounded-full blur-[100px] scale-110 hidden sm:block" />
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-brand-purple/[0.08] rounded-full blur-[60px] hidden sm:block" />

      <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="pnrCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="40%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </radialGradient>
          <radialGradient id="pnrAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pnrArcStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>
          <filter id="pnrNeon">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pnrSoft">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background star-dust particles — golden-angle distribution */}
        {Array.from({ length: 50 }, (_, i) => {
          const angle = i * 2.399 + 0.5;
          const r = 25 + ((i * 47 + 13) % 170);
          const cx = 200 + r * Math.cos(angle);
          const cy = 200 + r * Math.sin(angle);
          if (cx < 10 || cx > 390 || cy < 10 || cy > 390) return null;
          return (
            <motion.circle
              key={`star-${i}`}
              cx={cx}
              cy={cy}
              r={0.4 + (i % 3) * 0.2}
              fill="#C084FC"
              animate={{
                opacity: [
                  0.03 + (i % 4) * 0.02,
                  0.12 + (i % 3) * 0.04,
                  0.03 + (i % 4) * 0.02,
                ],
              }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                delay: (i % 8) * 0.4,
              }}
            />
          );
        })}

        {/* ═══ Globe wireframe — sphere illusion via tilted ellipses ═══ */}

        {/* Outer sphere boundary */}
        <motion.circle
          cx="200"
          cy="200"
          r="132"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="0.7"
          animate={{ r: [132, 135, 132], opacity: [0.1, 0.17, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="136"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.3"
          strokeDasharray="1,5,10,5"
          opacity="0.06"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Equator ellipse */}
        <motion.ellipse
          cx="200"
          cy="208"
          rx="130"
          ry="24"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.7"
          strokeDasharray="6,4,2,4"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Meridian 1 — near-vertical */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="28"
          ry="130"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="0.6"
          strokeDasharray="4,8"
          opacity="0.12"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Meridian 2 — tilted +35° */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="85"
          ry="130"
          fill="none"
          stroke="#C084FC"
          strokeWidth="0.45"
          strokeDasharray="3,9"
          opacity="0.09"
          transform="rotate(35 200 200)"
          animate={{ opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Meridian 3 — tilted -35° */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="85"
          ry="130"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="0.45"
          strokeDasharray="3,9"
          opacity="0.09"
          transform="rotate(-35 200 200)"
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        {/* Latitude ring — north */}
        <ellipse
          cx="200"
          cy="138"
          rx="98"
          ry="16"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.3"
          strokeDasharray="2,10"
          opacity="0.07"
        />

        {/* Latitude ring — south */}
        <ellipse
          cx="200"
          cy="268"
          rx="105"
          ry="18"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.3"
          strokeDasharray="2,10"
          opacity="0.07"
        />

        {/* ═══ Orbital rings — 3 at different tilts ═══ */}

        {/* Orbit 1 — near-horizontal, large */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="160"
            ry="42"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="0.8"
            opacity="0.14"
          />
          {/* Traveling particle with trail */}
          {[0, 1].map((pi) => (
            <motion.circle
              key={`o1p-${pi}`}
              r={3 - pi}
              fill="#C084FC"
              animate={{
                cx: Array.from(
                  { length: 37 },
                  (_, j) => 200 + 160 * Math.cos((j * 2 * Math.PI) / 36),
                ),
                cy: Array.from(
                  { length: 37 },
                  (_, j) => 200 + 42 * Math.sin((j * 2 * Math.PI) / 36),
                ),
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "linear",
                delay: pi * 0.3,
              }}
              style={{
                filter: `drop-shadow(0 0 ${5 - pi * 2}px rgba(192,132,252,${0.7 - pi * 0.3}))`,
              }}
            />
          ))}
        </motion.g>

        {/* Orbit 2 — tilted 60° */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="148"
            ry="65"
            fill="none"
            stroke="#6D28D9"
            strokeWidth="0.65"
            opacity="0.11"
            transform="rotate(60 200 200)"
          />
          {[0, 1].map((pi) => (
            <motion.circle
              key={`o2p-${pi}`}
              r={2.5 - pi * 0.5}
              fill="#8B5CF6"
              animate={{
                cx: Array.from({ length: 37 }, (_, j) => {
                  const x = 148 * Math.cos((j * 2 * Math.PI) / 36);
                  const y = 65 * Math.sin((j * 2 * Math.PI) / 36);
                  return 200 + x * 0.5 - y * 0.866;
                }),
                cy: Array.from({ length: 37 }, (_, j) => {
                  const x = 148 * Math.cos((j * 2 * Math.PI) / 36);
                  const y = 65 * Math.sin((j * 2 * Math.PI) / 36);
                  return 200 + x * 0.866 + y * 0.5;
                }),
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "linear",
                delay: pi * 0.4,
              }}
              style={{
                filter: `drop-shadow(0 0 4px rgba(139,92,246,${0.65 - pi * 0.25}))`,
              }}
            />
          ))}
        </motion.g>

        {/* Orbit 3 — tilted -55° */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="155"
            ry="52"
            fill="none"
            stroke="#C084FC"
            strokeWidth="0.5"
            opacity="0.09"
            transform="rotate(-55 200 200)"
          />
          <motion.circle
            r="2"
            fill="#6D28D9"
            animate={{
              cx: Array.from({ length: 37 }, (_, j) => {
                const x = 155 * Math.cos((j * 2 * Math.PI) / 36);
                const y = 52 * Math.sin((j * 2 * Math.PI) / 36);
                return 200 + x * 0.5736 + y * 0.8192;
              }),
              cy: Array.from({ length: 37 }, (_, j) => {
                const x = 155 * Math.cos((j * 2 * Math.PI) / 36);
                const y = 52 * Math.sin((j * 2 * Math.PI) / 36);
                return 200 - x * 0.8192 + y * 0.5736;
              }),
            }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
            style={{
              filter: "drop-shadow(0 0 3px rgba(109,40,217,0.55))",
            }}
          />
        </motion.g>

        {/* ═══ Sphere surface nodes ═══ */}
        {(() => {
          const surfaceNodes = [
            { cx: 200, cy: 70, r: 4.5 },
            { cx: 138, cy: 100, r: 3.5 },
            { cx: 262, cy: 95, r: 3.5 },
            { cx: 92, cy: 162, r: 3 },
            { cx: 308, cy: 158, r: 3 },
            { cx: 72, cy: 210, r: 3.5 },
            { cx: 328, cy: 205, r: 3 },
            { cx: 155, cy: 175, r: 4 },
            { cx: 245, cy: 170, r: 4 },
            { cx: 160, cy: 220, r: 3.5 },
            { cx: 240, cy: 215, r: 3.5 },
            { cx: 108, cy: 268, r: 3 },
            { cx: 288, cy: 262, r: 3 },
            { cx: 148, cy: 308, r: 3.5 },
            { cx: 252, cy: 302, r: 3.5 },
            { cx: 200, cy: 330, r: 4 },
          ];

          const connections = [
            [0, 1],
            [0, 2],
            [1, 3],
            [1, 7],
            [2, 4],
            [2, 8],
            [3, 5],
            [3, 7],
            [4, 6],
            [4, 8],
            [5, 9],
            [6, 10],
            [7, 8],
            [7, 9],
            [8, 10],
            [9, 10],
            [9, 11],
            [10, 12],
            [5, 11],
            [6, 12],
            [11, 13],
            [12, 14],
            [13, 14],
            [13, 15],
            [14, 15],
            [11, 9],
            [12, 10],
          ];

          return (
            <>
              {/* Node connection lines */}
              {connections.map(([a, b], i) => (
                <motion.line
                  key={`sc-${i}`}
                  x1={surfaceNodes[a].cx}
                  y1={surfaceNodes[a].cy}
                  x2={surfaceNodes[b].cx}
                  y2={surfaceNodes[b].cy}
                  stroke="#8B5CF6"
                  strokeWidth="0.45"
                  animate={{ opacity: [0.04, 0.15, 0.04] }}
                  transition={{
                    duration: 3.5 + (i % 5) * 0.4,
                    repeat: Infinity,
                    delay: i * 0.12,
                  }}
                />
              ))}

              {/* Node dots with glow halos */}
              {surfaceNodes.map((node, i) => (
                <motion.g key={`sn-${i}`}>
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r * 3}
                    fill="url(#pnrAura)"
                    animate={{
                      r: [node.r * 2.5, node.r * 4, node.r * 2.5],
                      opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                      duration: 3 + i * 0.18,
                      repeat: Infinity,
                    }}
                  />
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="#6D28D9"
                    opacity={0.5 + (i % 4) * 0.08}
                    animate={{
                      r: [node.r, node.r * 1.25, node.r],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.12,
                    }}
                  />
                  <circle
                    cx={node.cx - node.r * 0.22}
                    cy={node.cy - node.r * 0.22}
                    r={node.r * 0.22}
                    fill="white"
                    opacity="0.25"
                  />
                </motion.g>
              ))}

              {/* Signal pulses traveling along connections */}
              {[
                { path: [0, 7, 9, 11, 13, 15], color: "#C084FC", delay: 0 },
                { path: [0, 8, 10, 12, 14, 15], color: "#8B5CF6", delay: 2 },
                { path: [5, 3, 1, 0, 2, 4, 6], color: "#6D28D9", delay: 4 },
              ].map((stream, si) =>
                [0, 1].map((pi) => (
                  <motion.circle
                    key={`sig-${si}-${pi}`}
                    r="2.8"
                    fill={stream.color}
                    animate={{
                      cx: stream.path.map((idx) => surfaceNodes[idx].cx),
                      cy: stream.path.map((idx) => surfaceNodes[idx].cy),
                      opacity: stream.path.map((_, k) =>
                        k === 0 || k === stream.path.length - 1 ? 0 : 0.85,
                      ),
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: stream.delay + pi * 2,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: `drop-shadow(0 0 6px ${stream.color}90)`,
                    }}
                  />
                )),
              )}
            </>
          );
        })()}

        {/* ═══ Central energy nexus ═══ */}
        <motion.circle
          cx="200"
          cy="200"
          r="20"
          fill="url(#pnrCore)"
          filter="url(#pnrNeon)"
          animate={{ r: [20, 24, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="200" cy="200" r="9" fill="white" opacity="0.07" />
        <circle cx="197" cy="197" r="5" fill="white" opacity="0.04" />
        {/* Breathing halo */}
        <motion.circle
          cx="200"
          cy="200"
          r="30"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.8"
          animate={{ r: [30, 38, 30], opacity: [0.14, 0.05, 0.14] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="42"
          fill="none"
          stroke="#C084FC"
          strokeWidth="0.4"
          animate={{ r: [42, 52, 42], opacity: [0.07, 0.02, 0.07] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ═══ Expanding wave rings from nexus ═══ */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`wave-${i}`}
            cx="200"
            cy="200"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="0.7"
            animate={{ r: [22, 90], opacity: [0.18, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* ═══ DNA helix accent — left edge ═══ */}
        {Array.from({ length: 14 }, (_, i) => {
          const t = i / 13;
          const y = 80 + t * 240;
          const x1 = 48 + 16 * Math.sin(t * Math.PI * 3.5);
          const x2 = 48 - 16 * Math.sin(t * Math.PI * 3.5);
          return (
            <g key={`helix-${i}`}>
              <motion.circle
                cx={x1}
                cy={y}
                r="1.8"
                fill="#8B5CF6"
                animate={{ opacity: [0.08, 0.28, 0.08] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.18,
                }}
              />
              <motion.circle
                cx={x2}
                cy={y}
                r="1.8"
                fill="#C084FC"
                animate={{ opacity: [0.08, 0.28, 0.08] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.18 + 0.35,
                }}
              />
              {i < 13 && (
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="#8B5CF6"
                  strokeWidth="0.35"
                  opacity="0.08"
                />
              )}
            </g>
          );
        })}

        {/* ═══ Data tower bars — right edge ═══ */}
        {Array.from({ length: 10 }, (_, i) => {
          const y = 85 + i * 24;
          const w = 8 + ((i * 7 + 3) % 18);
          return (
            <motion.rect
              key={`tower-${i}`}
              x={352 - w}
              y={y}
              width={w}
              height="3"
              rx="1.5"
              fill="#6D28D9"
              animate={{
                opacity: [0.04, 0.14, 0.04],
                width: [w, w + 6, w],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          );
        })}

        {/* ═══ Floating geometric accents ═══ */}
        {[
          { cx: 56, cy: 68, size: 6 },
          { cx: 344, cy: 78, size: 5 },
          { cx: 50, cy: 332, size: 5 },
          { cx: 350, cy: 322, size: 6 },
          { cx: 200, cy: 388, size: 4 },
        ].map((g, i) => (
          <motion.g
            key={`geo-${i}`}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 35 + i * 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: `${g.cx}px ${g.cy}px` }}
          >
            <motion.rect
              x={g.cx - g.size / 2}
              y={g.cy - g.size / 2}
              width={g.size}
              height={g.size}
              rx="1"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="0.5"
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            />
          </motion.g>
        ))}

        {/* ═══ Directional labels ═══ */}
        {[
          { x: 200, y: 52, text: "PREDICT" },
          { x: 52, y: 206, text: "LEARN" },
          { x: 348, y: 200, text: "ADAPT" },
          { x: 200, y: 358, text: "EVOLVE" },
        ].map((lbl, i) => (
          <motion.text
            key={`lbl-${i}`}
            x={lbl.x}
            y={lbl.y}
            textAnchor="middle"
            fill="#8B5CF6"
            fontSize="7"
            fontWeight="700"
            letterSpacing="2"
            animate={{ opacity: [0.06, 0.2, 0.06] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.9 }}
          >
            {lbl.text}
          </motion.text>
        ))}
      </svg>

      {/* Floating badge - top right */}
      <motion.div
        className="absolute top-[6%] right-[2%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-brand-purple/10 border border-secondary-100 px-4 py-2.5 z-10"
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-brand-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-secondary-800">
              AI-Native
            </p>
            <p className="text-[9px] text-brand-purple font-semibold">
              Approach
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge - bottom left */}
      <motion.div
        className="absolute bottom-[6%] left-[2%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-secondary-200/50 border border-secondary-100 px-4 py-2.5 z-10"
        animate={{ y: [3, -5, 3] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-secondary-800">
              GenAI Ready
            </p>
            <p className="text-[9px] text-secondary-400">Enterprise Grade</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge - mid right */}
      <motion.div
        className="absolute top-[45%] right-[0%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-brand-purple/10 border border-secondary-100 px-3 py-2 z-10"
        animate={{ y: [2, -4, 2], x: [0, -3, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-secondary-800">1.2M+</p>
            <p className="text-[8px] text-secondary-400">Predictions/day</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1, margin: "200px" });

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 glass-section relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Color-bleed orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-purple/[0.06] rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-accent/[0.05] rounded-full blur-[50px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Abstract Visual */}
          <AnimatedSection direction="left" className="hidden sm:block">
            {isInView && <AbstractVisual />}
          </AnimatedSection>

          {/* Right Side - Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6 text-center lg:text-left">
              <SectionHeading
                badge="About COXARA Analytics"
                title="Pioneering the Future of"
                highlight="Intelligent Enterprise"
                align="left"
              />

              <div className="space-y-4 text-base md:text-lg text-secondary-600 leading-relaxed">
                {[
                  "COXARA Analytics is a new-age AI & data intelligence firm built for the era of Generative AI. We help enterprises move beyond static dashboards to dynamic, self-learning systems that drive real business decisions.",
                  "We are the team behind Roxbee — our flagship Enterprise AI Copilot that lets business leaders chat with their data in plain English. No SQL, no data prep, no guesswork. Just clear, verifiable answers backed by your actual data.",
                  "Our mission: democratize advanced AI so businesses of every size can harness predictive intelligence and autonomous decision-making — without the technical complexity.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-3 gap-4 py-5 border-y border-secondary-100"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { value: "10+", label: "Global Clients" },
                  { value: "5+", label: "Industries Served" },
                  { value: "96.8%", label: "AI Accuracy Rate" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl md:text-2xl font-display font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-xs text-secondary-500 mt-0.5 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Innovation First",
                    desc: "Cutting-edge GenAI & ML at the core of everything we build",
                    bgColor: "bg-brand-purple/10",
                    textColor: "text-brand-purple",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    ),
                  },
                  {
                    title: "Agile Delivery",
                    desc: "From proof-of-concept to production in weeks, not months",
                    bgColor: "bg-brand-accent/10",
                    textColor: "text-brand-accent",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                  },
                  {
                    title: "Data Integrity",
                    desc: "Every insight is verifiable, traceable & auditable — zero hallucinations",
                    bgColor: "bg-emerald-50",
                    textColor: "text-emerald-600",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    ),
                  },
                  {
                    title: "Enterprise Grade",
                    desc: "Role-based security, cloud / on-prem / hybrid deployment ready",
                    bgColor: "bg-indigo-50",
                    textColor: "text-indigo-600",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    ),
                  },
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    className="group relative flex items-start gap-3 p-4 rounded-2xl glow-card-static overflow-hidden cursor-default"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    style={{ willChange: "opacity, transform" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div
                      className={`relative z-10 w-10 h-10 rounded-xl ${val.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <svg
                        className={`w-5 h-5 ${val.textColor}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {val.icon}
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-secondary-900 group-hover:text-brand-purple transition-colors duration-300">
                        {val.title}
                      </h4>
                      <p className="text-sm text-secondary-500">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
