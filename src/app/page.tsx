import BenefitsSection from '@/features/benefits/sections/BenefitsSection';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import CitiesSection from '@/features/cities/sections/CitiesSection';
import OfficeSection from '@/features/offices/sections/FreshSpaceSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <CitiesSection />
      <BenefitsSection/>
      <OfficeSection />
    </>
  );
}
