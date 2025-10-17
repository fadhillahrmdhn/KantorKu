import Navbar from '@/components/Navbar'
import { cities } from '@/features/cities/data/cities.mock'
import OfficeSpaceCard from '@/features/offices/components/officeSpaceCard'
import { officeSpaces } from '@/features/offices/data/officeSpaces.mock'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'


type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
 
  const city = cities.find((item) => item.slug === slug);
 
  if (!city) {
    return {
      title: 'City Not Found',
      description: 'The city you are looking for does not exist.',
    }
  }

  const fullImageUrl = city.image.startsWith('http')
    ? city.image
    : `https://example.com/${city.image}`;
 
  return {
    title: {
      absolute: `${city.name} ー Office Space`,
    },
    description: `Explore premium office spaces in ${city.name} with KantorKu. Find your ideal workspace with top-notch facilities and affordable prices.`,
    openGraph: {
      title: `${city.name} ー Office Space`,
      description: `Explore premium office spaces in ${city.name} with KantorKu. Find your ideal workspace with top-notch facilities and affordable prices.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'KantorKu',
      url: `https://kantorku.com/city/${city.slug}`,
      images: [
        fullImageUrl
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} ー Office Space`,
      description: `Explore premium office spaces in ${city.name} with KantorKu. Find your ideal workspace with top-notch facilities and affordable prices.`,
      images: [
        fullImageUrl
      ],
    },
    alternates: {
      canonical: `https://kantorku.com/city/${city.slug}`,
    },
  }
}

const CityDetailPage= async ({ params }: Props) => {

  const { slug } = await params

  const city = cities.find((city) => city.slug === slug)

  if (!city) return notFound();

  const cityOffices = officeSpaces.filter(office => office.location === city.name);


  return (
    <>
    <Navbar/>
  <header className="flex flex-col w-full">
    <section id="Hero-Banner" className="relative flex h-[434px] px-10 lg:!px-0">
      <div
        id="Hero-Text"
        className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-6 md:!p-10 gap-5 md:gap-[30px] bg-white mt-10 md:mt-[70px] mx-auto lg:!ml-[calc((100%-1130px)/2)] z-10 "
      >
        <h1 className="font-extrabold text-[32px] md:!text-[50px] leading-[40px] md:!leading-[60px] text-center md:!text-left">
          Great Office in <br />{" "}
          <span className="text-[#0D903A]">{city.name} City</span>
        </h1>
        <p className="text-lg leading-8 text-[#000929] text-justify md:!text-left">
          Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
          dan sehat dalam tumbuhkan karir.
        </p>
      </div>
      <div
        id="Hero-Image"
        className="absolute right-0 w-full lg:!w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden"
      >
        <Image
          width={980}
          height={434}
          src="/assets/images/thumbnails/thumbnail-details-4.png"
          className="w-full h-full object-cover"
          alt="hero background"
        />
      </div>
    </section>
  </header>
  <section
    id="Fresh-Space"
    className="flex flex-col gap-6 md:gap-[30px] w-full max-w-[1130px] mx-auto mt-16 md:mt-[70px] mb-20 md:mb-[120px] px-5 lg:!px-0"
  >
    <h2 className="font-bold text-[28px] md:!text-[32px] leading-[44px] md:!leading-[48px] text-nowrap text-center md:!text-left ">
      Browse Offices
    </h2>
    {cityOffices.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
        {cityOffices.map((office) => (
          <OfficeSpaceCard key={office.id} officeSpace={office} />
        ))}
      </div>
    ):(
      <p className="text-center text-lg text-gray-500">No offices available in this city.</p>
    )}
  </section>
</>

  )
}

export default CityDetailPage