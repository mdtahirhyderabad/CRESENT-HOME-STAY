import React from 'react';
import { Phone, Mail, MapPin, Heart, Wifi, Car, Utensils } from 'lucide-react';
import { HOMESTAY_CONTACT } from '../data/homestayData';

interface FooterProps {
  onScrollToBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToBooking }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Wordmark & Essence */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-300 text-xs font-serif-title font-semibold">
                🌙
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {HOMESTAY_CONTACT.name}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Lakeside homestay beside Dal Lake, Srinagar. Whole panoramic views of the water and ancient volcanic Shankaracharya hill, with free Wi-Fi, home-cooked Kashmiri food, and on-site Maxi Cab taxis.
            </p>
            <div className="text-xs text-amber-400 font-medium">
              Tariffs from ₹1,800 to ₹2,600 / night
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-amber-300 transition-colors">
                  Rooms & Tariffs (₹1,800 - ₹2,600)
                </a>
              </li>
              <li>
                <a href="#lake-view" className="hover:text-amber-300 transition-colors">
                  Dal Lake & Volcanic Mountain View
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-300 transition-colors">
                  Kashmiri Food & Kahwa Service
                </a>
              </li>
              <li>
                <a href="#maxi-cabs" className="hover:text-amber-300 transition-colors">
                  Maxi Cab Taxis & Excursions
                </a>
              </li>
              <li>
                <button
                  onClick={onScrollToBooking}
                  className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Instant Tariff Estimator & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Features */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Homestay Amenities
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-amber-400" />
                <span>Complimentary 100 Mbps Wi-Fi</span>
              </li>
              <li className="flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span>Home-Cooked Rogan Josh & Veg Thalis</span>
              </li>
              <li className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>On-Site Maxi Cab Fleet & Drivers</span>
              </li>
              <li>
                <span>24/7 Geyser Hot Water & Bed Warmers</span>
              </li>
              <li>
                <span>Shikara Ghat No. 9 Directly Opposite</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Address */}
          <div className="space-y-3 text-xs">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact & Location
            </div>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOMESTAY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOMESTAY_CONTACT.phone}`} className="hover:text-white font-mono font-bold tracking-wider">
                  PH NO: {HOMESTAY_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOMESTAY_CONTACT.email}`} className="hover:text-white truncate">
                  {HOMESTAY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {HOMESTAY_CONTACT.name}, Srinagar. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with Kashmiri hospitality beside Dal Lake</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
