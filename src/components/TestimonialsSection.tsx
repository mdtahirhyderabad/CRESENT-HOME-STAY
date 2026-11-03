import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/homestayData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
            Guest Experiences & Verified Stays
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display [text-wrap:balance]">
            Trusted by Travelers Across the World
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Real feedback from guests who experienced the unbroken Dal Lake views, our home-cooked Kashmiri food service, and seamless Maxi Cab tours.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Rating & Room Stayed (Zero-Pill Discipline) */}
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-medium text-stone-700">{rev.roomStayed}</span>
                </div>

                <div className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-amber-700 shrink-0 inline" />
                  <span>&quot;{rev.highlight}&quot;</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Guest Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5">
                    <span>{rev.guestName}</span>
                    <span title="Verified Guest" className="inline-flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </div>
                  <div className="text-stone-500">{rev.city}</div>
                </div>
                <div className="text-stone-400 font-mono text-[11px]">{rev.date}</div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
