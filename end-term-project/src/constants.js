export const CATEGORIES = ["All", "Fruits & Veggies", "Dairy", "Snacks", "Beverages", "Bakery"];

export const EMOJIS = ["🍎", "🥦", "🧃", "🍫", "🧂", "🥚", "🫙", "🍕", "🧁", "🍌", "🥛", "🍜"];

export const INITIAL_PRODUCTS = [
  { id: 1, name: "Fresh Bananas", category: "Fruits & Veggies", price: 49, unit: "1 dozen", emoji: "🍌", badge: "Organic", time: "8 mins" },
  { id: 2, name: "Amul Butter", category: "Dairy", price: 56, unit: "100g", emoji: "🧈", badge: "Bestseller", time: "10 mins" },
  { id: 3, name: "Lay's Classic", category: "Snacks", price: 20, unit: "26g pack", emoji: "🥔", badge: null, time: "8 mins" },
  { id: 4, name: "Tropicana Orange", category: "Beverages", price: 99, unit: "1L", emoji: "🍊", badge: "No Added Sugar", time: "10 mins" },
  { id: 5, name: "Whole Wheat Bread", category: "Bakery", price: 45, unit: "400g loaf", emoji: "🍞", badge: null, time: "12 mins" },
  { id: 6, name: "Cherry Tomatoes", category: "Fruits & Veggies", price: 79, unit: "250g", emoji: "🍅", badge: "Fresh Today", time: "8 mins" },
  { id: 7, name: "Amul Milk", category: "Dairy", price: 28, unit: "500ml", emoji: "🥛", badge: "Toned", time: "10 mins" },
  { id: 8, name: "Maggi Noodles", category: "Snacks", price: 14, unit: "70g pack", emoji: "🍜", badge: "2-min noodles", time: "8 mins" },
  { id: 9, name: "Red Bull Energy", category: "Beverages", price: 125, unit: "250ml can", emoji: "🥤", badge: null, time: "10 mins" },
  { id: 10, name: "Croissant", category: "Bakery", price: 35, unit: "1 piece", emoji: "🥐", badge: "Freshly Baked", time: "12 mins" },
  { id: 11, name: "Green Apples", category: "Fruits & Veggies", price: 149, unit: "4 pcs", emoji: "🍏", badge: "Imported", time: "8 mins" },
  { id: 12, name: "Amul Cheese Slices", category: "Dairy", price: 110, unit: "200g pack", emoji: "🧀", badge: "Bestseller", time: "10 mins" },
];

export const BADGE_COLORS = {
  "Organic":        { bg: "#d1fae5", text: "#065f46" },
  "Bestseller":     { bg: "#fef3c7", text: "#92400e" },
  "Fresh Today":    { bg: "#dbeafe", text: "#1e40af" },
  "Freshly Baked":  { bg: "#fce7f3", text: "#9d174d" },
  "Imported":       { bg: "#ede9fe", text: "#5b21b6" },
  "Toned":          { bg: "#d1fae5", text: "#065f46" },
  "2-min noodles":  { bg: "#fee2e2", text: "#991b1b" },
  "No Added Sugar": { bg: "#d1fae5", text: "#065f46" },
};
