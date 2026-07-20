import { HOTELS } from "@/lib/hotels";
import { RESTAURANTS } from "@/lib/restaurants";

// Schematic-but-true map of the village: every pin is projected from its
// real latitude/longitude (equirectangular over the village's bounding
// box), so relative positions match reality — Shops at the southwest
// corner, St. Regis across Collins, Sea View mid-mile, Ritz at the inlet.
const BOUNDS = {
  north: 25.9065,
  south: 25.877,
  west: -80.1315,
  east: -80.1145,
};
const W = 720;
const H = 520;

function project(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * W;
  const y = ((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * H;
  return { x, y };
}

function gmaps(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`;
}

const ACCESS_96TH = { lat: 25.8872, lng: -80.1213 };
const JETTY = { lat: 25.9035, lng: -80.12 };

export default function VillageMap() {
  const hotels = HOTELS.map((h) => ({ ...h, p: project(h.geo.lat, h.geo.lng) }));
  const dining = RESTAURANTS.map((r) => ({ ...r, p: project(r.geo.lat, r.geo.lng) }));
  const shops = project(25.8879, -80.126);
  const access = project(ACCESS_96TH.lat, ACCESS_96TH.lng);
  const jetty = project(JETTY.lat, JETTY.lng);

  return (
    <div id="map" className="relative mx-6 mb-12 flex flex-col gap-4 md:mx-11">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          The village, <em className="font-serif-italic text-gold">mapped</em>
        </h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Bal+Harbour%2C+FL"
          target="_blank"
          rel="noopener"
          className="text-[13px] font-semibold text-gold-deep no-underline hover:underline"
        >
          Open in Google Maps ↗
        </a>
      </div>

      <div className="overflow-hidden rounded-[24px] bg-white shadow-card">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Schematic map of Bal Harbour: the Shops at 96th and Collins, the St. Regis across the street, the Sea View mid-village, the Ritz-Carlton at the Haulover Inlet, and the public beach access at 96th Street"
          className="block h-auto w-full"
        >
          {/* Water: Biscayne Bay (west), Atlantic (east), Haulover Inlet (north) */}
          <rect x="0" y="0" width={W} height={H} fill="#dbe7dd" />
          {/* Land mass */}
          <path
            d={`M 235 ${H} L 258 380 L 270 240 L 292 90 L 318 34 L 560 34 L 560 60 L 540 ${H} Z`}
            fill="#efede6"
          />
          {/* Haulover Park (north of the inlet) */}
          <path d="M 310 0 L 700 0 L 700 8 L 320 8 Z" fill="#dfe9db" />
          <text x="500" y="24" fontSize="11" fill="#7d8378" fontStyle="italic" textAnchor="middle">
            Haulover Park · kite beach &amp; marina
          </text>
          {/* Inlet channel */}
          <path d="M 300 10 L 700 10 L 700 30 L 310 32 Z" fill="#cfe0d3" />
          <text x="620" y="46" fontSize="11" fill="#4c7a68" fontStyle="italic" textAnchor="end">
            Haulover Inlet
          </text>
          {/* Beach strip along the ocean */}
          <path d={`M 560 60 L 540 ${H} L 508 ${H} L 528 60 Z`} fill="#eaddba" opacity="0.85" />
          {/* Ocean */}
          <path d={`M 560 60 L 700 60 L 700 ${H} L 540 ${H} Z`} fill="#cfe0d3" />
          <text x="640" y="300" fontSize="12" fill="#4c7a68" fontStyle="italic" textAnchor="middle">
            Atlantic Ocean
          </text>
          <text x="90" y="300" fontSize="12" fill="#4c7a68" fontStyle="italic" textAnchor="middle">
            Biscayne Bay
          </text>
          {/* Collins Avenue */}
          <path
            d={`M 468 ${H} C 470 380 478 200 500 34`}
            fill="none"
            stroke="#0d2f25"
            strokeOpacity="0.18"
            strokeWidth="7"
          />
          <text x="452" y="200" fontSize="10" fill="#7d8378" transform="rotate(-84 452 200)">
            Collins Ave
          </text>
          {/* Beachwalk */}
          <path
            d={`M 524 ${H - 10} C 528 380 536 200 552 64`}
            fill="none"
            stroke="#8a6f3c"
            strokeOpacity="0.55"
            strokeWidth="2.5"
            strokeDasharray="6 5"
          />
          {/* 96th St — the Surfside border */}
          <line x1="250" y1="452" x2="540" y2="452" stroke="#0d2f25" strokeOpacity="0.14" strokeWidth="4" />
          <text x="262" y="444" fontSize="10" fill="#7d8378">
            96th St · Surfside border
          </text>
          <text x="390" y={H - 14} fontSize="11" fill="#7d8378" fontStyle="italic">
            Surfside ↓
          </text>

          {/* Dining — gold dots, drawn first so labels stay legible above */}
          {dining.map((r) => (
            <a key={r.slug} href={gmaps(r.geo.lat, r.geo.lng)} target="_blank" rel="noopener">
              <circle cx={r.p.x} cy={r.p.y} r="5.5" fill="#b5975a" stroke="#ffffff" strokeWidth="1.5" />
            </a>
          ))}

          {/* The Shops */}
          <a href={gmaps(25.8879, -80.126)} target="_blank" rel="noopener">
            <rect x={shops.x - 38} y={shops.y - 22} width="76" height="44" rx="10" fill="#b5975a" opacity="0.95" />
            <text x={shops.x} y={shops.y - 2} fontSize="10.5" fontWeight="700" fill="#0d2f25" textAnchor="middle">
              THE
            </text>
            <text x={shops.x} y={shops.y + 11} fontSize="10.5" fontWeight="700" fill="#0d2f25" textAnchor="middle">
              SHOPS
            </text>
          </a>

          {/* Beach access + Jetty Walk */}
          <a href={gmaps(ACCESS_96TH.lat, ACCESS_96TH.lng)} target="_blank" rel="noopener">
            <circle cx={access.x} cy={access.y} r="9" fill="#ffffff" stroke="#12463a" strokeWidth="2.5" />
            <text x={access.x} y={access.y + 4} fontSize="10" fontWeight="700" fill="#12463a" textAnchor="middle">
              ☂
            </text>
            <text x={access.x + 16} y={access.y + 4} fontSize="10.5" fontWeight="600" fill="#22443a">
              Public beach access · 96th St
            </text>
          </a>
          <a href={gmaps(JETTY.lat, JETTY.lng)} target="_blank" rel="noopener">
            <circle cx={jetty.x} cy={jetty.y} r="8" fill="#ffffff" stroke="#12463a" strokeWidth="2.5" />
            <text x={jetty.x} y={jetty.y + 3.5} fontSize="9" fontWeight="700" fill="#12463a" textAnchor="middle">
              ⚑
            </text>
            <text x={jetty.x - 14} y={jetty.y + 4} fontSize="10.5" fontWeight="600" fill="#22443a" textAnchor="end">
              Jetty Walk
            </text>
          </a>

          {/* Hotels — ink pins, numbered by rank */}
          {hotels.map((h, i) => (
            <a key={h.slug} href={gmaps(h.geo.lat, h.geo.lng)} target="_blank" rel="noopener">
              <circle cx={h.p.x} cy={h.p.y} r="11" fill="#0d2f25" />
              <text x={h.p.x} y={h.p.y + 4} fontSize="11" fontWeight="700" fill="#eef2ec" textAnchor="middle">
                {i + 1}
              </text>
              <text
                x={h.p.x + 17}
                y={h.p.y + 4}
                fontSize="11"
                fontWeight="700"
                fill="#0d2f25"
              >
                {h.name.replace("The ", "")}
              </text>
            </a>
          ))}

        </svg>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-ink-4">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-ink" /> Hotels (ranked)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-gold" /> Tables we love
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full border-2 border-[#12463a] bg-white" /> Beach access
        </span>
        <span className="text-muted">
          Pin positions are projected from real coordinates — tap any pin for directions.
        </span>
      </div>
    </div>
  );
}
