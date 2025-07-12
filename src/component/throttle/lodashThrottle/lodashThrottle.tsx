import { useState, useMemo } from "react";
import throttle from "lodash/throttle";

export default function LodashThrottle() {
  const [count, setCount] = useState<number>(0);

  // Throttle the click handler to run at most once every 1000ms
  const throttledClick = useMemo(
    () =>
      throttle(() => {
        setCount((prev) => prev + 1);
        console.log("Throttled click triggered");
      }, 1000),
    []
  );

  return (
    <div>
      <h3>Throttled Count: {count}</h3>
      <button onClick={throttledClick}>Click Me (Throttle 1s)</button>
    </div>
  );
}
