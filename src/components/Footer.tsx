
import { Youtube, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto container-padding py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/lovable-uploads/ff17083f-7f61-4ae5-809c-d1d65142545d.png"
              alt="Owen's Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="text-2xl font-bold">Owen</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-black hover:bg-yellow-500 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400 mb-4">
              Professional web developer, tutor, and content creator passionate about building exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-brand-gold">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-gold">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-brand-gold">Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-gold">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">More</h3>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-gray-400 hover:text-brand-gold">Courses</a></li>
              <li><a href="#content" className="text-gray-400 hover:text-brand-gold">Content</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-gold">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-brand-red" aria-label="YouTube">
                <Youtube />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
            <p className="text-gray-400">
              Email: owen@example.com<br />
              Phone: +254 123 456 789
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Owen. All rights reserved.
          </p>
          <p className="text-gray-500">
            Designed & Developed by Owen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
