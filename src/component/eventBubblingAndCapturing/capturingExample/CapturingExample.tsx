import React from "react";

const CapturingExample: React.FC = () => {
  const handleParentCapture = () => {
    console.log("👨 Parent Div Clicked (Capturing)");
  };

  const handleChildCapture = () => {
    console.log("🧒 Child Div Clicked (Capturing)");
  };

  return (
    <div
      onClickCapture={handleParentCapture}
      style={{
        padding: "30px",
        backgroundColor: "#ffe4b5",
        textAlign: "center",
      }}
    >
      Parent (Capturing)
      <div
        onClickCapture={handleChildCapture}
        style={{
          padding: "20px",
          marginTop: "10px",
          backgroundColor: "#ffcc99",
        }}
      >
        Child (Click Me)
      </div>
    </div>
  );
};

export default CapturingExample;
