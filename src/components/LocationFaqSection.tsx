import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Mail, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS, HOMESTAY_CONTACT } from '../data/homestayData';

export const LocationFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const distances = [
    { destination: 'Pedestrian Mall Road & Dal Lake Waterfront', distance: '0.0 km', time: 'Direct doorstep frontage' },
    { destination: 'Hotel Heaven Canal', distance: '0.0 km', time: 'Right next door landmark' },
    { destination: 'Volcanic Shankaracharya Hill Foot', distance: '2.5 km', time: '8 mins by Maxi Cab' },
    { destination: 'Nishat & Shalimar Mughal Gardens', distance: '6.0 km', time: '12 mins drive' },
    { destination: 'Pari Mahal (Palace of Fairies)', distance: '7.5 km', time: '15 mins drive' },
    { destination: 'Lal Chowk & Old Srinagar Market', distance: '4.8 km', time: '14 mins drive' },
    { destination: 'Srinagar International Airport (SXR)', distance: '18 km', time: '35 mins by Maxi Cab' },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
            Neighborhood & Practical Details
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display [text-wrap:balance]">
            Prime Lakeside Location & Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Conveniently situated at Dal Lake Srinagar on Pedestrian Mall Road near Hotel Heaven Canal, offering panoramic water views and seamless maxi cab taxi connectivity to all Kashmir destinations.
          </p>
        </div>

        {/* 2-Column Grid: Location Guide on Left, FAQs on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Location & Contact Card (5 cols) */}
          <div className="lg:col-span-5 bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-100/60 px-2.5 py-1 rounded">
                <MapPin className="w-3.5 h-3.5" />
                <span>Waterfront Address</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-stone-900">
                {HOMESTAY_CONTACT.name}
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                {HOMESTAY_CONTACT.address}
              </p>
              <div className="mt-2 text-xs text-amber-900 font-medium">
                {HOMESTAY_CONTACT.locationDetails}
              </div>
            </div>

            {/* Quick Distances Strip */}
            <div className="space-y-2 border-t border-stone-200 pt-4">
              <div className="text-xs font-semibold text-stone-800">Proximity & Travel Times:</div>
              <div className="space-y-1.5 text-xs">
                {distances.map((d, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1 border-b border-stone-100 last:border-0">
                    <span className="text-stone-700">{d.destination}</span>
                    <span className="text-stone-500 font-mono text-[11px] tabular-nums">{d.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="border-t border-stone-200 pt-4 space-y-2.5">
              <a
                href={`tel:${HOMESTAY_CONTACT.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Host Directly ({HOMESTAY_CONTACT.phone})</span>
              </a>

              <a
                href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp.replace('+', '')}?text=Hello%20Crescent%20Homestay%20Srinagar!%20I%20have%20an%20inquiry%20regarding%20room%20tariffs%20and%20maxi%20cabs.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Host on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive FAQs Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Frequently Asked Questions
            </h3>

            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-stone-900">
                      {faq.question}
                    </span>
                    <span className="text-stone-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
