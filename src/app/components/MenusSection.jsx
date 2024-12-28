"use client"
import { motion } from 'framer-motion';

const MenuSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-coolvetica text-charcoal mb-4">
            Explore Our Full Menu
          </h2>
          <p className="text-lg font-satoshi text-charcoal leading-relaxed mb-6">
            Discover the wide variety of delicious Nigerian dishes we offer. From hearty main
            courses to delightful desserts, there's something for everyone. Download our full menu
            now and plan your next meal with us!
          </p>
          <a
            href="/menu.pdf"
            download
            className="bg-yellow text-charcoal font-satoshi font-semibold px-6 py-3 rounded shadow-lg hover:bg-charcoal hover:text-yellow transition-all"
          >
            Download Menu (PDF)
          </a>
        </motion.div>

        {/* Optional Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <img
            src="/menu-image.jpg"
            alt="Delicious Nigerian Dishes"
            className="rounded-lg shadow-lg object-cover h-[500px] w-[500px] border"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
