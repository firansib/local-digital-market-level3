import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <span className="text-xl" aria-hidden="true">🛍️</span>
              <span className="font-extrabold text-white text-base">
                Local<span className="text-blue-400">Market</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your local platform for quality digital products — study materials, e-books, templates, and more.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer — Quick Links">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/',         label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/about',    label: 'About' },
                { to: '/cart',     label: 'Cart' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors duration-150">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories */}
          <nav aria-label="Footer — Categories">
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2 text-sm">
              {['Education', 'E-Books', 'Templates', 'Programming', 'Design', 'Business'].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat)}`}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 hello@localmarket.et</li>
              <li>📍 Addis Ababa, Ethiopia</li>
              <li>📞 +251 911 000 000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p>© 2026 LocalMarket. Built for Codveda Front-End Development Internship — Level 2.</p>
        </div>
      </div>
    </footer>
  );
}
