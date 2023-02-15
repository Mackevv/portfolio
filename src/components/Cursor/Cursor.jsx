import React, { useEffect, useState } from 'react';
import "./Cursor.css";

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ cursorX: 0, cursorY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ cursorX: e.clientX, cursorY: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { cursorX, cursorY } = cursorPosition;

  return (
    <div
      className="cursor"
      style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
    />
  );
}

export default Cursor;