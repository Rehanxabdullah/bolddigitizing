import { motion } from 'framer-motion';

export function NeedleAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stitchPattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <path
                d="M0 30h60M30 0v60"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4 8"
              />
              <path
                d="M0 0l60 60M60 0L0 60"
                stroke="currentColor"
                strokeWidth="0.3"
                strokeDasharray="2 12"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stitchPattern)" className="text-foreground" />
        </svg>
      </div>

      {/* Animated stitch lines */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[500px]"
        viewBox="0 0 800 500"
        fill="none"
      >
        {/* First stitch line */}
        <motion.path
          d="M100 250 Q200 200 300 250 T500 250 T700 250"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />

        {/* Second stitch line */}
        <motion.path
          d="M150 300 Q250 350 350 300 T550 300 T750 300"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8 16"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            delay: 0.5,
          }}
        />

        {/* Needle */}
        <motion.g
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [0, 600, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <line
            x1="100"
            y1="240"
            x2="140"
            y2="260"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="100" cy="240" r="3" fill="hsl(var(--primary))" />
        </motion.g>
      </svg>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary/30"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-3 h-3 rounded-full bg-primary/20"
        animate={{
          y: [10, -10, 10],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
