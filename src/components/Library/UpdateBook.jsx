import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from '../Header';
import { useNavigate, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      const res = await fetch(img_hosting_url, {
        method: 'POST',
        body: formData,
      });
      const imgResponse = await res.json();

      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        const { name, writer, publishedBy, language, description } = data;
        const updatedBook = {
          name,
          writer,
          publishedBy,
          language,
          description,
          image: imgURL,
        };

        try {
          const response = await fetch(`http://localhost:5000/books/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
          });

          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: 'Book Updated',
              text: 'The book has been successfully updated!',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          } else {
            console.log('Failed to update book:', response.statusText);
          }
        } catch (error) {
          console.error('Error updating book:', error);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!book) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-infinity text-red-500 loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section id="" className="py-20 tg px-2">
        <div className="mb-10 flex justify-center items-center gap-5">
          <div>
            <h1 className="heading gradient-text">Update This Book</h1>
          </div>
          <div className="buttons">
            <a href="#" onClick={() => navigate(-1)}>
              <RiArrowGoBackFill className="i" />
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-2xl p-8 neu">
          <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
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
                defaultValue={book.name}
                {...register('name', { required: true })}
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
                defaultValue={book.writer}
                {...register('writer', { required: true })}
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
                defaultValue={book.publishedBy}
                {...register('publishedBy', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="language" className="text-white mb-2">
                Language
              </label>
              <input
                type="text"
                id="language"
                className="bg-[#191b1e]rounded-lg p-3"
                placeholder="Enter book language"
                name="language"
                defaultValue={book.language}
                {...register('language', { required: true })}
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
                defaultValue={book.description}
                {...register('description', { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="text-white mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                className="bg-[#191b1e] rounded-lg p-3"
                name="image"
                {...register('image')}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="nbtn shadow-xl w-full py-4 px-4 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Updating...' : 'Update'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateBook;
