"use client";

export default function DisableContextMenu({ children }) {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </div>
  );
}
