
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Clock, Award } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description:
      "A comprehensive course covering HTML, CSS, and JavaScript basics for beginners.",
    price: "29.99",
    duration: "6 weeks",
    students: "120+",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    description:
      "Master modern React development patterns, hooks, context API, and state management with Redux.",
    price: "49.99",
    duration: "8 weeks",
    students: "85+",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Full-Stack PHP Development",
    description:
      "Learn to build complete web applications using PHP, MySQL, and modern backend practices.",
    price: "39.99",
    duration: "10 weeks",
    students: "65+",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    level: "Advanced",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">My Courses</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            Expand your skills with my carefully crafted courses designed to help
            you master web development techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                  {course.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Users size={16} className="mr-1" />
                    <span>{course.students} students</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-brand-gold font-bold text-xl">
                    ${course.price}
                  </div>
                  <Button className="bg-brand-gold hover:bg-yellow-500 text-black">
                    Enroll Now <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <Award size={48} className="text-brand-gold mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Personal Mentorship Program
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get personalized one-on-one guidance and accelerate your learning
              with tailored coaching sessions.
            </p>
            <Button className="bg-brand-red hover:bg-red-700">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
