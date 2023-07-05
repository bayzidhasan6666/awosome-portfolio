import React, { useEffect, useState } from 'react';
import { BsArrowUpRightSquare, BsTrash } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://atikul-islam-books-server.vercel.app/books'
        );
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Show Swal confirmation prompt
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Send the delete request to the server
        fetch(`https://atikul-islam-books-server.vercel.app/books/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Book deleted successfully:', data);
            // Show Swal notification
            Swal.fire({
              icon: 'success',
              title: 'Book Deleted',
              text: 'The book has been successfully deleted!',
            });
            // Remove the deleted book from the state
            setBooks((prevBooks) =>
              prevBooks.filter((book) => book._id !== id)
            );
          })
          .catch((error) => {
            console.error('Error deleting book:', error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="">
        <h1 className="heading">My Library</h1>
        <div className="mt-10">
          {' '}
          <Link
            to={'/addBooks'}
            className="heading text-emerald-500 cursor-pointe"
          >
            Add A Book
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-10 w-fit mx-auto">
        {books.map((book) => (
          <div
            key={book._id}
            className="group relative items-center justify-center overflow-hidden cursor-pointer border-8 border-[#2e2f2f] shadow-xl"
          >
            <figure className="h-96 w-[350px]">
              <img
                className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                src={book.image}
                alt="image"
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-b group-hover:from-[#1c0202bf] group-hover:via-[#1c0202bf] group-hover:to-[#1c0202bf] from-black/10 via-black/10 to-black/80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h2 className="text-xl tg  text-white  mb-5">{book.name}</h2>
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm duration-300 mb-2">
                প্রকাশনীঃ {book.publishedBy}
              </p>
              <p className="text-white opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-300 mb-2">
                লেখকঃ {book.writer}
              </p>
              <div className="card-actions gap-6 mt-1 flex justify-between px-6">
                <Link to={'/edit'}>
                  <BiSolidEdit className="text-emerald-500 cursor-pointer w-5 h-5"></BiSolidEdit>
                </Link>
                <BsTrash
                  onClick={() => handleDelete(book._id)}
                  className="text-red-500 cursor-pointer w-5 h-5"
                ></BsTrash>
                <Link to={`/details/${book._id}`}>
                  <BsArrowUpRightSquare className="text-cyan-500 cursor-pointer w-5 h-5"></BsArrowUpRightSquare>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
