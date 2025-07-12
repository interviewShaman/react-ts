import { useState, useEffect } from "react";

export default function SimpleDebounce() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 1000); // Debounce delay: 1 second

    return () => {
      clearTimeout(timer); // Clear previous timer if user types again
    };
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Debounced Value: {debouncedText}</p>
    </div>
  );
}
