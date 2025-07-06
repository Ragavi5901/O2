import React from 'react'

const Enquiry = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
  <div className="max-w-xl w-full bg-white shadow-2xl rounded-xl p-6 sm:p-10 border-t-4 border-blue-500">
    {/* Title */}
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-2">
      Enquiry Form
    </h2>

    {/* Paragraph */}
    <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
      We're here to help! Whether you're interested in a product, need a demo,
      or have a service-related question, just send us a message. Our team
      typically responds within 24 hours.
    </p>

    {/* Form */}
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Email Id</label>
        <input
          type="email"
          placeholder="Enter your email id"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Enquiry</label>
        <textarea
          rows="4"
          placeholder="Type here"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>

  )
}

export default Enquiry