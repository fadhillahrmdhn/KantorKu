import React from 'react';
import Image from 'next/image';
import OfficeSpaceCard from '../components/officeSpaceCard';
import { officeSpaces } from '../data/officeSpaces.mock';

const OfficeSection = () => {
  return (
    <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
      <h2 className="font-bold text-[28px] sm:text-[32px] leading-tight sm:leading-[48px] text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] px-6 lg:!px-0">
        {officeSpaces.map((office) => (
          <OfficeSpaceCard key={office.id} officeSpace={office} />
        ))}
      </div>
    </section>
  );
};

export default OfficeSection;
