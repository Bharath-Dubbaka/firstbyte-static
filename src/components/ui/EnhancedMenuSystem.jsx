import React, { useState } from "react";
import { Star, Clock, Flame, Coffee, Utensils, X } from "lucide-react";

// Static menu data — no API calls
const staticMenuData = [
  {
    section: "Small Bytes",
    items: [
      {
        _id: "1",
        name: "Fries Before Guys",
        description:
          "Crispy golden fries seasoned with our secret spice blend, served with dipping sauce.",
        price: 149,
        rating: 4.7,
        preparationTime: 10,
        spiceLevel: 1,
        servings: "1-2",
        isVegetarian: true,
      },
      {
        _id: "2",
        name: "Samosa Chaat",
        description:
          "Flaky samosas topped with tangy chutneys, yogurt and sev.",
        price: 129,
        rating: 4.5,
        preparationTime: 8,
        spiceLevel: 2,
        servings: "1",
        isVegetarian: true,
      },
      {
        _id: "3",
        name: "Garlic Bread",
        description:
          "Toasted bread with herb-infused garlic butter and melted cheese.",
        price: 99,
        rating: 4.3,
        preparationTime: 7,
        spiceLevel: 0,
        servings: "2",
        isVegetarian: true,
      },
      {
        _id: "4",
        name: "Veg Spring Rolls",
        description:
          "Crispy rolls stuffed with seasoned vegetables and glass noodles.",
        price: 139,
        rating: 4.4,
        preparationTime: 12,
        spiceLevel: 1,
        servings: "2",
        isVegetarian: true,
      },
    ],
  },
  {
    section: "Gourmet Salads",
    items: [
      {
        _id: "5",
        name: "Greek Garden Bowl",
        description:
          "Fresh greens, feta, olives, cucumber and cherry tomatoes with a lemon-herb vinaigrette.",
        price: 199,
        rating: 4.6,
        preparationTime: 8,
        spiceLevel: 0,
        servings: "1",
        isVegetarian: true,
      },
      {
        _id: "6",
        name: "Quinoa Power Salad",
        description:
          "Nutritious quinoa with roasted veggies, chickpeas and tahini dressing.",
        price: 219,
        rating: 4.5,
        preparationTime: 10,
        spiceLevel: 0,
        servings: "1",
        isVegetarian: true,
      },
    ],
  },
  {
    section: "Comfort Meals",
    items: [
      {
        _id: "7",
        name: "Dal Tadka Rice Bowl",
        description:
          "Slow-cooked yellow dal with aromatic tadka, served with steamed basmati rice.",
        price: 179,
        rating: 4.8,
        preparationTime: 15,
        spiceLevel: 2,
        servings: "1-2",
        isVegetarian: true,
      },
      {
        _id: "8",
        name: "Paneer Butter Masala",
        description:
          "Cottage cheese cubes in a rich, creamy tomato-butter gravy.",
        price: 229,
        rating: 4.9,
        preparationTime: 20,
        spiceLevel: 2,
        servings: "1-2",
        isVegetarian: true,
      },
      {
        _id: "9",
        name: "Pav Bhaji",
        description:
          "Bombay-style spiced vegetable mash served with buttered pavs and onions.",
        price: 199,
        rating: 4.6,
        preparationTime: 15,
        spiceLevel: 3,
        servings: "2-3",
        isVegetarian: true,
      },
      {
        _id: "10",
        name: "Curd Rice",
        description:
          "Tempered curd rice with mustard seeds, curry leaves and pomegranate.",
        price: 149,
        rating: 4.4,
        preparationTime: 8,
        spiceLevel: 0,
        servings: "1",
        isVegetarian: true,
      },
    ],
  },
  {
    section: "Beverages",
    items: [
      {
        _id: "11",
        name: "Cold Brew Coffee",
        description:
          "Smooth, bold cold brew steeped for 18 hours. Rich, never bitter.",
        price: 129,
        rating: 4.7,
        preparationTime: 3,
        spiceLevel: 0,
        servings: "1",
        isVegetarian: true,
      },
      {
        _id: "12",
        name: "Masala Chai",
        description:
          "Aromatic spiced tea brewed with ginger, cardamom and cinnamon.",
        price: 79,
        rating: 4.8,
        preparationTime: 5,
        spiceLevel: 1,
        servings: "1",
        isVegetarian: true,
      },
      {
        _id: "13",
        name: "Mango Lassi",
        description:
          "Thick, creamy yogurt drink blended with fresh Alphonso mango pulp.",
        price: 109,
        rating: 4.9,
        preparationTime: 4,
        spiceLevel: 0,
        servings: "1",
        isVegetarian: true,
      },
    ],
  },
];

