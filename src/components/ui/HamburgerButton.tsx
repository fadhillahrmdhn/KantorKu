import React from 'react';

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-20 md:hidden" aria-label="Toggle menu">
      <div className={`w-6 h-0.5 bg-[#000929] rounded-md transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
      <div className={`w-6 h-0.5 bg-[#000929] rounded-md transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`w-6 h-0.5 bg-[#000929] rounded-md transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
    </button>
  );
};

export default HamburgerButton;
