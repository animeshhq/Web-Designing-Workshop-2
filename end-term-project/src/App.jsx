import { useState } from "react";
import { CATEGORIES, INITIAL_PRODUCTS } from "./constants";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import AddModal from "./components/AddModal";

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Snacks",
    price: "",
    unit: "",
    emoji: "🍎",
  });
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2000);
  };

  const filtered = products.filter((p) => {
    const inCat = category === "All" || p.category === category;
    const inSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return inCat && inSearch;
  });

  const handleAddProduct = () => {
    if (!newItem.name || !newItem.price || !newItem.unit) return;
    setProducts((prev) => [
      ...prev,
      {
        ...newItem,
        id: Date.now(),
        price: Number(newItem.price),
        time: "10 mins",
        badge: null,
      },
    ]);
    setNewItem({
      name: "",
      category: "Snacks",
      price: "",
      unit: "",
      emoji: "🍎",
    });
    setShowAddModal(false);
    showToast("✅ Item added to store!");
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: "#f5f5f0",
        minHeight: "100vh",
      }}
    >
      {toastMsg && (
        <div
          style={{
            position: "fixed",
            top: 24,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1a1a1a",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 24,
            fontSize: 14,
            zIndex: 9999,
            fontWeight: 500,
          }}
        >
          {toastMsg}
        </div>
      )}

      <Header
        search={search}
        onSearchChange={setSearch}
        onAddClick={() => setShowAddModal(true)}
      />

      <div
        style={{
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          padding: "28px 20px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", color: "#fff" }}>
          <p
            style={{ margin: 0, fontSize: 13, opacity: 0.85, fontWeight: 500 }}
          >
            India's fastest delivery
          </p>
          <h1
            style={{
              margin: "4px 0 8px",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            Groceries in{" "}
            <span
              style={{
                background: "#fff",
                color: "#16a34a",
                borderRadius: 6,
                padding: "0 8px",
              }}
            >
              10 minutes
            </span>
          </h1>
          <p style={{ margin: 0, fontSize: 14, opacity: 0.8 }}>
            Free delivery on orders above ₹199 · No hidden charges
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px" }}>
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 4,
            marginBottom: 24,
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                flexShrink: 0,
                padding: "7px 16px",
                borderRadius: 20,
                border: category === cat ? "none" : "1.5px solid #e5e7eb",
                background: category === cat ? "#1a1a1a" : "#fff",
                color: category === cat ? "#fff" : "#444",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            {search
              ? `Results for "${search}"`
              : category === "All"
                ? "All Products"
                : category}
          </h2>
          <span style={{ fontSize: 13, color: "#888" }}>
            {filtered.length} items
          </span>
        </div>

        {filtered.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
            <p style={{ fontSize: 16, fontWeight: 500 }}>No items found</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: 16,
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {showAddModal && (
        <AddModal
          newItem={newItem}
          setNewItem={setNewItem}
          onAdd={handleAddProduct}
          onClose={() => setShowAddModal(false)}
          categories={CATEGORIES.filter((c) => c !== "All")}
        />
      )}
    </div>
  );
}
