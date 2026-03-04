import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Clock, Shield, MapPin, Star, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    { icon: Car, title: t("services.airport.title"), description: t("services.airport.desc") },
    { icon: Clock, title: t("services.hourly.title"), description: t("services.hourly.desc") },
    { icon: MapPin, title: t("services.city.title"), description: t("services.city.desc") },
    { icon: Shield, title: t("services.corporate.title"), description: t("services.corporate.desc") },
    { icon: Star, title: t("services.vip.title"), description: t("services.vip.desc") },
    { icon: Users, title: t("services.group.title"), description: t("services.group.desc") },
  ];

  return (
    <section id="services" className="py-20 md:py-32 dark-gradient">
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">{t("services.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">{t("services.title")}</h2>
          <p className="text-background/60 max-w-2xl mx-auto">{t("services.desc")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm hover:border-gold/40 hover:bg-background/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-background mb-3">{service.title}</h3>
              <p className="text-background/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
