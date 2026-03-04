import { useState } from "react";
import { Phone, MessageCircle, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE = "+971500000000";
const WHATSAPP = "971500000000";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, toggleLang, lang } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-gold/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex-shrink-0">
          <img src={logo} alt="LuxeGlide Elite" className="h-10 md:h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-background/70 hover:text-gold transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-background/20 text-background/70 text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-foreground text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t("nav.call")}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t("nav.whatsapp")}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-background/70 hover:text-gold transition-colors text-sm font-bold"
            aria-label="Toggle language"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-background"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-foreground border-t border-gold/20 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-background/70 hover:text-gold transition-colors text-lg font-medium uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-foreground text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {t("nav.call")}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold text-gold text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("nav.whatsapp")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
