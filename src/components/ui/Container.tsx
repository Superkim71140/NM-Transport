import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};
