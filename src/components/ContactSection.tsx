
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            Have a project in mind or want to learn more about my services? Feel
            free to reach out, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-brand-red mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      owen@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-brand-red mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +254 123 456 789
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-brand-red mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm currently available for freelance work, tutoring sessions,
                and consulting opportunities.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <h4 className="font-bold text-brand-red mb-2">
                  Response Time
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I typically respond to inquiries within 24 hours during
                  weekdays. For urgent matters, please indicate in your message.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-800"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-brand-gold hover:bg-yellow-500 text-black"
              >
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
