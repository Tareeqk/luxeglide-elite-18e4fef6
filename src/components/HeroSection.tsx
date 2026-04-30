import { Phone, MessageCircle, Car, ShieldCheck, Clock, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "../assets/cars.png";

const PHONE = "+971562427288";
const WHATSAPP = "971562427288";

export default function HeroSection() {
  const items = [
    {
      icon: Car,
      title: "Premium Fleet",
      desc: "Top of the line vehicles for ultimate comfort.",
    },
    {
      icon: User,
      title: "Professional Drivers",
      desc: "Experienced, courteous, and always on time.",
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      desc: "Your safety is our top priority.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Always here when you need us.",
    },
  ];

  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [items.length]);

  // 🔥 TOUCH EVENTS
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      // swipe left
      setIndex((prev) => (prev + 1) % items.length);
    } else if (diff < -50) {
      // swipe right
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }

    isDragging.current = false;
  };

  return (
    <section className="relative min-h-screen bg-black font-sans overflow-hidden">

  
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury cars"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>


      <div className="relative z-20 max-w-[1200px] mx-auto px-6 pt-28 pb-32">
        <div className="max-w-[520px]">

          <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4 font-medium">
            PREMIUM CHAUFFEUR SERVICES
          </p>

          <h1 className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.05] font-semibold text-white mb-5">
            Seamless Journeys,
         
            <span className="text-gold">Unmatched Comfort</span>
          </h1>

          <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed mb-8 max-w-[440px]">
            Dubai's premier luxury chauffeur service, redefining travel
            with sophistication, comfort, and reliability.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-foreground text-sm font-semibold hover:bg-gold-light transition"
            >
              <Phone size={16} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-black transition"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

   
      <div className="relative z-30 -mt-20 px-6">

 
        <div className="hidden sm:grid max-w-[1200px] mx-auto grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/10 text-white"
            >
              <item.icon className="w-8 h-8 text-gold flex-shrink-0" />

              <div>
                <h3 className="text-[15px] font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[12.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

     
        <div
          className="sm:hidden max-w-[320px] mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="min-w-full flex items-start gap-4 p-5 rounded-xl border border-white/10 text-white"
              >
                <item.icon className="w-8 h-8 text-gold flex-shrink-0" />

                <div>
                  <h3 className="text-[15px] font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[12.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}