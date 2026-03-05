import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE = "+971562427288";
const WHATSAPP = "971562427288";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCar} alt="Luxury chauffeur car in Dubai" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            {t("hero.tag")}
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6">
            {t("hero.title1")}{" "}
            <span className="text-gold-gradient">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-background/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {t("hero.desc")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4">
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-foreground font-bold text-base hover:bg-gold-light transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              {t("hero.call")}
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gold text-gold font-bold text-base hover:bg-gold hover:text-foreground transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              {t("hero.wa")}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
    </section>
  );
};

export default HeroSection;
