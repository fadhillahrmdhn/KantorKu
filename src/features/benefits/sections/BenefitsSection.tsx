import React from 'react';
import Image from 'next/image';
import { benefits } from '../data/benefits.mock';


const BenefitsSection = () => {
  return (
    <section id="Benefits" className="w-full max-w-[1130px] mx-auto px-4 mt-20 lg:mt-[100px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[100px]">
        <h2 className="font-bold text-[28px] lg:!text-[32px] leading-tight lg:leading-[48px] text-center lg:text-left text-nowrap">
          We Might Good <br /> For Your Business
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-center gap-4">
              <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                <Image width={34} height={34} src={benefit.icon} alt={`${benefit.title} icon`} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg leading-[27px]">{benefit.title}</p>
                <p className="text-sm leading-[24px]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
