import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import heroWebp from '../assets/hero.webp';

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden:  { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-extrabold">About LocalMarket</h1>
          <p className="text-blue-100 text-sm mt-1">A platform built for local creators and learners.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col gap-10">

        {/* Mission */}
        <motion.section
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            LocalMarket is a simple, accessible digital marketplace built to connect Ethiopian creators
            with students, professionals, and learners who need quality digital resources at affordable prices.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            We believe that great study materials, e-books, templates, and digital tools should be
            accessible to everyone — no matter where you are in Ethiopia.
          </p>
        </motion.section>

        {/* Values — staggered cards */}
        <section>
          <motion.h2
            className="text-xl font-extrabold text-gray-900 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            What We Stand For
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={shouldReduceMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              { emoji: '🇪🇹', title: 'Local First',     desc: 'Every product is created by talented Ethiopian creators who understand the local context and needs.' },
              { emoji: '💡', title: 'Accessibility',     desc: 'We keep prices affordable so that high-quality digital resources are within reach for everyone.' },
              { emoji: '⚡', title: 'Instant Delivery',  desc: 'Digital products are delivered instantly — no waiting, no shipping, no delays.' },
              { emoji: '🤝', title: 'Creator Support',   desc: 'We empower local creators to share their knowledge and earn from their expertise.' },
            ].map(({ emoji, title, desc }) => (
              <motion.div
                key={title}
                variants={shouldReduceMotion ? {} : fadeUp}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4"
              >
                <span className="text-3xl shrink-0" aria-hidden="true">{emoji}</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Project note */}
        <motion.section
          className="bg-blue-50 rounded-2xl border border-blue-100 p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Optimized WebP illustration — below the fold, lazy loaded */}
            <img
              src={heroWebp}
              alt="Digital marketplace product illustration"
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
              className="w-24 h-24 object-contain shrink-0 select-none"
            />
            <div>
              <h2 className="text-lg font-extrabold text-blue-900 mb-3">About This Project</h2>
              <p className="text-blue-700 text-sm leading-relaxed mb-3">
                This project was built as part of the <strong>Codveda Front-End Development Internship — Level 2</strong>.
                It demonstrates a complete React Single Page Application using React Router, Context API for
                state management, and Tailwind CSS for responsive design.
              </p>
              <p className="text-blue-600 text-xs">
                All products, prices, and payment methods shown are for demonstration purposes only.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link to="/products">
            <Button size="lg">Browse All Products →</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
