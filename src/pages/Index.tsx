import { useRef, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1, // Trigger when 10% of HeroSection is visible
      },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <div
        style={{
          opacity: isHeroVisible ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
          pointerEvents: isHeroVisible ? "none" : "auto",
        }}
      >
        {!isHeroVisible && <FloatingButtons />}
      </div>
    </div>
  )
}

export default Index
