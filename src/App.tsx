import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyFeaturesStrip } from './components/KeyFeaturesStrip';
import { RoomsSection } from './components/RoomsSection';
import { LakeViewSection } from './components/LakeViewSection';
import { FoodDiningSection } from './components/FoodDiningSection';
import { MaxiCabSection } from './components/MaxiCabSection';
import { BookingEstimator } from './components/BookingEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationFaqSection } from './components/LocationFaqSection';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { Room } from './types/homestay';
import { MessageSquare, Phone } from 'lucide-react';
import { HOMESTAY_CONTACT } from './data/homestayData';

export default function App() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('superior-volcanic-view');
  const [inspectedRoom, setInspectedRoom] = useState<Room | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTaxi = () => {
    const el = document.getElementById('maxi-cabs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoomForBooking = (roomId: string) => {
    setSelectedRoomId(roomId);
    scrollToBooking();
  };

  return (
    <div id="top" className="min-h-screen bg-stone-50 flex flex-col selection:bg-amber-800 selection:text-white">
      {/* Top Bar Navigation */}
      <Header onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToBooking={scrollToBooking}
          onScrollToTaxi={scrollToTaxi}
        />

        {/* 2. Key Pillars Strip */}
        <KeyFeaturesStrip />

        {/* 3. Rooms & Tariffs (₹1,800 to ₹2,600) */}
        <RoomsSection
          onSelectRoomForBooking={handleSelectRoomForBooking}
          onOpenRoomModal={(room) => setInspectedRoom(room)}
        />

        {/* 4. Live Booking & Tariff Estimator */}
        <BookingEstimator
          selectedRoomId={selectedRoomId}
          onSelectRoomId={setSelectedRoomId}
        />

        {/* 5. The Lake & Volcanic Mountain View */}
        <LakeViewSection />

        {/* 6. Kashmiri Food & Dining (Paid Home-Cooked Service) */}
        <FoodDiningSection onScrollToBooking={scrollToBooking} />

        {/* 7. On-Site Maxi Cab Taxis & Sightseeing Tours */}
        <MaxiCabSection
          onSelectTaxiForBooking={scrollToBooking}
        />

        {/* 8. Verified Guest Testimonials */}
        <TestimonialsSection />

        {/* 9. Location, Proximity & FAQs */}
        <LocationFaqSection />
      </main>

      {/* Footer */}
      <Footer onScrollToBooking={scrollToBooking} />

      {/* Room Inspection Modal */}
      <RoomModal
        room={inspectedRoom}
        onClose={() => setInspectedRoom(null)}
        onSelectForBooking={handleSelectRoomForBooking}
      />

      {/* Floating Action Button: Quick Direct WhatsApp Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2 items-end">
        <a
          href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp.replace('+', '')}?text=Hello%20Crescent%20Homestay%20Srinagar!%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20maxi%20cab%20taxis.`}
          target="_blank"
          rel="noreferrer"
          aria-label="Direct WhatsApp Message"
          className="group flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-950/20 transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
            WhatsApp: 9103804493
          </span>
        </a>

        <a
          href={`tel:${HOMESTAY_CONTACT.phone}`}
          aria-label="Call Crescent Homestay"
          className="group flex items-center gap-2 px-3.5 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 rounded-full shadow-lg transition-transform hover:scale-105"
          title={`Call ${HOMESTAY_CONTACT.phone}`}
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold tracking-wider hidden sm:inline text-white">
            PH: {HOMESTAY_CONTACT.phone}
          </span>
        </a>
      </div>
    </div>
  );
}
