import React, { useEffect, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import {
  BsArrowUpRightSquare,
  BsFileEarmarkPlus,
  BsTrash,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import ReactModal from 'react-modal';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteBookId, setDeleteBookId] = useState(null);
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

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

  const handleDeleteClick = (id) => {
    setDeleteBookId(id);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state

    // Simulate password validation
    setTimeout(() => {
      if (password === 'ai') {
        deleteBook(deleteBookId); // Call deleteBook function with the book ID
      } else {
        Swal.fire('Error', 'Incorrect password', 'error');
        setIsLoading(false); // Reset loading state
      }
    }, 1000);
  };

  const deleteBook = (id) => {
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
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
            // Remove the deleted book from the state
            setDeleteBookId(null);
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

  const closeModal = () => {
    setIsModalOpen(false);
    setPassword('');
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <div className="">
        <h1 className="heading gradient-text">My Library</h1>
        <div className="mt-10">
          {' '}
          <Link
            to={'/addBooks'}
            className="add flex mb-5 items-center gap-2 text-emerald-500 cursor-pointe"
          >
            Add A Book<BsFileEarmarkPlus></BsFileEarmarkPlus>
          </Link>
        </div>
        <div className="md:flex  w-fit  items-center p-3 space-x-6 neu rounded-xl mx-auto  ">
          <div className="flex  items-center p-4 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <input
              className="neu px-5 py-3 outline-none"
              type="text"
              placeholder="Article name or keyword..."
              value={searchKeyword}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
            <span>All categorie</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 gap-6Here's the continuation of the code:

```jsx
md:grid-cols-2 lg:grid-cols-3 my-10 w-fit mx-auto"
      >
        {filteredBooks.map((book) => (
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
                <Link to={`/edit/${book._id}`}>
                  <BiSolidEdit className="text-emerald-500 cursor-pointer w-5 h-5"></BiSolidEdit>
                </Link>
                <BsTrash
                  onClick={() => handleDeleteClick(book._id)}
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
      {/* Password Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Confirmation"
        className={'neu p-20'}
      >
        <h2 className="text-xl mb-4">Enter Password to Confirm Deletion</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-lg p-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="nbtn mr-2 py-2 px-4 rounded-lg"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="nbtn shadow-xl py-2 px-4 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default BookList;
