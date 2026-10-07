import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components are lazily loaded so Vite emits a separate chunk per route.
const Home           = lazy(() => import('./pages/Home'));
const Products       = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart           = lazy(() => import('./pages/Cart'));
const Checkout       = lazy(() => import('./pages/Checkout'));
const About          = lazy(() => import('./pages/About'));

// Minimal fallback shown while a route chunk is being fetched.
function PageLoader() {
  return (
    <div
      className="flex-1 flex items-center justify-center min-h-screen"
      role="status"
      aria-label="Loading page"
    >
      <span className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" aria-hidden="true" />
    </div>
  );
}

// Route-level page transition wrapper.
// Uses only opacity + translateY — no layout-affecting properties.
function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: shouldReduceMotion ? 0 : -8 },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// AnimatePresence keyed on pathname drives enter/exit per route change.
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/"             element={<Home />} />
            <Route path="/products"     element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart"         element={<Cart />} />
            <Route path="/checkout"     element={<Checkout />} />
            <Route path="/about"        element={<About />} />
            {/* Catch-all */}
            <Route path="*"             element={<Home />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main id="main-content" className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
