export default function SearchBar({ value, onChange, placeholder = 'Search products…' }) {
  return (
    <div className="relative">
      <label htmlFor="product-search" className="sr-only">Search products</label>
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400 text-base" aria-hidden="true">
        🔍
      </span>
      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>
  );
}