function SpicyIndicator({ level }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, i) => (
        <Flame
          key={i}
          className={`w-3 h-3 ${i < level ? "text-red-500" : "text-gray-300"}`}
          fill={i < level ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

const MenuDetailModal = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-8 bg-white rounded-2xl shadow-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-2">
          {item.isVegetarian && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
              🌿 Vegetarian
            </span>
          )}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 italic font-elegant mt-2">
          {item.name}
        </h2>

        <div className="flex items-center my-3 space-x-4">
          <span className="text-2xl font-bold text-amber-700">
            ₹{item.price}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            {item.rating}
          </div>
          {item.spiceLevel > 0 && <SpicyIndicator level={item.spiceLevel} />}
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

        <div className="flex gap-4 text-sm text-gray-500 border-t pt-4">
          {item.servings && (
            <span className="flex items-center gap-1">
              <Utensils className="w-4 h-4" /> Serves {item.servings}
            </span>
          )}
          {item.preparationTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {item.preparationTime} min
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

function ElegantMenuItem({ item, onShowDetails }) {
  return (
    <div
      className="group border-b border-gray-200 py-6 hover:bg-amber-50/30 transition-all duration-300 cursor-pointer"
      onClick={() => onShowDetails(item)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-xl font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
              {item.name}
            </h4>
            {item.isVegetarian && (
              <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">
                VEG
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-3 max-w-md leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {item.servings && (
              <span className="flex items-center gap-1">
                <Utensils className="w-3.5 h-3.5" /> {item.servings}
              </span>
            )}
            {item.preparationTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {item.preparationTime} min
              </span>
            )}
            {item.spiceLevel > 0 && <SpicyIndicator level={item.spiceLevel} />}
            {item.rating && (
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                {item.rating}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 ml-8">
          <span className="text-2xl font-semibold text-gray-800 min-w-[80px] text-right">
            ₹{item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedMenuSystem() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL MENU");

  const categories = [
    "ALL MENU",
    ...staticMenuData.map((g) => g.section.toUpperCase()),
  ];

  const filteredMenu =
    activeCategory === "ALL MENU"
      ? staticMenuData
      : staticMenuData.filter(
          (g) => g.section.toUpperCase() === activeCategory,
        );

  return (
    <section className="bg-gradient-to-br from-stone-50 to-white pt-16 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-3">
            Special Menu
          </h2>
          <p className="text-gray-600 max-w-md leading-relaxed">
            Popular café delights — crafted with fresh ingredients and served
            with love.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex gap-8 mb-12 border-b border-gray-200 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-4 font-medium text-sm tracking-wide transition-all duration-300 relative whitespace-nowrap ${
                activeCategory === cat
                  ? "text-amber-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700" />
              )}
            </button>
          ))}
        </div>

        {/* Detail Modal */}
        <MenuDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

        {/* Menu Content */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="space-y-12">
            {filteredMenu.map((group, idx) => (
              <div key={idx}>
                {activeCategory === "ALL MENU" && (
                  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-amber-700/20">
                    {group.section}
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {group.items.map((item, i) => (
                    <ElegantMenuItem
                      key={item._id || i}
                      item={item}
                      onShowDetails={setSelectedItem}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-sm mt-8 italic">
          Click on any item to see more details · Prices are inclusive of all
          taxes
        </p>
      </div>
    </section>
  );
}
