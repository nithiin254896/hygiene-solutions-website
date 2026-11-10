export function HeroBackground() {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full h-70 pointer-events-none">

      {/* MAIN WHITE CURVE */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="
            M0,110
            C160,150 320,180 480,170
            C640,160 800,110 960,110
            C1120,110 1280,150 1440,140
            L1440,220
            L0,220
            Z
          "
        />
      </svg>

      {/* SECOND CURVE (LIGHT TEAL – BELOW MAIN) */}
      <svg
        className="absolute bottom-6 w-full h-55 opacity-70"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#e6f7f5"
          d="
            M0,120
            C180,155 360,185 520,175
            C680,165 820,125 980,120
            C1140,115 1300,145 1440,150
            L1440,220
            L0,220
            Z
          "
        />
      </svg>

      {/* THIRD CURVE (VERY SOFT – FARTHEST BACK) */}
      <svg
        className="absolute bottom-12 w-full h-55 opacity-60"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#f1fbfa"
          d="
            M0,130
            C200,165 400,195 580,185
            C760,175 900,140 1080,135
            C1260,130 1380,150 1440,155
            L1440,220
            L0,220
            Z
          "
        />
      </svg>

      <svg
        className="absolute bottom-6 w-full h-55 opacity-70"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#e6f7f5"
          d="
            M0,120
            C180,155 360,185 520,175
            C680,165 820,125 980,120
            C1140,115 1300,145 1440,150
            L1440,220
            L0,220
            Z
          "
        />
      </svg>

      {/* THIRD CURVE (VERY SOFT – FARTHEST BACK) */}
      <svg
        className="absolute bottom-12 w-full h-55 opacity-60"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#f1fbfa"
          d="
            M0,130
            C200,165 400,195 580,185
            C760,175 900,140 1080,135
            C1260,130 1380,150 1440,155
            L1440,220
            L0,220
            Z
          "
        />
      </svg>

      {/* SOFT BLUE GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-t from-teal-50" />

      {/* FLOW LINES */}
      <svg
        className="absolute bottom-12 left-0 w-full opacity-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,80
            C200,60 400,100 600,90
            C800,80 1000,60 1200,70
            C1320,75 1380,80 1440,85
          "
          fill="none"
          stroke="#9dd9d2"
          strokeWidth="3"
        />

        <path
          d="
            M0,95
            C200,75 400,115 600,105
            C800,95 1000,75 1200,85
            C1320,90 1380,95 1440,100
          "
          fill="none"
          stroke="#c7ede9"
          strokeWidth="3"
        />
      </svg>

      <svg
        className="absolute bottom-12 left-0 w-full opacity-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,80
            C200,60 400,100 600,90
            C800,80 1000,60 1200,70
            C1320,75 1380,80 1440,85
          "
          fill="none"
          stroke="#9dd9d2"
          strokeWidth="3"
        />

        <path
          d="
            M0,95
            C200,75 400,115 600,105
            C800,95 1000,75 1200,85
            C1320,90 1380,95 1440,100
          "
          fill="none"
          stroke="#c7ede9"
          strokeWidth="3"
        />
      </svg>
    
    </div>
  )
}
