import React, { useState, useRef, useLayoutEffect } from 'react';
import './collapse.css';

interface CollapseProps {
  opened: boolean;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ opened, children }) => {
  const [shouldRender, setShouldRender] = useState(opened);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (opened) {
      setShouldRender(true);
    }
  }, [opened]);

  const handleTransitionEnd = () => {
    if (!opened) {
      setShouldRender(false);
    }
  };

  return (
    <div
      ref={contentRef}
      className={`collapse-content ${opened ? 'open' : 'closed'}`}
      onTransitionEnd={handleTransitionEnd}
    >
      {shouldRender && (
        <div className={`collapse-text ${opened ? 'fade-in' : 'fade-out'}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;