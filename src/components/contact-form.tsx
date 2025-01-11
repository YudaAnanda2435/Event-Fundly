import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    emailjs.init("PEXAPSh8H0l0JGOVC"); // Inisialisasi EmailJS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_qqw760c", "template_k5mt2et", formData)
      .then(() => {
        setModalMessage("Pesan berhasil dikirim!");
        setModalOpen(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setModalMessage("Gagal mengirim pesan, coba lagi!");
        setModalOpen(true);
      });
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-black py-12">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start max-w-6xl mx-auto">
          <div className="border-0 shadow-lg rounded-3xl bg-white p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm text-zinc-950">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-4 text-white bg-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-950">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 placeholder:text-secondary text-white bg-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-950">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  className="w-full px-4 py-4 text-white bg-primary border border-gray-300 rounded-md min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary md:w-auto px-6 py-4 text-white hover:bg-blue-700 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl text-white font-base tracking-tighter mb-4">
                Reach Out to Us
              </h2>
              <p className="text-secondary">We're here to assist you.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fa-regular fa-envelope text-white text-2xl"></i>
                <div>
                  <h3 className="font-medium mb-1 text-white ">Email</h3>
                  <p className="text-secondary">support@eventsaver.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fa-solid fa-mobile text-white text-2xl"></i>
                <div>
                  <h3 className="font-medium mb-1 text-white ">Phone</h3>
                  <p className="text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fa-solid fa-location-dot text-white text-2xl"></i>
                <div>
                  <h3 className="font-medium mb-1 text-white">Location</h3>
                  <p className="text-secondary">
                    123 Event St, Celebration City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          id="custom-modal"
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg px-10 py-6">
            <p className="text-black mx-auto justify-center text-center">
              {modalMessage}
            </p>
            <button
              id="close-modal"
              className="mt-4 px-20 py-2 mx-auto block bg-primary text-white rounded-md "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
