import { HOTELS } from "@/lib/hotels";
import { RESTAURANTS } from "@/lib/restaurants";

// Schematic-but-true map of the village and its neighbors: every pin is
// projected from its real latitude/longitude (equirectangular over the
// area's bounding box), so relative positions match reality — Shops at
// 96th & Collins, St. Regis across the street, Sea View mid-mile, Ritz at
// the inlet, Bay Harbor Islands due west across the Kane Concourse bridge.
const BOUNDS = {
  north: 25.9065,
  south: 25.877,
  west: -80.1405,
  east: -80.1145,
};
const W = 860;
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
          aria-label="Schematic map of the Bal Harbour area: the Shops at 96th and Collins, the St. Regis across the street, the Sea View mid-village, the Ritz-Carlton at Haulover Inlet, the public beach access at 96th Street, and Bay Harbor Islands across the Kane Concourse bridge to the west"
          className="block h-auto w-full"
        >
          {/* Water: Biscayne Bay (west), Atlantic (east), Haulover Inlet (north) */}
          <rect x="0" y="0" width={W} height={H} fill="#dbe7dd" />
          {/* Barrier-island land mass */}
          <path
            d={`M 479 ${H} L 497 380 L 507 240 L 524 90 L 544 34 L 731 34 L 731 60 L 715 ${H} Z`}
            fill="#efede6"
          />
          {/* Haulover Park (north of the inlet) */}
          <path d="M 537 0 L 860 0 L 860 8 L 545 8 Z" fill="#dfe9db" />
          <text x="684" y="24" fontSize="11" fill="#7d8378" fontStyle="italic" textAnchor="middle">
            Haulover Park · kite beach &amp; marina
          </text>
          {/* Inlet channel */}
          <path d="M 530 10 L 860 10 L 860 30 L 537 32 Z" fill="#cfe0d3" />
          <text x="777" y="46" fontSize="11" fill="#4c7a68" fontStyle="italic" textAnchor="end">
            Haulover Inlet
          </text>
          {/* Beach strip along the ocean */}
          <path d={`M 731 60 L 715 ${H} L 691 ${H} L 706 60 Z`} fill="#eaddba" opacity="0.85" />
          {/* Ocean */}
          <path d={`M 731 60 L 860 60 L 860 ${H} L 715 ${H} Z`} fill="#cfe0d3" />
          <text x="793" y="300" fontSize="12" fill="#4c7a68" fontStyle="italic" textAnchor="middle">
            Atlantic Ocean
          </text>
          <text x="150" y="140" fontSize="12" fill="#4c7a68" fontStyle="italic" textAnchor="middle">
            Biscayne Bay
          </text>

          {/* Bay Harbor Islands — the residential name-twin across the bay.
              Whole group links to our guide. */}
          <a href="/guides/bay-harbor-islands">
            <ellipse cx="132" cy="326" rx="58" ry="66" fill="#efede6" />
            <ellipse cx="298" cy="317" rx="52" ry="58" fill="#efede6" />
            {/* Kane Concourse — 96th St's continuation across the bay */}
            <path
              d="M 46 331 L 497 331"
              fill="none"
              stroke="#0d2f25"
              strokeOpacity="0.18"
              strokeWidth="5"
            />
            <text x="150" y="348" fontSize="9.5" fill="#7d8378">
              Kane Concourse
            </text>
            <text x="215" y="290" fontSize="12.5" fontWeight="700" fill="#0d2f25" textAnchor="middle">
              Bay Harbor Islands
            </text>
            {/* The Kane strip — verified local breakfast cluster */}
            <circle cx="283" cy="331" r="4.5" fill="#b5975a" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="300" cy="331" r="4.5" fill="#b5975a" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="316" cy="331" r="4.5" fill="#b5975a" stroke="#ffffff" strokeWidth="1.2" />
            <text x="300" y="352" fontSize="10" fontStyle="italic" fill="#8a6f3c" textAnchor="middle">
              the Kane strip →
            </text>
          </a>

          {/* Collins Avenue */}
          <path
            d={`M 660 ${H} C 661 380 668 200 685 34`}
            fill="none"
            stroke="#0d2f25"
            strokeOpacity="0.18"
            strokeWidth="7"
          />
          <text x="647" y="200" fontSize="10" fill="#7d8378" transform="rotate(-84 647 200)">
            Collins Ave
          </text>
          {/* Beachwalk */}
          <path
            d={`M 703 ${H - 10} C 706 380 712 200 725 64`}
            fill="none"
            stroke="#8a6f3c"
            strokeOpacity="0.55"
            strokeWidth="2.5"
            strokeDasharray="6 5"
          />
          {/* 96th St — the Surfside border */}
          <line x1="491" y1="452" x2="715" y2="452" stroke="#0d2f25" strokeOpacity="0.14" strokeWidth="4" />
          <text x="500" y="444" fontSize="10" fill="#7d8378">
            96th St · Surfside border
          </text>
          <text x="599" y={H - 14} fontSize="11" fill="#7d8378" fontStyle="italic">
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
          Pin positions are projected from real coordinates — tap any pin for
          directions, or the islands for their guide.
        </span>
      </div>
    </div>
  );
}
