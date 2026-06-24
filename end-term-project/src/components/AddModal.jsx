import { EMOJIS } from "../constants";

const inputStyle = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1.5px solid #e5e7eb",
  fontSize: 14,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default function AddModal({
  newItem,
  setNewItem,
  onAdd,
  onClose,
  categories,
}) {
  const isValid = newItem.name && newItem.price && newItem.unit;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 200,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: 20,
          padding: 24,
          width: 340,
          zIndex: 201,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>
            Add New Item
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "#f5f5f5",
              border: "none",
              borderRadius: "50%",
              width: 30,
              height: 30,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {EMOJIS.map((e) => (
              <button
                key={e}
                onClick={() => setNewItem((p) => ({ ...p, emoji: e }))}
                style={{
                  fontSize: 20,
                  background: newItem.emoji === e ? "#f0fdf4" : "#f9fafb",
                  border:
                    newItem.emoji === e
                      ? "2px solid #22c55e"
                      : "1.5px solid #eee",
                  borderRadius: 8,
                  width: 38,
                  height: 38,
                  cursor: "pointer",
                }}
              >
                {e}
              </button>
            ))}
          </div>

          <input
            value={newItem.name}
            onChange={(e) =>
              setNewItem((p) => ({ ...p, name: e.target.value }))
            }
            placeholder="Product name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
          />

          <select
            value={newItem.category}
            onChange={(e) =>
              setNewItem((p) => ({ ...p, category: e.target.value }))
            }
            style={inputStyle}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
              gap: 10,
            }}
          >
            <input
              value={newItem.price}
              onChange={(e) =>
                setNewItem((p) => ({ ...p, price: e.target.value }))
              }
              placeholder="Price (₹)"
              type="number"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
            <input
              value={newItem.unit}
              onChange={(e) =>
                setNewItem((p) => ({ ...p, unit: e.target.value }))
              }
              placeholder="Unit (e.g. 500g)"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>

          <button
            onClick={onAdd}
            disabled={!isValid}
            style={{
              background: isValid ? "#22c55e" : "#e5e7eb",
              color: isValid ? "#fff" : "#aaa",
              border: "none",
              borderRadius: 12,
              padding: "12px",
              fontSize: 15,
              fontWeight: 700,
              cursor: isValid ? "pointer" : "not-allowed",
            }}
          >
            Add to Store
          </button>
        </div>
      </div>
    </>
  );
}
