"use client";
import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, src: "/assets/img/party4.jpg", alt: "Delicious Pasta Dish" },
  { id: 2, src: "/assets/img/party1.jpg", alt: "Event Table Setup" },
  { id: 3, src: "/assets/img/party4.jpg", alt: "Gourmet Dessert" },
  { id: 4, src: "/assets/img/party2.jpg", alt: "Wedding Event Layout" },
  { id: 5, src: "/assets/img/party1.jpg", alt: "Birthday Party Decorations" },
  { id: 6, src: "/assets/img/party3.jpg", alt: "Grilled Steak Platter" },
  { id: 7, src: "/assets/img/party5.jpg", alt: "Colorful Appetizer Spread" },
  { id: 8, src: "/assets/img/corp.jpg", alt: "Corporate Event Ambiance" },
];

export default function OurGallery() {
  return (
    <section className="bg-[#f9f9f9] text-charcoal font-coolvetica py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl tracking-wide capitalize inline-block pb-2">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg font-satoshi leading-relaxed max-w-[600px]">
            Feast your eyes on our culinary creations and beautifully organized events. 
            Bold flavors, bold designs, bold experiences!
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden border-4 border-charcoal bg-yellow p-2 rounded-lg hover:bg-red transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-lg">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
