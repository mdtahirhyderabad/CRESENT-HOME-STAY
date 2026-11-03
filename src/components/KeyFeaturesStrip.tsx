import React from 'react';
import { Wifi, Mountain, Utensils, Car, Sparkles, ShieldCheck } from 'lucide-react';

export const KeyFeaturesStrip: React.FC = () => {
  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Card 1: View */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900 tracking-tight">Whole View of Lake & Hill</h2>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Direct waterfront frontage looking across Dal Lake and the ancient volcanic Shankaracharya hill peak.
              </p>
              <div className="mt-2 text-xs text-stone-700 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>180° Lakefront Balconies</span>
              </div>
            </div>
          </div>

          {/* Card 2: Tariffs */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <span className="font-mono font-bold text-sm">₹</span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900 tracking-tight">Transparent Tariffs</h2>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Honest pricing starting from ₹1,800 up to ₹2,600 per night with zero hidden charges.
              </p>
              <div className="mt-2 text-xs text-stone-700 font-medium">
                <span className="font-mono tabular-nums font-semibold text-emerald-700">₹1,800 – ₹2,600</span> / night
              </div>
            </div>
          </div>

          {/* Card 3: Free Wi-Fi & Meal Plan */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900 tracking-tight">Free Wi-Fi & Meal Plan</h2>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Free 100 Mbps optical Wi-Fi + signature Royal Kashmiri Wazwan Meal Plan at ₹999/person.
              </p>
              <div className="mt-2 text-xs text-stone-700 font-medium flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold text-stone-900">Meal Plan ₹999</span>
                <span className="text-stone-400">· Free Wi-Fi</span>
              </div>
            </div>
          </div>

          {/* Card 4: Maxi Cab Fleet */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-stone-900 tracking-tight">On-Site Maxi Cab Taxis</h2>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Private Maxi Cabs & tourist fleet stationed on-site for day tours & mountain excursions at ₹3,000.
              </p>
              <div className="mt-2 text-xs text-stone-700 font-medium flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-amber-700" />
                <span className="font-semibold text-stone-900">Cab Price ₹3,000 / Day</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
