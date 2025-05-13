
import { CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "HTML/CSS",
  "JavaScript",
  "PHP",
  "Node.js",
  "React",
  "WordPress",
  "UI/UX Design",
  "Responsive Design",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <h3 className="text-2xl font-bold mb-4">
              Web Developer, Teacher & Content Creator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With over 5 years of experience in web development, I've built a
              diverse skill set that enables me to create beautiful,
              high-performing websites and applications. My passion lies in
              bringing creative ideas to life through code while ensuring
              exceptional user experience across all devices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Beyond development, I'm dedicated to sharing my knowledge through
              tutoring and creating educational content that makes programming
              accessible to everyone. I believe in continuous learning and
              staying updated with the latest industry trends.
            </p>
            <Button className="flex items-center bg-brand-red hover:bg-red-700">
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-brand-gold">
                  My Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle
                        size={16}
                        className="text-brand-gold mr-2"
                      />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-brand-gold">
                  Testimonials
                </h3>
                <div className="space-y-4">
                  <blockquote className="italic text-sm text-gray-700 dark:text-gray-300 border-l-2 border-brand-gold pl-4">
                    "Owen's attention to detail and technical skills are
                    outstanding. He delivered a website that exceeded our
                    expectations."
                    <footer className="mt-1 font-medium text-brand-red">
                      — Jane Doe, CEO
                    </footer>
                  </blockquote>
                  <blockquote className="italic text-sm text-gray-700 dark:text-gray-300 border-l-2 border-brand-gold pl-4">
                    "His teaching approach made complex coding concepts easy to
                    understand. Highly recommended for anyone learning web
                    development."
                    <footer className="mt-1 font-medium text-brand-red">
                      — John Smith, Student
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
