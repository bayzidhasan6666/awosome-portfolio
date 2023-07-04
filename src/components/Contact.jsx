import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="py-20 tg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-2xl p-8 neu">
      
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#191b1e] rounded-lg p-3"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#191b1e] rounded-lg p-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="bg-[#191b1e] rounded-lg p-3"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className=" nbtn shadow-xl w-full text-white py-4 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
