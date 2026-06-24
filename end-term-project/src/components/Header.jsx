export default function Header({ search, onSearchChange, onAddClick }) {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 16, height: 64 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                background: "#22c55e",
                borderRadius: 10,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              ⚡
            </div>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#1a1a1a",
                letterSpacing: "-0.5px",
              }}
            >
              QuickCart
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: 20,
              padding: "4px 12px",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>
              📍 Delivery in 10 mins
            </span>
          </div>

          <div style={{ flex: 1, position: "relative", maxWidth: 420 }}>
            <span
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 16,
              }}
            >
              🔍
            </span>
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for groceries, snacks..."
              style={{
                width: "100%",
                padding: "9px 12px 9px 36px",
                border: "1.5px solid #e5e7eb",
                borderRadius: 24,
                fontSize: 14,
                outline: "none",
                background: "#fafafa",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>

          <button
            onClick={onAddClick}
            style={{
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: 20,
              padding: "8px 18px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            + Add Item
          </button>
        </div>
      </div>
    </header>
  );
}
