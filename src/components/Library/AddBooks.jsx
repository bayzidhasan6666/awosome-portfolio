import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Header from '../Header';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddBooks = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', data.image[0]);

    try {
      const res = await fetch(img_hosting_url, {
        method: 'POST',
        body: formData,
      });
      const imgResponse = await res.json();

      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        const { name, writer, publishedBy, language, description } = data;
        const newBook = {
          name,
          writer,
          publishedBy,
          language,
          description,
          image: imgURL,
        };

        try {
          const response = await fetch(
            'https://atikul-islam-books-server.vercel.app/books',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newBook),
            }
          );

          if (response.ok) {
            reset();
            Swal.fire({
              icon: 'success',
              title: 'Book Submitted',
              text: 'The book has been successfully submitted!',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          } else {
            console.log('Failed to submit book:', response.statusText);
          }
        } catch (error) {
          console.error('Error submitting book:', error);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <section id="" className="py-20 tg">
        <div className="mb-10 flex justify-center items-center gap-5">
          <div>
            <h1 className="heading gradient-text">Add A Book</h1>
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
                className="bg-[#191b1e] rounded-lg p-3"
                placeholder="Enter book language"
                name="language"
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
                {...register('image', { required: true })}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="nbtn shadow-xl w-full py-4 px-4 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddBooks;
