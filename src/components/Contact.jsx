import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e] headings">
        Contact
      </h1>
      <form
        action="https://getform.io/f/a7d5daf6-280c-4ec0-98a3-1c555e45a60a"
        method="POST"
        enctype="multiport/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
              type="text"
              name="phone"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
            type="email"
            name="email"
            required
          ></input>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
            type="text"
            name="subject"
          ></input>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300 text-black"
            rows="10"
            name="message"
            required
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg animate-pulse">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
