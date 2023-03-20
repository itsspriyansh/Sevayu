import React from 'react'

const ContactUs = () => {
    return (
        <div className="card shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 border-b pb-4 visby font-bold">Contact Us</h3>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea 
              className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 resize-none" 
              placeholder="Write your message" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-box" 
              placeholder="Your contact no." 
              />
            <input 
              type="email" 
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-box" 
              placeholder="Your email" 
              name="email" />
          </div>
          <div className="mt-8">
            <button 
              type="button" 
              className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-[#FF008A] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Submit
            </button>
          </div>
        </div>
      )
}

export default ContactUs