export default function BakingBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ 
        zIndex: 0,
        minHeight: '300vh',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <pattern id="baking-pattern" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#A0332A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">

              {/* CUPCAKE — top-left */}
              {/* wrapper */}
              <path d="M44 110 Q46 134 52 136 L88 136 Q94 134 96 110 Z" />
              {/* wrapper lines */}
              <line x1="56" y1="111" x2="54" y2="135" />
              <line x1="70" y1="110" x2="70" y2="136" />
              <line x1="84" y1="111" x2="86" y2="135" />
              {/* frosting dome */}
              <path d="M44 110 Q52 92 70 88 Q88 92 96 110" />
              {/* cherry on top */}
              <circle cx="70" cy="82" r="6" />
              <line x1="70" y1="76" x2="72" y2="66" />

              {/* ROUND BIRTHDAY CAKE — top-right */}
              {/* bottom tier */}
              <ellipse cx="430" cy="118" rx="44" ry="10" />
              <rect x="386" y="84" width="88" height="34" />
              <ellipse cx="430" cy="84" rx="44" ry="10" />
              {/* frosting drips */}
              <path d="M400 84 Q404 78 408 84" />
              <path d="M416 84 Q420 76 424 84" />
              <path d="M436 84 Q440 78 444 84" />
              {/* candle */}
              <line x1="430" y1="74" x2="430" y2="58" />
              <path d="M427 58 Q430 50 433 58" />

              {/* DONUT — bottom-left */}
              <ellipse cx="72" cy="432" rx="40" ry="30" />
              <ellipse cx="72" cy="432" rx="16" ry="12" />
              {/* icing drip on top */}
              <path d="M40 424 Q56 408 72 414 Q88 408 104 424" />
              {/* sprinkles */}
              <line x1="52" y1="412" x2="56" y2="407" />
              <line x1="68" y1="408" x2="72" y2="403" />
              <line x1="86" y1="413" x2="90" y2="408" />
              <line x1="98" y1="424" x2="103" y2="420" />
              <line x1="44" y1="432" x2="48" y2="427" />

              {/* CHOCOLATE CHIP COOKIE — top-center */}
              <circle cx="250" cy="68" r="36" />
              {/* chips */}
              <circle cx="234" cy="54" r="5.5" />
              <circle cx="258" cy="50" r="4.5" />
              <circle cx="270" cy="66" r="5.5" />
              <circle cx="263" cy="82" r="4.5" />
              <circle cx="238" cy="80" r="5" />
              <circle cx="247" cy="62" r="4" />
              {/* edge crack */}
              <path d="M218 66 Q222 52 235 48" />

              {/* CUPCAKE — bottom-right */}
              <path d="M386 452 Q388 476 394 478 L426 478 Q432 476 434 452 Z" />
              <line x1="398" y1="453" x2="396" y2="477" />
              <line x1="410" y1="452" x2="410" y2="478" />
              <line x1="422" y1="453" x2="424" y2="477" />
              <path d="M386 452 Q410 434 434 452" />
              <path d="M394 452 Q400 442 410 440 Q420 442 426 452" />
              <circle cx="410" cy="430" r="6" />
              <line x1="410" y1="424" x2="410" y2="414" />

              {/* ROLLING PIN — center-left */}
              <rect x="44" y="244" width="74" height="14" rx="7" />
              <ellipse cx="44" cy="251" rx="7" ry="16" />
              <ellipse cx="118" cy="251" rx="7" ry="16" />
              <line x1="26" y1="238" x2="44" y2="251" />
              <line x1="26" y1="264" x2="44" y2="251" />
              <line x1="136" y1="238" x2="118" y2="251" />
              <line x1="136" y1="264" x2="118" y2="251" />

              {/* PASTRY / PIPING BAG — center-right */}
              <path d="M396 216 L444 264 Q448 274 438 275 Q428 276 426 266 L378 218 Z" />
              <path d="M426 266 L420 282" />
              <path d="M420 282 Q416 290 422 292 Q428 290 426 282" />
              <ellipse cx="387" cy="217" rx="16" ry="7" transform="rotate(45 387 217)" />

              {/* BAKING OVEN — center-bottom */}
              {/* oven body */}
              <rect x="224" y="350" width="52" height="50" rx="2" />
              {/* oven door */}
              <rect x="230" y="360" width="40" height="35" rx="1" fill="none" />
              {/* oven window */}
              <rect x="234" y="364" width="32" height="27" rx="1" />
              {/* oven handle */}
              <line x1="278" y1="375" x2="294" y2="375" />
              <circle cx="294" cy="375" r="3" />

            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#baking-pattern)" />
      </svg>
    </div>
  )
}
