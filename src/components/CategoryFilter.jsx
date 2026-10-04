import { categories } from '../data/products';

export default function CategoryFilter({ selected, onChange }) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          aria-pressed={selected === cat}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 cursor-pointer ${
            selected === cat
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
