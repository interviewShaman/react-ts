import React from "react";
import { useToggle } from "./useToggle";

const SimpleCustomHook: React.FC = () => {
  const [isOpen, toggleOpen] = useToggle({ initialValue: true });

  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? "Hide" : "Show"} Panel</button>
      {isOpen && <p>This is a toggled panel.</p>}
    </div>
  );
};

export default SimpleCustomHook;
