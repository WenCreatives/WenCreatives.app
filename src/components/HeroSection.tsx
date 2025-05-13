
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-brand-red mt-2 block">Owen</span>
          </h1>
          <div className="h-1 w-20 bg-brand-gold my-6 mx-auto md:mx-0"></div>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
            Web Developer | Tutor | Content Creator
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-gray-700 dark:text-gray-400">
            Crafting digital experiences that combine aesthetic appeal with
            functional excellence. I build websites, teach coding, and create
            educational content.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="bg-brand-gold hover:bg-yellow-500 text-black">
              View Projects <ChevronRight size={16} className="ml-1" />
            </Button>
            <Button
              variant="outline"
              className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Owen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 px-6 py-2 rounded-full shadow-lg">
              <span className="text-brand-gold font-bold">5+ Years Exp.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
