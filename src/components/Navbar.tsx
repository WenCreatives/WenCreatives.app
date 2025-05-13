
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/lovable-uploads/ff17083f-7f61-4ae5-809c-d1d65142545d.png"
              alt="Owen's Logo"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold">Owen</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-brand-gold font-medium">
              Home
            </a>
            <a href="#about" className="hover:text-brand-gold font-medium">
              About
            </a>
            <a href="#projects" className="hover:text-brand-gold font-medium">
              Projects
            </a>
            <a href="#services" className="hover:text-brand-gold font-medium">
              Services
            </a>
            <a href="#courses" className="hover:text-brand-gold font-medium">
              Courses
            </a>
            <a href="#content" className="hover:text-brand-gold font-medium">
              Content
            </a>
            <a href="#contact" className="hover:text-brand-gold font-medium">
              Contact
            </a>
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#services"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#courses"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                Courses
              </a>
              <a
                href="#content"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                Content
              </a>
              <a
                href="#contact"
                className="hover:text-brand-gold p-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
