// src/components/ContactSection.jsx
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (api: any) => {
    setFormData((prev) => ({
      ...prev,
      [api.target.name]: api.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r translate-y-1.5 from-sky-50 bg-gray-200 justify-items-center py-6"
    >
      <div className="max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 bg-white shadow-lg rounded-2xl p-6"
        >
          <div className="flex-1 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition"
            >
              {submitted ? "Sending..." : "Send Message"}
            </button>
            {submitted && (
              <p className="text-green-600 text-sm mt-1 animate-pulse">
                Thanks for reaching out!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
