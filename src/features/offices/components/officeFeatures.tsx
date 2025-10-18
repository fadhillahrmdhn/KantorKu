import Image from 'next/image';
import React from 'react';

const FEATURES_MAP = [
  {
    label: 'Global Event',
    description: 'Startup Contest',
    icon: '/assets/images/icons/cup.svg',
  },
  {
    label: 'Privacy',
    description: 'For Yourself',
    icon: '/assets/images/icons/security-user.svg',
  },
  {
    label: 'Free Move',
    description: 'Anytime 24/7',
    icon: '/assets/images/icons/group.svg',
  },
  {
    label: 'Sustainbility',
    description: 'Long-term Goals',
    icon: '/assets/images/icons/home-trend-up.svg',
  },
  {
    label: 'Extra Snacks',
    description: 'Work-Life Balance',
    icon: '/assets/images/icons/coffee.svg',
  },
  {
    label: 'Compact',
    description: 'Good for Focus',
    icon: '/assets/images/icons/3dcube.svg',
  },
];

const OfficeFeatures = ({ features }: { features: string[] }) => {
  return (
    <div className="grid grid-cols-2 md:!grid-cols-3 gap-x-5 gap-y-[30px]">
      {features.map((feature) => {
        const matched = FEATURES_MAP.find((f) => f.label === feature);
        if(!matched) return null;
          return (
            <div key={feature} className="flex items-center">
              <Image width={34} height={34} src={matched.icon} alt={`${matched.label} icon`}  />
              <div className="flex flex-col gap-[2px] ml-1">
                <p className="font-bold text-base sm:text-lg leading-tight sm:leading-[24px]">{matched.label}</p>
                <p className="text-sm leading-[21px]">{matched.description}</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default OfficeFeatures;
