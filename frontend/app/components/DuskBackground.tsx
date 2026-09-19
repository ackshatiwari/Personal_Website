type Star = {
  x: number;
  y: number;
  r: number;
  o: number;
  color: string;
  twinkle: boolean;
  duration: number;
  delay: number;
};

const SEED = 20260918;
const COUNT = 620;

// Seeded PRNG so the field is byte-identical on the server and the client —
// without it React would see a hydration mismatch on every load.
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const smoothstep = (t: number) => t * t * (3 - 2 * t);

// Mostly white, a few cool, a few warm.
function tint(r: number) {
  if (r > 0.9) return "#ffe6c4";
  if (r > 0.74) return "#c9dcff";
  return "#ffffff";
}

function buildStars(): Star[] {
  const rand = mulberry32(SEED);
  const stars: Star[] = [];

  for (let i = 0; i < COUNT; i++) {
    const x = rand() * 100;

    // y is % from the top. A uniform draw raised to a power > 1 pushes the mass
    // toward 0 — dense at the zenith, thinning out on the way down.
    const y = Math.pow(rand(), 2.0) * 100;

    // Stars dissolve before they reach the horizon glow, so the field has no
    // hard edge where it stops.
    const fade = smoothstep(clamp((88 - y) / 30, 0, 1));
    if (fade < 0.03) continue;

    const roll = rand();
    const r = roll > 0.975 ? 1.7 : roll > 0.87 ? 1.15 : 0.5 + rand() * 0.45;

    stars.push({
      x,
      y,
      r,
      o: (0.3 + rand() * 0.7) * fade,
      color: tint(rand()),
      twinkle: rand() > 0.66,
      duration: 3 + rand() * 3.5,
      delay: rand() * 6,
    });
  }

  return stars;
}

export default function DuskBackground() {
  const stars = buildStars();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="dusk-sky absolute inset-0" />

      <svg className="absolute inset-0 h-full w-full" width="100%" height="100%">
        {stars.map((s, i) => {
          const cx = `${s.x.toFixed(3)}%`;
          const cy = `${s.y.toFixed(3)}%`;

          return (
            <g key={i}>
              {/* bloom halo behind the largest stars */}
              {s.r > 1.1 && (
                <circle
                  cx={cx}
                  cy={cy}
                  r={+(s.r * 4.5).toFixed(2)}
                  fill={s.color}
                  opacity={+(s.o * 0.1).toFixed(3)}
                />
              )}
              <circle
                cx={cx}
                cy={cy}
                r={+s.r.toFixed(2)}
                fill={s.color}
                opacity={+s.o.toFixed(3)}
                className={s.twinkle ? "dusk-twinkle" : undefined}
                style={
                  s.twinkle
                    ? ({
                        "--o": s.o.toFixed(3),
                        "--d": `${s.duration.toFixed(2)}s`,
                        "--delay": `${s.delay.toFixed(2)}s`,
                      } as React.CSSProperties)
                    : undefined
                }
              />
            </g>
          );
        })}
      </svg>

      <div className="dusk-noise absolute inset-0" />
    </div>
  );
}
