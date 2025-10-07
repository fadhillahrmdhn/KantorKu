import Image from 'next/image';
import React from 'react';

const OfficeFeatures = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">

      <div className="flex items-center gap-4">
        <Image width={34} height={34} src="/assets/images/icons/security-user.svg" alt="icon" />
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold text-lg leading-[24px]">Privacy</p>
          <p className="text-sm leading-[21px]">For Yourself</p>
        </div>
      </div>
      
    </div>
  );
};

export default OfficeFeatures;
