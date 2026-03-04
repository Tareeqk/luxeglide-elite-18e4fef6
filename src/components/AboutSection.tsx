import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-interior.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutImg} alt="Luxury car interior" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gold-gradient -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">{t("about.tag")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t("about.title1")}{" "}
              <span className="text-gold-gradient">{t("about.title2")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{t("about.p2")}</p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: t("about.stat1") },
                { number: "24/7", label: t("about.stat2") },
                { number: "100%", label: t("about.stat3") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gold">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
