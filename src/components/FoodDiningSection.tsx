import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, Coffee, Clock, HeartHandshake, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { FOOD_MENU, FOOD_IMAGE, HOMESTAY_CONTACT } from '../data/homestayData';
import { FoodItem } from '../types/homestay';

interface FoodDiningSectionProps {
  onScrollToBooking: () => void;
}

export const FoodDiningSection: React.FC<FoodDiningSectionProps> = ({ onScrollToBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wazwan_nonveg' | 'vegetarian' | 'breakfast' | 'beverages'>('all');

  const filteredItems = activeCategory === 'all'
    ? FOOD_MENU
    : FOOD_MENU.filter((item) => item.category === activeCategory);

  return (
    <section id="dining" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
            Paid Food Service & Authentic Kashmiri Dining
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display [text-wrap:balance]">
            Authentic Kashmiri Food & Tea by Dal Lake
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Freshly prepared home-cooked meals: Grand Kashmiri Thali (₹999), Rogan Josh (₹400), Yakhni (₹400), Dum Aloo (₹600), Kashmiri Saffron Kahwa (₹60), Noon Chai Pink (₹60), and Hot Milk Tea (₹20).
          </p>
        </div>

        {/* Food Order Hotline Callout */}
        <div className="mt-6 p-4 bg-stone-900 text-white rounded-xl border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Food Order & Meal Service Desk
              </div>
              <p className="text-xs text-stone-300">
                Call or WhatsApp our kitchen directly at <a href={`tel:${HOMESTAY_CONTACT.phone}`} className="font-bold underline text-white">{HOMESTAY_CONTACT.phone}</a> to order hot meals and Kashmiri tea.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${HOMESTAY_CONTACT.phone}`}
              className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded text-xs font-bold transition-colors"
            >
              Call {HOMESTAY_CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp}?text=Hello!%20I%20would%20like%20to%20order%20food%20at%20Crescent%20Homestay.`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Feature Split Banner: Food Photography & Philosophy */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
          
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-stone-900 group">
            <img
              src={FOOD_IMAGE}
              alt="Traditional Kashmiri Wazwan Rogan Josh and Samovar Kahwa served beside Dal Lake"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-semibold text-amber-300">Fresh Lakeside Dining:</span> Traditional Wazwan dishes served with view of Dal Lake.
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Authentic Kashmiri Recipes</span>
            </div>

            <h3 className="text-xl font-bold text-stone-900 font-display">
              Homestyle Cooking & Kashmiri Samovar Tea
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every dish is prepared using fresh ingredients, cold-pressed mustard oil, and whole spices. Indulge in our signature Royal Kashmiri Thali (₹999), tender Rogan Josh (₹400), aromatic Yakhni (₹400), crispy Dum Aloo (₹600), or hot Kahwa (₹60).
            </p>

            {/* Service Pillars */}
            <div className="space-y-2.5 pt-2 text-xs text-stone-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Pure Home-Cooked Quality:</strong> Made in our family kitchen with local Kashmiri spices and fresh morning ingredients.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Both Halal Non-Veg & Pure Vegetarian:</strong> Traditional cookware and separate preparation for vegetarian guests (Dum Aloo, Haakh, Dal).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Meal Timings:</strong> Breakfast (7:30 AM – 10:30 AM), Lunch (12:30 PM – 3:30 PM), Dinner (7:30 PM – 10:30 PM).</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onScrollToBooking}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                Add Meal Plan to Booking
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Menu Tabs */}
        <div className="mt-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <h3 className="text-lg font-bold text-stone-900">À La Carte Dining Menu</h3>
              <p className="text-xs text-stone-500">Transparent prices with no service charge or surprise taxes</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg">
              {[
                { id: 'all', label: 'All Dishes' },
                { id: 'wazwan_nonveg', label: 'Thali & Wazwan' },
                { id: 'vegetarian', label: 'Vegetarian Specialties' },
                { id: 'breakfast', label: 'Breakfast & Breads' },
                { id: 'beverages', label: 'Kahwa & Teas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-white text-stone-900 shadow-sm font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-white p-5 rounded-xl border border-stone-200 hover:border-stone-300 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          dish.isVeg ? 'bg-emerald-600 ring-2 ring-emerald-100' : 'bg-rose-600 ring-2 ring-rose-100'
                        }`}
                        title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      />
                      <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">
                        {dish.isVeg ? 'Veg' : 'Halal Non-Veg'}
                      </span>
                    </div>

                    <div className="text-sm font-mono font-bold text-stone-900 tabular-nums">
                      {dish.price === 0 ? (
                        <span className="text-emerald-700">COMPLIMENTARY</span>
                      ) : (
                        `₹${dish.price}`
                      )}
                    </div>
                  </div>

                  <h4 className="mt-2 text-base font-bold text-stone-900">
                    {dish.name}
                  </h4>
                  {dish.kashmiriName && (
                    <div className="text-xs text-amber-800 font-medium italic">
                      ({dish.kashmiriName})
                    </div>
                  )}

                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  {dish.servingInfo}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
