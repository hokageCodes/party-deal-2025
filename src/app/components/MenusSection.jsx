"use client"
import { motion } from 'framer-motion';

const MenuSection = () => {
  return (
    <div className="py-16 px-8 bg-[#f9f9f9] text-charcoal">
      <h2 className="text-4xl font-satoshi font-bold text-center mb-10">Nigerian Foods Menu</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Main Course */}
        <motion.div
          className="p-6 bg-yellow rounded-lg shadow-lg border border-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-satoshi font-semibold mb-4">Main Course</h3>
          <ul className="space-y-4">
            <li>Jollof Rice</li>
            <li>Egusi Soup with Semo</li>
            <li>Amala with Ewedu and Gbegiri</li>
            <li>Ofada Rice with Ayamase Sauce</li>
          </ul>
        </motion.div>

        {/* Side Dishes */}
        <motion.div
          className="p-6 bg-yellow rounded-lg shadow-lg border border-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-satoshi font-semibold mb-4">Side Dishes</h3>
          <ul className="space-y-4">
            <li>Moi Moi</li>
            <li>Akara</li>
            <li>Suya</li>
            <li>Peppered Snail</li>
          </ul>
        </motion.div>

        {/* Appetizers */}
        <motion.div
          className="p-6 bg-yellow rounded-lg shadow-lg border border-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-2xl font-satoshi font-semibold mb-4">Appetizers</h3>
          <ul className="space-y-4">
            <li>Pepper Soup</li>
            <li>Gizdodo</li>
            <li>Small Chops</li>
            <li>Asun</li>
          </ul>
        </motion.div>

        {/* Desserts */}
        <motion.div
          className="p-6 bg-yellow rounded-lg shadow-lg border border-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-satoshi font-semibold mb-4">Desserts</h3>
          <ul className="space-y-4">
            <li>Puff-Puff</li>
            <li>Buns</li>
            <li>Chin Chin</li>
            <li>Kuli Kuli</li>
          </ul>
        </motion.div>

        {/* Drinks */}
        <motion.div
          className="p-6 bg-yellow rounded-lg shadow-lg border border-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-satoshi font-semibold mb-4">Drinks</h3>
          <ul className="space-y-4">
            <li>Zobo</li>
            <li>Palm Wine</li>
            <li>Chapman</li>
            <li>Kunu</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default MenuSection;
