import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <section id="Hero-Banner" className=" relative flex h-[720px] -mb-[93px] px-5 lg:!px-0">
        <div id="Hero-Text" className=" relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-5 sm:!p-10  gap-[30px] bg-white mt-[70px] mx-auto lg:!ml-[calc((100%-1130px)/2)]  z-9">
          <div className="flex items-center w-fit rounded-full py-2 px-3 sm:!px-4 gap-[10px] bg-[#000929]">
            <Image width={20} height={20} src="/assets/images/icons/crown-white.svg" alt="icon" />
            <span className="font-semibold text-sm sm:!text-base text-white">We’ve won top productivity 500 fortunes</span>
          </div>
          <h1 className="font-extrabold text-[32px] sm:!text-[50px] leading-tight sm:!leading-[60px]">
            All Great Offices.
            <br />
            Grow Your Business.
          </h1>
          <p className="text-lg leading-8 text-[#000929]">Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik dan sehat dalam tumbuhkan karir.</p>
          <div className="flex flex-col sm:!flex-row items-center gap-5">
            <a href="#" className="w-full sm:!w-auto flex items-center justify-center rounded-full p-4 sm:!p-[20px_26px] gap-3 bg-[#0D903A]">
              <Image width={30} height={30} src="/assets/images/icons/slider-horizontal-white.svg" alt="icon" />
              <span className="font-bold text-base sm:!text-xl leading-[30px] text-[#F7F7FD]">Explore Now</span>
            </a>
            <a href="#" className="w-full sm:!w-auto flex items-center justify-center rounded-full border border-[#000929] p-4 sm:!p-[20px_26px] gap-3 bg-white">
              <Image width={30} height={30} src="/assets/images/icons/video-octagon.svg" alt="icon" />
              <span className="font-semibold text-base sm:!text-xl leading-[30px]">Watch Story</span>
            </a>
          </div>
        </div>
        <div id="Hero-Image" className="absolute right-0 w-[100%] lg:w-[70%] h-[720px] rounded-bl-[40px] overflow-hidden">
          <Image src="/assets/images/backgrounds/banner.webp" fill style={{ objectFit: 'cover' }} alt="hero background" priority />
        </div>
      </section>
      <div className="flex flex-col pt-[150px] pb-10 px-5 md:px-10 lg:!px-[120px] gap-10 bg-[#0D903A]">
        <div className="logo-contianer flex items-center justify-center flex-wrap max-w-[1130px] mx-auto gap-[60px]">
          <Image width={80} height={38} src="/assets/images/logos/TESLA.svg" alt="clients logo" />
          <Image width={113} height={38} src="/assets/images/logos/Libra 2.svg" alt="clients logo" />
          <Image width={133} height={38} src="/assets/images/logos/Binance logo.svg" alt="clients logo" />
          <Image width={138} height={38} src="/assets/images/logos/Facebook 7.svg" alt="clients logo" />
          <Image width={148} height={31} src="/assets/images/logos/Microsoft 6.svg" alt="clients logo" />
        </div>
        <div className="grid grid-cols-2 lg:!grid-cols-4 justify-center gap-[50px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-xl leading-[30px] text-[#F7F7FD]">Comfortable Space</p>
            <p className="font-bold text-[38px] leading-[57px] text-white">580M+</p>
          </div>
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-xl leading-[30px] text-[#F7F7FD]">Startups Succeed</p>
            <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
          </div>
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
            <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
          </div>
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-xl leading-[30px] text-[#F7F7FD]">Supportive Events</p>
            <p className="font-bold text-[38px] leading-[57px] text-white">139M+</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
