import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Top 5 Exercises for Athletes',
      description:
        'Learn about the most effective exercises to enhance your athletic performance.',
      fullContent:
        'This blog dives deeper into the best exercises to improve your strength, flexibility, and endurance as an athlete. Find out which exercises you should include in your routine and why.',
      image: 'https://i.ibb.co/n1MfLg7/download-14.jpg',
      date: 'Jan 6, 2025',
    },
    {
      id: 2,
      title: 'Benefits of Using Quality Sports Equipment',
      description:
        'Discover how using high-quality sports gear can improve your game.',
      fullContent:
        'Quality sports equipment not only improves performance but also helps prevent injuries. In this blog, we explore the importance of investing in reliable and durable sports gear.',
      image: 'https://i.ibb.co/Vtzf9Pq/download-15.jpg',
      date: 'Jan 5, 2025',
    },
    {
      id: 3,
      title: 'How to Stay Motivated in Sports',
      description:
        'Tips and tricks to keep yourself motivated and achieve your goals in sports.',
      fullContent:
        'Staying motivated in sports is essential for long-term success. This article provides actionable strategies to overcome challenges and stay focused on your goals.',
      image: 'https://i.ibb.co/tLdCYS0/download-16.jpg',
      date: 'Jan 4, 2025',
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = blog => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blogs
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Stay updated with our latest articles, tips, and insights.
        </motion.p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-400 text-sm">{blog.date}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600">{blog.description}</p>
                <button
                  onClick={() => openModal(blog)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-800">
              {selectedBlog.title}
            </h3>
            <p className="mt-2 text-gray-600">{selectedBlog.fullContent}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
