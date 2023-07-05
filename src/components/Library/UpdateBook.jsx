import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from '../Header';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    writer: '',
    publishedBy: '',
    language: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/books/${id}`);
        const data = await response.json();
        setBook(data);
        setFormData(data); // Set the book data as the initial form values
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    for (const key in formData) {
      if (formData[key] === '') {
        alert('Please fill in all fields');
        return;
      }
    }

    // Send the book data to the server
    fetch(`http://localhost:5000/books/${id}`, {
      method: 'PUT', // or 'PATCH'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book updated successfully:', data);
        // Reset the form after successful update
        setFormData({
          name: '',
          writer: '',
          publishedBy: '',
          language: '',
          description: '',
          image: '',
        });

        // Show Swal notification
        Swal.fire({
          icon: 'success',
          title: 'Book Updated',
          text: 'The book has been successfully updated!',
        });
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {' '}
      <Header></Header>
      <section id="" className="py-20 tg">
        <div className="mb-10">
          {' '}
          <h1 className="heading gradient-text">Update This Book</h1>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-2xl p-8 neu">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter book name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="writer" className="text-white mb-2">
                Writer
              </label>
              <input
                type="text"
                id="writer"
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter writer's name"
                name="writer"
                value={formData.writer}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="publishedBy" className="text-white mb-2">
                Published By
              </label>
              <input
                type="text"
                id="publishedBy"
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter publisher's name"
                name="publishedBy"
                value={formData.publishedBy}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="language" className="text-white mb-2">
                Language
              </label>
              <input
                type="text"
                id="language"
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter book language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-white mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter book description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="text-white mb-2">
                Image
              </label>
              <input
                type="text"
                id="image"
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="nbtn shadow-xl w-full text-white py-4 px-4 rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateBook;
