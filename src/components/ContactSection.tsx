import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE = "+971562427288";
const WHATSAPP = "971562427288";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const items = [
    { icon: Phone, title: t("contact.call"), detail: "+971 56 242 7288", href: `tel:${PHONE}` },
    { icon: MessageCircle, title: t("contact.wa"), detail: t("contact.chat"), href: `https://wa.me/${WHATSAPP}` },
    { icon: Mail, title: t("contact.email"), detail: "info@Luxeglide.elite@hotmail.com", href: "mailto:info@Luxeglide.elite@hotmail.com" },
    { icon: MapPin, title: t("contact.location"), detail: t("contact.dubai"), href: "https://maps.app.goo.gl/oMedxFejHPvregjdA?g_st=ic" },
  ];
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">{t("contact.tag")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.desc")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.a key={item.title} href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center p-8 rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
