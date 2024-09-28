import React from "react";

export default function Footer() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <footer
        style={{
          backgroundColor: "lightgray",
          textAlign: "center",
          padding: "1em",
        }}
      >
        <div>
          <text>Copyright @ Taylor A. 2024</text>
        </div>
      </footer>
    </div>
  );
}
