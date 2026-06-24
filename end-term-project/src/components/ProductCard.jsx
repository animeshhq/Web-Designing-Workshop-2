import { useState } from "react";
import { BADGE_COLORS } from "../constants";

export default function ProductCard({ product }) {
  const badge = product.badge && BADGE_COLORS[product.badge];
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #f0f0f0",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: "#f9fafb",
            borderRadius: 12,
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
          }}
        >
          {product.emoji}
        </div>
        {badge && (
          <span
            style={{
              position: "absolute",
              top: 6,
              left: 6,
              background: badge.bg,
              color: badge.text,
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 7px",
              borderRadius: 10,
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div>
        <p
          style={{
            margin: "0 0 2px",
            fontSize: 14,
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </p>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>{product.unit}</p>
      </div>

      <span
        style={{
          fontSize: 12,
          background: "#f0fdf4",
          color: "#16a34a",
          padding: "2px 7px",
          borderRadius: 10,
          fontWeight: 500,
          alignSelf: "flex-start",
        }}
      >
        ⏱ {product.time}
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>
          ₹{product.price}
        </span>
        <button
          onClick={handleAdd}
          style={{
            background: added ? "#22c55e" : "#fff",
            border: "1.5px solid #22c55e",
            color: added ? "#fff" : "#22c55e",
            borderRadius: 8,
            padding: "5px 16px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          {added ? "✓ Added" : "Add"}
        </button>
      </div>
    </div>
  );
}
