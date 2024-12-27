"use client"
import { motion } from "framer-motion";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="bg-[#f9f9f9] text-charcoal py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Contact Form */}
        <motion.form
          className="space-y-6 bg-yellow p-8 rounded-xl border-4 border-charcoal shadow-lg order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium font-coolvetica tracking-wide"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#f9f9f9] border-2 border-charcoal p-3 rounded-lg text-charcoal placeholder-charcoal/60 focus:outline-none focus:ring-2 focus:ring-charcoal font-satoshi"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium font-coolvetica tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#f9f9f9] border-2 border-charcoal p-3 rounded-lg text-charcoal placeholder-charcoal/60 focus:outline-none focus:ring-2 focus:ring-charcoal font-satoshi"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium font-coolvetica tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-[#f9f9f9] border-2 border-charcoal p-3 rounded-lg text-charcoal placeholder-charcoal/60 focus:outline-none focus:ring-2 focus:ring-charcoal font-satoshi"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
          </div>
          <Button
            label="Book Now"
            variant="outline"
            size="large"
            icon={<FiArrowRight />}
            onClick={() => console.log("Button Clicked!")}
          />
          {/* <button
            type="submit"
            className="w-full bg-yellow text-charcoal font-bold py-3 rounded-lg hover:bg-yellow/90 transition-all duration-300 font-satoshi tracking-tight"
          >
            Send Message
          </button> */}
          <p className="text-red text-sm mt-2 hidden" id="error-message">
            Oops! Please fill out all fields correctly.
          </p>
        </motion.form>

        {/* Right Column: Text Content */}
        <motion.div
          className="space-y-6 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl tracking-wide capitalize border-l-8 border-charcoal pl-4 font-coolvetica">
            Get In Touch
          </h2>
          <p className="text-lg leading-relaxed font-satoshi">
            Have a question or want to collaborate? Fill out the form or
            contact us directly. Let’s build something amazing together.
          </p>
          <div className="space-y-2">
            <p className="font-satoshi">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="font-satoshi">
              <strong>Phone:</strong> +1 234 567 890
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
