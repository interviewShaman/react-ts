import React from "react";

const BubblingExample: React.FC = () => {
  const handleParentClick = () => {
    console.log("👨 Parent Div Clicked (Bubbling)");
  };

  const handleChildClick = () => {
    console.log("🧒 Child Div Clicked (Bubbling)");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{
        padding: "30px",
        backgroundColor: "#d1f7c4",
        textAlign: "center",
      }}
    >
      Parent (Bubbling)
      <div
        onClick={handleChildClick}
        style={{
          padding: "20px",
          marginTop: "10px",
          backgroundColor: "#a5e0a5",
        }}
      >
        Child (Click Me)
      </div>
    </div>
  );
};

export default BubblingExample;
