import React, { useState } from 'react';
import { Car, ShieldCheck, MapPin, Clock, Calendar, Check, MessageSquare, PhoneCall, ArrowUpRight } from 'lucide-react';
import { TAXI_FLEET, TAXI_IMAGE, HOMESTAY_CONTACT } from '../data/homestayData';
import { TaxiRoute } from '../types/homestay';

interface MaxiCabSectionProps {
  onSelectTaxiForBooking: (taxiTitle: string) => void;
}

export const MaxiCabSection: React.FC<MaxiCabSectionProps> = ({ onSelectTaxiForBooking }) => {
  const [selectedRoute, setSelectedRoute] = useState<TaxiRoute | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [cabTravelerName, setCabTravelerName] = useState('');
  const [cabTravelerPhone, setCabTravelerPhone] = useState('');
  const [cabTravelDate, setCabTravelDate] = useState('');
  const [cabInquirySuccess, setCabInquirySuccess] = useState(false);

  const handleOpenCabInquiry = (route: TaxiRoute) => {
    setSelectedRoute(route);
    setCabInquirySuccess(false);
    setInquiryModalOpen(true);
  };

  const handleCabInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cabTravelerName || !cabTravelerPhone) return;
    setCabInquirySuccess(true);
  };

  const handleWhatsAppCabInquiry = (route: TaxiRoute) => {
    const msg = `Hello Crescent Homestay! 🚕%0A` +
      `I would like to book / inquire about a Maxi Cab taxi:%0A` +
      `📍 *Route:* ${route.destination}%0A` +
      `🛣️ *Distance:* ${route.distanceKm}%0A` +
      `⏱️ *Duration:* ${route.duration}%0A` +
      `💰 *Tariff:* ₹${route.maxiCabPrice} (Maxi Cab) / ₹${route.innovaPrice} (Innova)%0A` +
      `Please let me know vehicle availability and driver details. Thank you!`;

    window.open(`https://wa.me/${HOMESTAY_CONTACT.whatsapp.replace('+', '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="maxi-cabs" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5" />
            <span>Private Sightseeing & Airport Logistics · Fixed ₹3,000 / Day</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            On-Site Maxi Cab Taxis & Mountain Tours (₹3,000 / Day)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Never haggle with street vendors or worry about mountain transport. Crescent Homestay offers dedicated full-day Maxi Cabs parked right at our lakeside doorstep for a transparent flat rate of ₹3,000 per tour, driven by trusted local chauffeurs.
          </p>
        </div>

        {/* Hero Visual & Fleet Spec Band */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-950 rounded-2xl p-6 sm:p-8 border border-stone-800">
          
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-stone-900 group">
            <img
              src={TAXI_IMAGE}
              alt="Comfortable tourist Maxi Cab taxi by Dal Lake Srinagar"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-semibold text-amber-300">Stationed On-Site:</span> Dedicated tourist taxis with roof carriers & mountain permits.
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-950/50 px-2.5 py-1 rounded border border-amber-800">
              <Car className="w-3.5 h-3.5" />
              <span>Available 24/7 For Homestay Guests</span>
            </div>

            <h3 className="text-xl font-bold text-white font-display">
              Why Travel With Crescent Homestay Maxi Cabs?
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Licensed Mountain Chauffeurs:</strong> Native Kashmiri drivers with decades of snow and high-altitude mountain experience.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Heated Vehicles & Luggage Carrier:</strong> Equipped with dual heaters, ample rooftop luggage carriers, and snow tire chains for Gulmarg.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Doorstep Lakefront Dispatch:</strong> Start your morning tour right from Crescent Homestay gate without navigating traffic.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Transparent Fixed Rates:</strong> Clear, regulated rates with fuel, driver allowance, and toll taxes included.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${HOMESTAY_CONTACT.phone.replace(/\s+/g, '')}`}
                className="px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Taxi Desk: {HOMESTAY_CONTACT.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Popular Excursions Grid */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Popular Destinations & Tariff Schedule</h3>
            <span className="text-xs text-stone-400">Fixed fares · Roundtrip tours include all-day driver service</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TAXI_FLEET.map((route) => (
              <div
                key={route.id}
                className="bg-stone-950 p-5 rounded-xl border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-2.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {route.distanceKm}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {route.duration}
                    </span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-white">
                    {route.destination}
                  </h4>

                  <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                    {route.description}
                  </p>

                  <div className="mt-3 space-y-1">
                    <div className="text-[11px] font-semibold text-stone-300">Key Stops:</div>
                    {route.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-stone-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-800 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] text-stone-500 uppercase">Maxi Cab / Innova</div>
                      <div className="text-lg font-bold font-mono text-amber-400 tabular-nums">
                        ₹{route.maxiCabPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-stone-500 uppercase">Standard Sedan</div>
                      <div className="text-xs font-mono text-stone-300 tabular-nums">
                        ₹{route.innovaPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenCabInquiry(route)}
                      className="py-2 text-[11px] font-semibold text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Cab</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppCabInquiry(route)}
                      className="py-2 text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800 rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald-400" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Quick Cab Inquiry Modal */}
      {inquiryModalOpen && selectedRoute && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 text-white max-w-md w-full rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-bold font-display text-white">Book Maxi Cab Taxi</h4>
                <p className="text-xs text-amber-400">{selectedRoute.destination}</p>
              </div>
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="text-stone-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>

            {cabInquirySuccess ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-white text-sm">Taxi Request Sent!</h5>
                <p className="text-xs text-stone-300">
                  Our taxi coordinator will call you at <span className="text-white font-medium">{cabTravelerPhone}</span> within 15 minutes to confirm vehicle assignment and driver details.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="w-full py-2 bg-stone-800 text-xs font-semibold rounded"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleCabInquirySubmit} className="space-y-3 text-xs">
                <div className="bg-stone-950 p-3 rounded border border-stone-800 text-stone-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Fare (Maxi Cab):</span>
                    <span className="font-mono font-bold text-amber-400">₹{selectedRoute.maxiCabPrice}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Duration:</span>
                    <span>{selectedRoute.duration}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Guest Name"
                    value={cabTravelerName}
                    onChange={(e) => setCabTravelerName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={cabTravelerPhone}
                    onChange={(e) => setCabTravelerPhone(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 mb-1">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={cabTravelDate}
                    onChange={(e) => setCabTravelDate(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded transition-colors"
                  >
                    Confirm Taxi Request
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppCabInquiry(selectedRoute)}
                    className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded transition-colors flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
