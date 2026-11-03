import React, { useState, useId } from 'react';
import { Calendar, Users, Utensils, Car, Wifi, ShieldCheck, MessageSquare, Phone, MapPin } from 'lucide-react';
import { ROOMS, HOMESTAY_CONTACT } from '../data/homestayData';

interface BookingEstimatorProps {
  selectedRoomId: string;
  onSelectRoomId: (id: string) => void;
}

export const BookingEstimator: React.FC<BookingEstimatorProps> = ({
  selectedRoomId,
  onSelectRoomId,
}) => {
  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const roomsCountId = useId();

  // Dates: default to next weekend
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const dayAfter = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(tomorrow);
  const [checkOut, setCheckOut] = useState(dayAfter);
  const [guests, setGuests] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [mealPlan, setMealPlan] = useState<'room_only' | 'breakfast' | 'kashmiri_thali' | 'half_board' | 'full_board'>('kashmiri_thali');
  const [taxiChoice, setTaxiChoice] = useState<string>('maxi_cab_day');

  // Calculate nights
  const checkInDateObj = new Date(checkIn);
  const checkOutDateObj = new Date(checkOut);
  const diffTime = checkOutDateObj.getTime() - checkInDateObj.getTime();
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1);

  // Active room
  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Meal costs per guest per day
  const mealRates = {
    room_only: { rate: 0, label: 'Room Only (No Meals Included)' },
    breakfast: { rate: 250, label: 'Daily Kashmiri Breakfast (+₹250/person/day)' },
    kashmiri_thali: { rate: 999, label: 'Royal Kashmiri Meal Plan / Thali (+₹999/person/day)' },
    half_board: { rate: 650, label: 'Half Board: Breakfast + Kashmiri Wazwan/Veg Dinner (+₹650/person/day)' },
    full_board: { rate: 1250, label: 'Full Board: Breakfast, Lunch & Royal Thali Dinner (+₹1,250/person/day)' },
  };

  // Taxi costs
  const taxiOptions = [
    { id: 'none', label: 'No Taxi Service Needed (₹0)', price: 0 },
    { id: 'maxi_cab_day', label: 'Full-Day Maxi Cab Taxi Tour (₹3,000 / day)', price: 3000 },
    { id: 'srinagar_tour', label: 'Srinagar City & Mughal Gardens Maxi Cab (₹3,000)', price: 3000 },
    { id: 'gulmarg_tour', label: 'Full-Day Gulmarg Gondola Mountain Excursion (₹3,000)', price: 3000 },
    { id: 'pahalgam_tour', label: 'Full-Day Pahalgam & Betaab Valley Excursion (₹3,000)', price: 3000 },
    { id: 'sonamarg_tour', label: 'Full-Day Sonamarg & Glacier Excursion (₹3,000)', price: 3000 },
    { id: 'airport_roundtrip', label: 'Srinagar Airport Pick-up & Drop-off (₹1,600)', price: 1600 },
  ];

  const currentTaxi = taxiOptions.find((t) => t.id === taxiChoice) || taxiOptions[0];

  // Math Calculations
  const roomCost = currentRoom.pricePerNight * nights * roomsCount;
  const foodCost = mealRates[mealPlan].rate * guests * nights;
  const taxiCost = currentTaxi.price;
  const totalAmount = roomCost + foodCost + taxiCost;

  const handleWhatsAppBooking = () => {
    const textMessage = `Hello Crescent Homestay Srinagar! 👋%0A` +
      `I would like to inquire/book a stay:%0A%0A` +
      `🏨 *Room:* ${currentRoom.name} (₹${currentRoom.pricePerNight}/night)%0A` +
      `📅 *Dates:* ${checkIn} to ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})%0A` +
      `👥 *Guests:* ${guests} (${roomsCount} Room${roomsCount > 1 ? 's' : ''})%0A` +
      `🍲 *Meal Plan:* ${mealRates[mealPlan].label}%0A` +
      `🚕 *Maxi Cab Service:* ${currentTaxi.label} (₹${currentTaxi.price})%0A` +
      `📶 *Wi-Fi:* Complimentary Free 100 Mbps%0A` +
      `💰 *Total Estimated Tariff:* ₹${totalAmount.toLocaleString('en-IN')}%0A%0A` +
      `📍 *Homestay Address:* Dal Lake Srinagar, Pedestrian Mall Road, near Hotel Heaven Canal%0A` +
      `📞 *Homestay Ph:* 9103804493%0A%0A` +
      `Please confirm suite availability. Thank you!`;

    window.open(`https://wa.me/${HOMESTAY_CONTACT.whatsapp.replace('+', '')}?text=${textMessage}`, '_blank');
  };

  return (
    <section id="booking-estimator" className="py-16 sm:py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Transparent Pricing Calculator
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Instant Booking & Tariff Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Configure your stay, select room tiers from ₹1,800 to ₹2,600, add our authentic Kashmiri Meal Plan for ₹999/person, and book dedicated on-site Maxi Cab taxis for ₹3,000/day with complete price transparency.
          </p>
        </div>

        {/* Notice Before Contacting or Booking Suite */}
        <div className="mt-8 p-4 bg-stone-950 border border-amber-500/50 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wide">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Direct Phone Contact Before Contacting or Booking The Suite:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              <span>Host Phone:</span>
              <a href={`tel:${HOMESTAY_CONTACT.phone}`} className="font-mono text-base font-bold text-white hover:text-amber-300 underline tracking-wider">
                {HOMESTAY_CONTACT.phone}
              </a>
              <span className="text-stone-600">·</span>
              <span className="flex items-center gap-1 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Dal Lake Srinagar, Pedestrian Mall Road, near Hotel Heaven Canal
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${HOMESTAY_CONTACT.phone}`}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-md text-xs font-bold transition-all shadow"
            >
              Call {HOMESTAY_CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp}?text=Hello!%20I%20am%20calling%20regarding%20booking%20at%20Crescent%20Homestay.`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-bold transition-all flex items-center gap-1.5 shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 2-Column Grid: Configurator on Left, Itemized Bill & Form on Right */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selectors (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-stone-950/80 p-6 sm:p-8 rounded-xl border border-stone-800">
            
            {/* 1. Room Selection */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                1. Select Room Tier (₹1,800 - ₹2,600)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ROOMS.map((room) => {
                  const isSelected = room.id === currentRoom.id;
                  return (
                    <button
                      type="button"
                      key={room.id}
                      onClick={() => onSelectRoomId(room.id)}
                      className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-950/40 border-amber-400 ring-1 ring-amber-400 text-white'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden mb-2 bg-stone-800">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <span className="absolute top-1 left-1 bg-stone-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold font-mono px-1.5 py-0.5 rounded">
                          ₹{room.pricePerNight}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">
                          {room.name}
                        </div>
                        <div className="mt-1 text-[10px] text-stone-400 line-clamp-1">
                          {room.viewDescription}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={checkInId} className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Check-in Date
                </label>
                <input
                  id={checkInId}
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div>
                <label htmlFor={checkOutId} className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Check-out Date
                </label>
                <input
                  id={checkOutId}
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div>
                <label htmlFor={guestsId} className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  Guests Count
                </label>
                <select
                  id={guestsId}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-stone-900 border border-stone-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={6}>5-6 Guests (Family)</option>
                </select>
              </div>

              <div>
                <label htmlFor={roomsCountId} className="block text-xs font-medium text-stone-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  Rooms Count
                </label>
                <select
                  id={roomsCountId}
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full bg-stone-900 border border-stone-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value={1}>1 Room</option>
                  <option value={2}>2 Rooms</option>
                  <option value={3}>3 Rooms (Full Floor)</option>
                </select>
              </div>
            </div>

            {/* 3. Kashmiri Meal Plan (Paid Service) */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span>3. Home-Cooked Kashmiri Meal Plan (Paid Service)</span>
              </label>
              <div className="space-y-2">
                {[
                  { id: 'kashmiri_thali', title: 'Royal Kashmiri Meal Plan (₹999 Special)', desc: 'Full royal Wazwan feast: Rogan Josh, Yakhni, Dum Aloo, Haakh, saffron rice, walnut chutney & fresh bread', price: '₹999/day/guest' },
                  { id: 'breakfast', title: 'Kashmiri Morning Breakfast', desc: 'Fresh bakerkhani/girda bread, eggs/paratha, butter & hot Kahwa/tea', price: '+₹250/day/guest' },
                  { id: 'half_board', title: 'Half Board (Breakfast + Kashmiri Wazwan Dinner)', desc: 'Includes morning breakfast plus choice of Rogan Josh / Yakhni / Dum Aloo dinner', price: '+₹650/day/guest' },
                  { id: 'full_board', title: 'Full Board (All 3 Meals with Grand Thali Dinner)', desc: 'Daily breakfast, afternoon lunch thali, and grand Kashmiri dinner feast', price: '+₹1,250/day/guest' },
                  { id: 'room_only', title: 'Room Only (No Meal Plan)', desc: 'Complimentary tea kettle in room + order food à la carte as needed', price: '₹0' },
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      mealPlan === item.id
                        ? 'bg-stone-900 border-amber-400 text-white'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="mealPlan"
                      value={item.id}
                      checked={mealPlan === item.id}
                      onChange={() => setMealPlan(item.id as any)}
                      className="mt-1 text-amber-400 focus:ring-amber-400"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">{item.title}</span>
                        <span className="text-xs font-mono font-semibold text-amber-400">{item.price}</span>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-0.5">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Maxi Cab Taxi Service */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>4. Maxi Cab Taxi & Sightseeing Service</span>
              </label>
              <select
                value={taxiChoice}
                onChange={(e) => setTaxiChoice(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {taxiOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label} — {opt.price > 0 ? `₹${opt.price.toLocaleString('en-IN')}` : 'Included ₹0'}
                  </option>
                ))}
              </select>
              <div className="mt-2 text-xs text-stone-400 flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Complimentary 100 Mbps Free Wi-Fi is automatically included with every booking.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Itemized Bill & Guest Booking Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bill Summary Card */}
            <div className="bg-stone-950 p-6 rounded-xl border border-stone-800 space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-tight flex items-center justify-between">
                <span>Estimated Tariff Summary</span>
                <span className="text-xs text-amber-400 font-mono tabular-nums">{nights} Night{nights > 1 ? 's' : ''}</span>
              </h3>

              {/* Selected Room Visual Banner */}
              <div className="flex items-center gap-3 p-2 bg-stone-900 rounded-lg border border-stone-800">
                <img
                  src={currentRoom.image}
                  alt={currentRoom.name}
                  className="w-16 h-12 object-cover rounded shrink-0 border border-stone-700"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-white truncate">{currentRoom.name}</div>
                  <div className="text-[11px] text-amber-400 font-mono">₹{currentRoom.pricePerNight} / night</div>
                  <div className="text-[10px] text-stone-400 truncate">Attached Modern Bath · 24/7 Hot Geyser</div>
                </div>
                {currentRoom.bathroomImage && (
                  <img
                    src={currentRoom.bathroomImage}
                    alt="Attached bathroom with geyser"
                    title="Attached bathroom with geyser"
                    className="w-10 h-12 object-cover rounded shrink-0 border border-stone-700 opacity-90 hidden sm:block"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              <div className="space-y-2.5 text-xs text-stone-300 border-b border-stone-800 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">{currentRoom.name} ({nights}n × {roomsCount}r)</span>
                  <span className="font-mono tabular-nums text-white">₹{roomCost.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Meal Plan ({guests} guests × {nights}n)</span>
                  <span className="font-mono tabular-nums text-white">
                    {foodCost > 0 ? `₹${foodCost.toLocaleString('en-IN')}` : '₹0 (Pay as you order)'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Maxi Cab Taxi Add-on</span>
                  <span className="font-mono tabular-nums text-white">
                    {taxiCost > 0 ? `₹${taxiCost.toLocaleString('en-IN')}` : '₹0 (Not required)'}
                  </span>
                </div>

                <div className="flex justify-between items-center text-emerald-400">
                  <span>High-Speed Optical Wi-Fi</span>
                  <span className="font-mono font-medium">FREE (₹0)</span>
                </div>

                <div className="flex justify-between items-center text-amber-300">
                  <span>Welcome Kashmiri Saffron Kahwa</span>
                  <span className="font-mono font-medium">FREE (₹0)</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-1 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-stone-400">Total Estimated Payable</div>
                  <div className="text-[11px] text-stone-500">Pay at check-in / Zero cancellation fees</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-amber-400">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-stone-400">All Taxes Included</div>
                </div>
              </div>

              {/* Direct Booking Actions & Host Contact */}
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <a
                  href={`tel:${HOMESTAY_CONTACT.phone}`}
                  className="w-full py-3 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all rounded shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Book: {HOMESTAY_CONTACT.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800 transition-colors rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Book via WhatsApp ({HOMESTAY_CONTACT.phone})</span>
                </button>
              </div>

              {/* Host Address & Guarantee */}
              <div className="pt-3 border-t border-stone-800 space-y-2 text-xs text-stone-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    {HOMESTAY_CONTACT.address}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Zero advance deposit needed. Pay at Crescent Homestay.</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
