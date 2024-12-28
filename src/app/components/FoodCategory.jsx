import { motion } from 'framer-motion';

const FoodCategory = ({ title, items, color }) => {
  const colors = {
    yellow: 'bg-[#FFAF00] text-white',
    charcoal: 'bg-charcoal text-white',
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fborder border-charcoal rounded-lg overflow-hidden shadow-lg ${colors[color]}`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-coolvetica">{title}</h2>
      </div>
      <ul className="p-4 bg-[#F9F9F9] text-charcoal font-satoshi">
        {items.map((item, index) => (
          <li key={index} className="border-b border-red py-2 last:border-none">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FoodCategory;
