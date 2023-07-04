import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'The Treasures of Islamic Literature',
    description:
      'Exploring the richness and diversity of Islamic literature and its profound impact on readers.',
    image: 'https://i.ibb.co/c6wjYzV/blog-3.jpg',
  },
  {
    id: 2,
    title: 'Discovering Sufi Poetry: The Path to Divine Love',
    description:
      'Delving into the mystical realm of Sufi poetry and its profound expressions of spiritual devotion.',
    image: 'https://i.ibb.co/GW2F721/blog-1.jpg',
  },
  {
    id: 3,
    title: 'The Significance of Tafsir in Quranic Understanding',
    description:
      'Examining the importance of Tafsir (Quranic interpretation) in deepening our understanding of the Quran.',
    image: 'https://i.ibb.co/Pc9dsCH/blog-2.jpg',
  },
  {
    id: 4,
    title: 'Exploring the Prophetic Hadith Collections',
    description:
      'A journey through the major collections of Hadith literature and their role in Islamic scholarship.',
    image: 'https://i.ibb.co/Jy9BvHJ/blog-5.jpg',
  },
];

const Blog = () => {
  return (
    <div id='blog' className='my-10'>
      {' '}
      <h1 className="heading">Hobbies</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card  text-gray-400 h-96 shadow-xl rounded-lg "
          >
            <img
              className="w-full h-52 lg:h-64 rounded-t-lg"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-5 ">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
