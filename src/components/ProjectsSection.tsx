
import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce website with payment integration",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    category: "development",
  },
  {
    id: 2,
    title: "School Management System",
    description: "A comprehensive system for managing school operations",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    liveLink: "#",
    githubLink: "#",
    category: "development",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A sleek portfolio site for a local photographer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    category: "design",
  },
  {
    id: 4,
    title: "Coding Tutorial Series",
    description: "A comprehensive video series teaching web development basics",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    technologies: ["Educational Content", "Video Production"],
    liveLink: "#",
    githubLink: null,
    category: "content",
  },
  {
    id: 5,
    title: "Real Estate Website",
    description: "Property listing site with advanced filtering capabilities",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
    category: "development",
  },
  {
    id: 6,
    title: "Mobile App UI Design",
    description: "UI/UX design for a fitness tracking mobile application",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    liveLink: "#",
    githubLink: null,
    category: "design",
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            Here are some of my recent projects showcasing my skills and expertise in web design, development, and content creation.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className={activeFilter === "all" ? "bg-brand-gold hover:bg-yellow-500 text-black" : ""}
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          <Button
            variant={activeFilter === "development" ? "default" : "outline"}
            className={activeFilter === "development" ? "bg-brand-gold hover:bg-yellow-500 text-black" : ""}
            onClick={() => setActiveFilter("development")}
          >
            Development
          </Button>
          <Button
            variant={activeFilter === "design" ? "default" : "outline"}
            className={activeFilter === "design" ? "bg-brand-gold hover:bg-yellow-500 text-black" : ""}
            onClick={() => setActiveFilter("design")}
          >
            Design
          </Button>
          <Button
            variant={activeFilter === "content" ? "default" : "outline"}
            className={activeFilter === "content" ? "bg-brand-gold hover:bg-yellow-500 text-black" : ""}
            onClick={() => setActiveFilter("content")}
          >
            Content
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.liveLink}
                    className="text-brand-red hover:text-red-700 flex items-center text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Site
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-brand-gold hover:text-yellow-600 flex items-center text-sm font-medium"
                    >
                      <Github size={16} className="mr-1" /> Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-10">
            <Button
              onClick={handleLoadMore}
              className="bg-brand-red hover:bg-red-700"
            >
              Load More <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
