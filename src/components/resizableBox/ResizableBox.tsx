import React, { useRef, useState, useEffect } from 'react';
import './resizableBox.css';

interface ResizableBoxProps {
  children: React.ReactNode;
}

const ResizableBox: React.FC<ResizableBoxProps> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 200, height: 200 }); // Начальные размеры

  useEffect(() => {
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        if (entry.target === boxRef.current) {
          setSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (boxRef.current) {
      resizeObserver.observe(boxRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={boxRef} className="resizable-box" style={{ width: size.width, height: size.height }}>
      {children}
      <div className="resizable-box-handle" />
    </div>
  );
};

export default ResizableBox;
