import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="dark-gradient py-16 border-t border-gold/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <img src={logo} alt="LuxeGlide Elite" className="h-12 mb-3 mx-auto md:mx-0" />
            <p className="text-background/50 text-sm max-w-xs">
              Seamless Journeys, Unmatched Comfort. Dubai's premier luxury chauffeur service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8">
            {["Home", "About Us", "Services", "Contact Us"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(" us", "").replace(" ", "")}`}
                className="text-background/50 hover:text-gold transition-colors text-sm"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-foreground transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 my-8" />

        <p className="text-center text-background/30 text-sm">
          © {new Date().getFullYear()} LuxeGlide Elite Chauffeur Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
