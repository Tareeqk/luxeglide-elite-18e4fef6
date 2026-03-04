import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact Us",
    "nav.call": "Call Now",
    "nav.whatsapp": "WhatsApp",

    // Hero
    "hero.tag": "Premium Chauffeur Services",
    "hero.title1": "Seamless Journeys,",
    "hero.title2": "Unmatched Comfort",
    "hero.desc": "Dubai's premier luxury chauffeur service, redefining travel with sophistication, comfort, and reliability.",
    "hero.call": "Call Now",
    "hero.wa": "WhatsApp Us",

    // About
    "about.tag": "About Us",
    "about.title1": "Dubai's Premier Luxury",
    "about.title2": "Chauffeur Service",
    "about.p1": "LuxeGlide Elite is Dubai's premier luxury chauffeur service, redefining travel with sophistication, comfort, and reliability. Whether for business or leisure, we ensure seamless, stylish, and stress-free transportation, delivering an elite experience every mile of the way.",
    "about.p2": "What sets us apart is our commitment to detail and passion for excellence. With a meticulously maintained fleet and professionally trained chauffeurs, we offer more than just transportation — we create a calm, luxurious experience with premium amenities and discreet, attentive service.",
    "about.stat1": "Happy Clients",
    "about.stat2": "Availability",
    "about.stat3": "Satisfaction",

    // Services
    "services.tag": "Our Services",
    "services.title": "What We Offer",
    "services.desc": "From airport transfers to VIP events, we provide a comprehensive range of luxury chauffeur services tailored to your needs.",
    "services.airport.title": "Airport Transfers",
    "services.airport.desc": "Seamless airport pickup and drop-off with flight tracking and meet & greet service.",
    "services.hourly.title": "Hourly Chauffeur",
    "services.hourly.desc": "Flexible hourly booking for business meetings, city tours, or special occasions.",
    "services.city.title": "City Tours",
    "services.city.desc": "Explore Dubai in ultimate comfort with our curated luxury city tour experiences.",
    "services.corporate.title": "Corporate Travel",
    "services.corporate.desc": "Professional chauffeur services for executives and corporate events.",
    "services.vip.title": "VIP Services",
    "services.vip.desc": "Exclusive VIP transportation for special events, weddings, and high-profile occasions.",
    "services.group.title": "Group Transport",
    "services.group.desc": "Premium fleet options for group travel with comfort and style.",

    // Contact
    "contact.tag": "Contact Us",
    "contact.title": "Get in Touch",
    "contact.desc": "Ready to experience luxury travel? Reach out to us and we'll arrange the perfect journey for you.",
    "contact.call": "Call Us",
    "contact.wa": "WhatsApp",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.chat": "Chat with us",
    "contact.dubai": "Dubai, UAE",

    // Footer
    "footer.tagline": "Seamless Journeys, Unmatched Comfort. Dubai's premier luxury chauffeur service.",
    "footer.rights": "LuxeGlide Elite Chauffeur Services. All rights reserved.",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.contact": "اتصل بنا",
    "nav.call": "اتصل الآن",
    "nav.whatsapp": "واتساب",

    // Hero
    "hero.tag": "خدمات السائق الخاص الفاخرة",
    "hero.title1": "رحلات سلسة،",
    "hero.title2": "راحة لا مثيل لها",
    "hero.desc": "خدمة السائق الخاص الفاخرة الرائدة في دبي، نعيد تعريف السفر بالأناقة والراحة والموثوقية.",
    "hero.call": "اتصل الآن",
    "hero.wa": "راسلنا واتساب",

    // About
    "about.tag": "من نحن",
    "about.title1": "خدمة السائق الفاخرة",
    "about.title2": "الرائدة في دبي",
    "about.p1": "لوكس جلايد إيليت هي خدمة السائق الخاص الفاخرة الرائدة في دبي، نعيد تعريف السفر بالأناقة والراحة والموثوقية. سواء للعمل أو الترفيه، نضمن تنقلاً سلساً وأنيقاً وخالياً من التوتر، لنقدم تجربة نخبوية في كل ميل.",
    "about.p2": "ما يميزنا هو التزامنا بالتفاصيل وشغفنا بالتميز. مع أسطول يتم صيانته بدقة وسائقين مدربين باحتراف، نقدم أكثر من مجرد نقل — نخلق تجربة هادئة وفاخرة مع وسائل راحة متميزة وخدمة متحفظة ومهتمة.",
    "about.stat1": "عملاء سعداء",
    "about.stat2": "متاحون دائماً",
    "about.stat3": "رضا تام",

    // Services
    "services.tag": "خدماتنا",
    "services.title": "ما نقدمه",
    "services.desc": "من خدمات النقل من وإلى المطار إلى فعاليات كبار الشخصيات، نقدم مجموعة شاملة من خدمات السائق الخاص الفاخرة المصممة لتلبية احتياجاتك.",
    "services.airport.title": "نقل المطار",
    "services.airport.desc": "خدمة استقبال وتوصيل سلسة من وإلى المطار مع تتبع الرحلات.",
    "services.hourly.title": "سائق بالساعة",
    "services.hourly.desc": "حجز مرن بالساعة لاجتماعات العمل أو جولات المدينة أو المناسبات الخاصة.",
    "services.city.title": "جولات المدينة",
    "services.city.desc": "استكشف دبي بأقصى درجات الراحة مع تجارب جولات المدينة الفاخرة.",
    "services.corporate.title": "النقل المؤسسي",
    "services.corporate.desc": "خدمات سائق خاص احترافية للمديرين التنفيذيين والفعاليات المؤسسية.",
    "services.vip.title": "خدمات VIP",
    "services.vip.desc": "خدمات نقل حصرية لكبار الشخصيات للمناسبات الخاصة وحفلات الزفاف.",
    "services.group.title": "النقل الجماعي",
    "services.group.desc": "خيارات أسطول متميزة للسفر الجماعي بأناقة وراحة.",

    // Contact
    "contact.tag": "اتصل بنا",
    "contact.title": "تواصل معنا",
    "contact.desc": "هل أنت مستعد لتجربة السفر الفاخر؟ تواصل معنا وسنرتب لك الرحلة المثالية.",
    "contact.call": "اتصل بنا",
    "contact.wa": "واتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.location": "الموقع",
    "contact.chat": "تحدث معنا",
    "contact.dubai": "دبي، الإمارات",

    // Footer
    "footer.tagline": "رحلات سلسة، راحة لا مثيل لها. خدمة السائق الخاص الفاخرة الرائدة في دبي.",
    "footer.rights": "لوكس جلايد إيليت لخدمات السائق الخاص. جميع الحقوق محفوظة.",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.documentElement.style.fontFamily =
      lang === "ar"
        ? '"Almarai", system-ui, sans-serif'
        : '"General Sans", system-ui, sans-serif';
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
