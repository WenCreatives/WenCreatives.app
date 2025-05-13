
import { ExternalLink, Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentSection = () => {
  // Sample YouTube videos data
  const videos = [
    {
      id: "video1",
      title: "How to Build a React App from Scratch",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      views: "4.2K",
      date: "2 weeks ago",
    },
    {
      id: "video2",
      title: "CSS Grid vs Flexbox - When to Use Each",
      thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80",
      views: "3.8K",
      date: "1 month ago",
    },
    {
      id: "video3",
      title: "JavaScript Tips and Tricks for 2023",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      views: "5.1K",
      date: "3 weeks ago",
    },
  ];

  // Sample blog posts data
  const blogPosts = [
    {
      id: "post1",
      title: "The Future of Web Development in 2023",
      excerpt: "Exploring upcoming trends and technologies that will shape web development in the coming year.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2023",
    },
    {
      id: "post2",
      title: "Optimizing Website Performance",
      excerpt: "Key strategies to improve loading times and overall performance of your website.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      date: "April 22, 2023",
    },
  ];

  return (
    <section id="content" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Content Creator</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">
            I regularly create educational content to help aspiring developers
            and designers learn new skills and stay updated with industry trends.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center">
              <Youtube className="text-brand-red mr-2" /> YouTube Videos
            </h3>
            <a
              href="#"
              className="text-brand-gold hover:text-yellow-600 flex items-center text-sm"
            >
              View Channel <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md card-hover"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-red bg-opacity-90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2 text-lg leading-tight">
                    {video.title}
                  </h4>
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <Instagram className="text-brand-gold mr-2" /> Instagram
              </h3>
              <a
                href="#"
                className="text-brand-gold hover:text-yellow-600 flex items-center text-sm"
              >
                Follow Me <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-md"
                  >
                    <img
                      src={`https://source.unsplash.com/random/300x300?coding&sig=${i}`}
                      alt="Instagram post"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <Twitter className="text-brand-gold mr-2" /> Latest Posts
              </h3>
              <a
                href="#"
                className="text-brand-gold hover:text-yellow-600 flex items-center text-sm"
              >
                Follow Me <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg card-hover"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-bold mb-1">{post.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-brand-gold">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-brand-red hover:bg-red-700">
            View All Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
