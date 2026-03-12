import { Facebook, Instagram } from "lucide-react"
import logo from "@/assets/logo.png"
import { useLanguage } from "@/contexts/LanguageContext"

const Footer = () => {
  const { t } = useLanguage()

  const links = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <footer className="dark py-16 border-t border-gold/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-start">
            <img
              src={logo}
              alt="LuxeGlide Elite"
              className="h-12 mb-3 mx-auto md:mx-0"
            />
            <p className="text-background/50 text-sm max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-background/50 hover:text-gold transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-foreground transition-all"
              aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a> */}
            <a
              href="https://www.instagram.com/luxeglide.elite?igsh=MWdrMXR2ODA5c2l6OA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="h-px bg-background/10 my-8" />
        <p className="text-center text-background/30 text-sm">
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}

export default Footer
