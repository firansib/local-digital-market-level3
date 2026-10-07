import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const featured = products.slice(0, 6);

const categoryItems = [
  { label: 'Education',   emoji: '📚' },
  { label: 'E-Books',     emoji: '📖' },
  { label: 'Templates',   emoji: '📊' },
  { label: 'Programming', emoji: '💻' },
  { label: 'Design',      emoji: '🎨' },
  { label: 'Business',    emoji: '📈' },
];

const benefits = [
  { emoji: '🇪🇹', title: 'Local Creators',           desc: 'Products made by talented Ethiopian creators who understand your needs.' },
  { emoji: '💰', title: 'Affordable Prices',          desc: 'Quality digital products at fair prices — starting from 150 ETB.' },
  { emoji: '⚡', title: 'Instant Access',              desc: 'Download your purchase immediately after completing checkout.' },
  { emoji: '🛒', title: 'Simple Shopping Experience', desc: 'Browse, add to cart, and checkout in just a few clicks.' },
];

// Shared fade-up variant used by multiple sections
function useFadeUp(shouldReduceMotion) {
  return {
    hidden:  { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };
}

// Stagger container
const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = useFadeUp(shouldReduceMotion);

  // Hero text items stagger in on mount
  const heroVariants = {
    hidden:  { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.1 },
    }),
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <motion.span
              custom={0}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider"
            >
              Local Digital Marketplace
            </motion.span>
            <motion.h1
              custom={1}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5"
            >
              Discover Local<br className="hidden md:block" />
              <span className="text-orange-400"> Digital Products</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-blue-100 text-base sm:text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              Find study materials, e-books, templates, guides, and digital resources
              created for your needs.
            </motion.p>
            <motion.div
              custom={3}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <Link to="/products">
                <Button size="lg" className="bg-white! text-blue-700! hover:bg-blue-50! focus:ring-white!">
                  Browse Products
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-white! text-white! hover:bg-white/10! focus:ring-white!">
                  Explore Marketplace
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-8xl md:text-9xl select-none shrink-0"
            aria-hidden="true"
          >
            🛍️
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100" aria-label="Marketplace stats">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          variants={shouldReduceMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            { value: '10+',  label: 'Digital Products' },
            { value: '6',    label: 'Categories' },
            { value: '100%', label: 'Local Creators' },
            { value: 'Demo', label: 'Safe Checkout' },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              variants={shouldReduceMotion ? {} : fadeUp}
            >
              <p className="text-2xl font-extrabold text-blue-600">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Categories ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Browse by Category</h2>
          <p className="text-gray-500 text-sm mb-6">Find exactly what you need.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={shouldReduceMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categoryItems.map(({ label, emoji }) => (
            <motion.div
              key={label}
              variants={shouldReduceMotion ? {} : fadeUp}
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.18 } }}
            >
              <Link
                to={`/products?category=${encodeURIComponent(label)}`}
                className="flex flex-col items-center gap-2 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all duration-200 group"
                aria-label={`Browse ${label}`}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200" aria-hidden="true">{emoji}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 text-center">{label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Featured Products ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between mb-6"
            variants={shouldReduceMotion ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Featured Products</h2>
              <p className="text-gray-500 text-sm mt-1">Hand-picked top sellers.</p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-blue-600 hover:underline">
              View all →
            </Link>
          </motion.div>
          {/* Staggered featured cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={shouldReduceMotion ? {} : { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose LocalMarket ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
            Why Choose LocalMarket?
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Built for Ethiopian students, professionals, and creators.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={shouldReduceMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map(({ emoji, title, desc }) => (
            <motion.div
              key={title}
              variants={shouldReduceMotion ? {} : fadeUp}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-4xl mb-3 block" aria-hidden="true">{emoji}</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-14">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to find your next resource?</h2>
          <p className="text-blue-100 text-sm md:text-base mb-8 max-w-md mx-auto">
            Explore all 10 digital products crafted by talented Ethiopian creators.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white! text-blue-700! hover:bg-blue-50! focus:ring-white!">
              Shop Now →
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
