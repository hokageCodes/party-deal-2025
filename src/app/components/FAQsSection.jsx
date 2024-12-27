"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const FAQs = [
  { question: "What is Neo-Brutalism?", answer: "Neo-Brutalism is a modern web design trend featuring bold colors, thick borders, and a minimalist yet attention-grabbing aesthetic." },
  { question: "Why use Neo-Brutalism?", answer: "It’s perfect for creating standout designs that grab attention while maintaining simplicity and usability." },
  { question: "How does Framer Motion help?", answer: "Framer Motion simplifies animations, allowing smooth, performant effects like collapsible answers and fade-ins." },
  { question: "What is GSAP best for?", answer: "GSAP excels at creating complex animations, like hover scaling, with precise control and timing." },
  { question: "Why use Tailwind CSS?", answer: "Tailwind CSS speeds up styling with utility classes, ensuring consistent and responsive designs." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9f9f9] text-charcoal font-coolvetica py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl tracking-wide capitalize">
            Frequently Asked Questions
          </h2>
          <p className="text-lg leading-relaxed font-satoshi">
            Curious about Neo-Brutalism or our implementation techniques? 
            Find answers to the most common questions below, or get in touch if 
            you have more!
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-6">
          {FAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-4 border-charcoal bg-yellow p-6 rounded-xl cursor-pointer hover:bg-red hover:text-charcoal transition-all duration-300"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between font-coolvetica items-center">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <span className="text-2xl font-black">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              <motion.p
                className={`mt-4 overflow-hidden text-base leading-relaxed font-satoshi ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
