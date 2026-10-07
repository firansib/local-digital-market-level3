import { motion, useReducedMotion } from 'framer-motion';
import ProductCard from './ProductCard';

// Container orchestrates the staggered entrance of child cards.
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export default function ProductGrid({ products }) {
  const shouldReduceMotion = useReducedMotion();

  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-6xl mb-4" aria-hidden="true">🔍</p>
        <h2 className="text-lg font-bold text-gray-700 mb-2">No products found</h2>
        <p className="text-gray-400 text-sm">Try a different search term or category.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      variants={shouldReduceMotion ? {} : gridVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </motion.div>
  );
}
