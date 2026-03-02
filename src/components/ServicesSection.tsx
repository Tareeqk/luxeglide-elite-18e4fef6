import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Clock, Shield, MapPin, Star, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Airport Transfers",
    description: "Seamless airport pickup and drop-off with flight tracking and meet & greet service.",
  },
  {
    icon: Clock,
    title: "Hourly Chauffeur",
    description: "Flexible hourly booking for business meetings, city tours, or special occasions.",
  },
  {
    icon: MapPin,
    title: "City Tours",
    description: "Explore Dubai in ultimate comfort with our curated luxury city tour experiences.",
  },
  {
    icon: Shield,
    title: "Corporate Travel",
    description: "Professional chauffeur services for executives and corporate events.",
  },
  {
    icon: Star,
    title: "VIP Services",
    description: "Exclusive VIP transportation for special events, weddings, and high-profile occasions.",
  },
  {
    icon: Users,
    title: "Group Transport",
    description: "Premium fleet options for group travel with comfort and style.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-32 dark-gradient">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            What We Offer
          </h2>
          <p className="text-background/60 max-w-2xl mx-auto">
            From airport transfers to VIP events, we provide a comprehensive range of luxury chauffeur services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm hover:border-gold/40 hover:bg-background/10 transition-all duration-300"
            >
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
