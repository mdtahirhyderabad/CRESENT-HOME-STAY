import React, { useState } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { HOMESTAY_CONTACT } from '../data/homestayData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-full bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-300 text-sm font-serif-title font-semibold shadow-inner">
            🌙
          </span>
          <span>{HOMESTAY_CONTACT.name}</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#rooms" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Rooms & Tariffs
          </a>
          <a href="#lake-view" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Lake & Mountain View
          </a>
          <a href="#dining" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Kashmiri Food
          </a>
          <a href="#maxi-cabs" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Maxi Cab Taxis
          </a>
          <a href="#location" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Location & FAQs
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a 
            href={`tel:${HOMESTAY_CONTACT.phone}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-stone-800/80 border border-stone-700 text-xs font-mono font-bold text-amber-300 hover:text-white hover:border-amber-400 transition-colors whitespace-nowrap shrink-0"
            title="Call Crescent Homestay"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>PH: {HOMESTAY_CONTACT.phone}</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-md shadow-md whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Book Stay (₹1,800 - ₹2,600)</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 rounded-md whitespace-nowrap"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-stone-300">
            <a 
              href="#rooms" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Rooms & Tariffs (₹1,800 - ₹2,600)
            </a>
            <a 
              href="#lake-view" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Dal Lake & Volcanic Mountain View
            </a>
            <a 
              href="#dining" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Kashmiri Dining & Kahwa
            </a>
            <a 
              href="#maxi-cabs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Maxi Cab Taxis & Sightseeing
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Location, Contact & FAQs
            </a>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <a 
              href={`tel:${HOMESTAY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm text-stone-300"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{HOMESTAY_CONTACT.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-stone-950 bg-amber-400 rounded-md shadow"
            >
              Book Your Lakeside Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
