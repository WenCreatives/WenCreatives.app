
import {
  Globe,
  Search,
  PaintBucket,
  ChevronRight,
  Laptop,
  Code,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with regular updates, security checks, and performance optimization.",
    icon: <Globe className="text-brand-gold w-10 h-10 mb-4" />,
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Improve your website's visibility in search engines and drive more targeted traffic to your business.",
    icon: <Search className="text-brand-gold w-10 h-10 mb-4" />,
  },
  {
    id: 3,
    title: "Branding & Identity",
    description:
      "Create a cohesive brand identity that resonates with your audience and sets you apart from competitors.",
    icon: <PaintBucket className="text-brand-gold w-10 h-10 mb-4" />,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Custom website development tailored to your specific needs, from simple landing pages to complex web applications.",
    icon: <Code className="text-brand-gold w-10 h-10 mb-4" />,
  },
  {
    id: 5,
    title: "Responsive Design",
    description:
      "Ensure your website provides an optimal viewing experience across all devices and screen sizes.",
    icon: <Smartphone className="text-brand-gold w-10 h-10 mb-4" />,
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description:
      "Build online stores with secure payment gateways, inventory management, and user-friendly interfaces.",
    icon: <Laptop className="text-brand-gold w-10 h-10 mb-4" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">My Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            I offer a range of services to help businesses establish a strong online presence
            and achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center card-hover"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
              >
                Get a Quote <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
