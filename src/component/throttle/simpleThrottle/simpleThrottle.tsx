import { useState, useRef } from "react";

export default function SimpleThrottle() {
  const [count, setCount] = useState(0);
  const lastClickTime = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current < 1000) {
      return; // Ignore clicks within 1 second
    }
    lastClickTime.current = now;
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h3>Throttled Count: {count}</h3>
      <button onClick={handleClick}>Click Me (Throttle 1s)</button>
    </div>
  );
}
