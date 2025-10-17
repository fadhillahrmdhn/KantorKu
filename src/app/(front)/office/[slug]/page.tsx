import React from 'react';
import Navbar from '@/components/Navbar';
import OfficeHeader from '@/features/offices/components/officeHeader';
import { officeSpaces } from '@/features/offices/data/officeSpaces.mock';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import OfficeFeatures from '@/features/offices/components/officeFeatures';

import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const office = officeSpaces.find((item) => item.slug === slug);

  if (!office) {
    return {
      title: 'Office Not Found',
      description: 'The office you are looking for does not exist.',
    };
  }

  const fullImageUrl = office.image.startsWith('http') ? office.image : `https://example.com${office.image}`;

  return {
    title: {
      absolute: `${office.title} ー office`,
    },
    description: `Discover a premium office space in ${office.title} with KantorKu. Find the perfect workspace equipped with modern facilities at a competitive price.`,
    openGraph: {
      title: `${office.title} ー office`,
      description: `Discover a premium office space in ${office.title} with KantorKu. Find the perfect workspace equipped with modern facilities at a competitive price.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'KantorKu',
      url: `https://kantorku.com/office/${office.slug}`,
      images: [fullImageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${office.title} ー office`,
      description: `Discover a premium office space in ${office.title} with KantorKu. Find the perfect workspace equipped with modern facilities at a competitive price.`,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: `https://kantorku.com/office/${office.slug}`,
    },
  };
}

const OfficeSpaceDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const office = officeSpaces.find((office) => office.slug === slug);

  if (!office) return notFound();

  return (
    <>
      <Navbar />
      <OfficeHeader image={office.image} images={office.images} />
      <section id="Details" className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10">
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          {office.tags.map((tag, index) => (
            <p key={index} className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
              {tag}
            </p>
          ))}

          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">{office.title}</h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <Image src="/assets/images/icons/location.svg" width={24} height={24} alt="icon" />
                <p className="font-semibold">{office.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <Image src="/assets/images/icons/Star 1.svg" width={20} height={20} alt="star" />
                <Image src="/assets/images/icons/Star 1.svg" width={20} height={20} alt="star" />
                <Image src="/assets/images/icons/Star 1.svg" width={20} height={20} alt="star" />
                <Image src="/assets/images/icons/Star 1.svg" width={20} height={20} alt="star" />
                <Image src="/assets/images/icons/Star 5.svg" width={20} height={20} alt="star" />
              </div>
              <p className="font-semibold text-right">{office.rating}/5 (19,384)</p>
            </div>
          </div>
          <p className="leading-[30px]">{office.about}</p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>

          <OfficeFeatures features={office.features} />
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            <p>{office.address}</p>
          </div>
          <div className="overflow-hidden w-full h-[280px]">
            <div id="my-map-display" className="h-full w-full max-w-[none] bg-none">
              <iframe className="h-full w-full border-0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${office.title}`} />
            </div>
            <a className="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="enable-map-data">
              premium bootstrap themes
            </a>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col w-[392px] shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            {office.isFullyBooked ? (
              <div>
                <p className="font-bold text-xl leading-[30px]">
                  Sorry. This office is <span className="text-[#FF2D2D]">fully booked</span> at this moment, try next time.
                </p>
              </div>
            ) : (
              <div>
                <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">{office.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
                <p className="font-semibold mt-1">For {office.duration} days working</p>
              </div>
            )}

            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Image width={30} height={30} src="/assets/images/icons/verify.svg" alt="icon" />
                <p className="font-semibold leading-[28px]">Mendapatkan akses pembelajaran terbaru terkait dunia startup</p>
              </div>
              <div className="flex items-center gap-3">
                <Image width={30} height={30} src="/assets/images/icons/verify.svg" alt="icon" />
                <p className="font-semibold leading-[28px]">Mendapatkan akses pembelajaran terbaru terkait dunia startup</p>
              </div>
              <div className="flex items-center gap-3">
                <Image width={30} height={30} src="/assets/images/icons/verify.svg" alt="icon" />
                <p className="font-semibold leading-[28px]">Mendapatkan akses pembelajaran terbaru terkait dunia startup</p>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              {office.isFullyBooked ? (
                <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                  <Image width={24} height={24} src="/assets/images/icons/save-add.svg" alt="icon" />
                  <span>Save for Later</span>
                </button>
              ) : (
                <a
                  target="_blank"
                  href={`https://wa.me/${office.phone}?text=Hello, saya ingin booking kantor ${office.title}. detailnya https://localhost:3000/office/${office.slug}`}
                  className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
                >
                  <Image width={24} height={24} src="/assets/images/icons/slider-horizontal-white.svg" alt="icon" />
                  <span>Book This Office</span>
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <Image width={60} height={60} src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Masayoshi</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="#">
                    <Image width={40} height={40} src="/assets/images/icons/call-green.svg" alt="icon" />
                  </Link>
                  <Link href="#">
                    <Image width={40} height={40} src="/assets/images/icons/chat-green.svg" alt="icon" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <Image width={60} height={60} src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Fuji Ovina</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="#">
                    <Image width={40} height={40} src="/assets/images/icons/call-green.svg" alt="icon" />
                  </Link>
                  <Link href="#">
                    <Image width={40} height={40} src="/assets/images/icons/chat-green.svg" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 w-full px-5 py-4 bg-white border-t border-[#E0DEF7] z-20">
          <a
            target="_blank"
            href={`https://wa.me/${office.phone}?text=Hello, saya ingin booking kantor ${office.title}. detailnya https://localhost:3000/office/${office.slug}`}
            className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
          >
            <Image width={24} height={24} src="/assets/images/icons/slider-horizontal-white.svg" alt="icon" />
            <span>Book This Office</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default OfficeSpaceDetailPage;
