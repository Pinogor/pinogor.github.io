import React from 'react';
import './collapse.css';

interface CollapseProps {
  opened: boolean;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ opened, children }) => {
  return (
    <div className={`collapse-content ${opened ? 'open' : 'closed'}`}>
      <div className={`collapse-text ${opened ? 'fade-in' : 'fade-out'}`}>{children}</div>
    </div>
  );
};

export default Collapse;
