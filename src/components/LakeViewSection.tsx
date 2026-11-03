import React, { useState } from 'react';
import { Mountain, Compass, Sparkles, Sun, Moon, CloudSnow, Flower2, Leaf } from 'lucide-react';
import { HERO_IMAGE, ROOM_ROYAL_SUITE } from '../data/homestayData';

export const LakeViewSection: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('summer');

  const seasons = {
    spring: {
      name: 'Spring (March - May)',
      icon: Flower2,
      tag: 'Tulip & Almond Blossoms',
      desc: 'The snow begins melting, almond and cherry blossoms burst across the shoreline, and the volcanic mountain glows under crisp alpine sunlight.',
      temp: '10°C - 20°C',
    },
    summer: {
      name: 'Summer (June - August)',
      icon: Sun,
      tag: 'Lotus Blooms & Cool Breeze',
      desc: 'Escape the plains heat into pleasant 24°C lake breezes. Dal Lake fills with blooming lotus flowers and morning shikara rides are pure bliss.',
      temp: '18°C - 28°C',
    },
    autumn: {
      name: 'Autumn (Sept - Nov)',
      icon: Leaf,
      tag: 'Golden Chinar & Crystal Skies',
      desc: 'Kashmir turns into fiery gold. The water becomes mirror-still, capturing the golden reflection of the ancient volcanic hill and crisp blue skies.',
      temp: '8°C - 20°C',
    },
    winter: {
      name: 'Winter (Dec - Feb)',
      icon: CloudSnow,
      tag: 'Snow Peaks & Cozy Bukharis',
      desc: 'A dreamscape of white snow on the surrounding peaks, misty frozen edges of Dal Lake, hot Kahwa in front of room heaters, and electric blankets.',
      temp: '-3°C - 8°C',
    },
  };

  const currentSeason = seasons[activeSeason];
  const SeasonIcon = currentSeason.icon;

  return (
    <section id="lake-view" className="py-16 sm:py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
            Natural Setting & Geography
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display [text-wrap:balance]">
            Unobstructed Whole View of Dal Lake & The Volcanic Mountain
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Perched directly on the Boulevard shoreline, Crescent Homestay offers an unbroken panoramic vista spanning the calm waters of Dal Lake and Srinagar&apos;s iconic volcanic basalt formation, Shankaracharya hill.
          </p>
        </div>

        {/* 2-Column Split: Visual Gallery on Left, Geographical Story on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-stone-300 group bg-stone-900">
              <img
                src={HERO_IMAGE}
                alt="Dal Lake full view and volcanic hill reflection from Crescent Homestay"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs text-amber-300 font-medium">180° Panoramic Vantage Point</div>
                <h3 className="text-base sm:text-lg font-bold leading-tight">
                  Waterfront Sunrise Over Dal Lake & Shankaracharya Volcanic Peak
                </h3>
              </div>
            </div>

            {/* Secondary Image & Perspective Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-900 group">
                <img
                  src={ROOM_ROYAL_SUITE}
                  alt="Royal Suite interior with royal damask walls and hand-crafted Kashmiri wooden styling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  Royal Suite Bedroom Interior
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                    <Compass className="w-4 h-4 text-amber-700" />
                    <span>Prime Waterfront Location</span>
                  </div>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    Unlike crowded interior city hotels, Crescent Homestay sits right beside the open water with zero construction blocking your skyline.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Elevation: 1,585m</span>
                  <span>Dal Lake Ghat No. 9</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Geological Story & Season Experience (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 bg-stone-100 px-2.5 py-1 rounded">
                <Mountain className="w-3.5 h-3.5 text-stone-800" />
                <span>The Volcanic Rock Phenomenon</span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 font-display">
                Ancient Volcanic Hills Overlooking The Pristine Waters
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                The majestic peak rising behind Dal Lake is Shankaracharya Hill (historic Koh-e-Sulaiman), formed from ancient basaltic volcanic eruptions of the Panjal Traps.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                From our homestay terraces and room windows, guests enjoy this rare dramatic juxtaposition: tranquil glass-like waters, colorful wooden shikaras, and dark volcanic rock ridges capped with evergreen pines and temple spires.
              </p>

              {/* Sunrise & Sunset moments */}
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs">
                  <Sun className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Golden Morning Glow:</span>
                    <span className="text-stone-600 ml-1">
                      Watch the first rays hit the volcanic summit while sipping warm Kashmiri Kahwa.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs">
                  <Moon className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Crescent Moon Reflections:</span>
                    <span className="text-stone-600 ml-1">
                      At night, the crescent moon and boulevard lights shimmer across Dal Lake.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Season Interactive Selector */}
            <div className="border-t border-stone-200 pt-5 space-y-3">
              <div className="text-xs font-semibold text-stone-800">
                Seasonal View Guide:
              </div>
              
              {/* Interactive Season Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-stone-100 rounded-lg">
                {(['spring', 'summer', 'autumn', 'winter'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setActiveSeason(s)}
                    className={`py-1.5 text-xs font-medium rounded capitalize transition-all cursor-pointer ${
                      activeSeason === s
                        ? 'bg-white text-stone-900 shadow-sm font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Active Season Detail */}
              <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                    <SeasonIcon className="w-4 h-4 text-amber-700" />
                    <span>{currentSeason.name}</span>
                  </div>
                  <span className="font-mono text-stone-500 tabular-nums">{currentSeason.temp}</span>
                </div>
                <div className="text-amber-800 font-medium text-[11px]">{currentSeason.tag}</div>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  {currentSeason.desc}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
