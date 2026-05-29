import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { FaWhatsapp, FaInstagram } from "react-icons/fa"


function Contact () {
  return (
    <>
    <Navbar/>
    
       <section className="py-24 bg-gray-100 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Contact Us</h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We would love to hear from you. Reach out to CashWears for support,
          orders, and inquiries.
        </p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Send A Message</h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-4 rounded-xl outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-4 rounded-xl outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border p-4 rounded-xl outline-none"
              ></textarea>

              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-black text-white rounded-3xl p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

            <a
              href="https://wa.me/2348066186996"
              target="_blank"
              className="flex items-center gap-4 mb-6 text-lg"
            >
              <FaWhatsapp className="text-3xl" />
              08066186996
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-4 text-lg"
            >
              <FaInstagram className="text-3xl" />
              Instagram
            </a>

            <div className="mt-10 text-gray-400 leading-8">
              <p>Lagos, Nigeria</p>
              <p>Monday - Saturday</p>
              <p>9AM - 7PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default Contact