import type { Metadata } from "next";

import { Cta6 } from "@/components/cta6";
import { Hero172 } from "@/components/hero172";
import { Process1 } from "@/components/process1";
import { Services12 } from "@/components/services12";
import { Testimonial13 } from "@/components/testimonial13";

export const metadata: Metadata = {
  title: "Stuart Montgomery — Hand-Painted Murals & Artwork, Co. Meath",
  description:
    "Stuart Montgomery is a professional mural artist based in County Meath, Ireland. Hand-painted murals for homes, creches, restaurants and commercial spaces. Over 20 years experience working across Ireland and abroad.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Stuart Montgomery — Hand-Painted Murals & Artwork",
    description:
      "Professional mural artist based in County Meath. Bespoke hand-painted murals for residential, commercial and childcare spaces across Ireland.",
    url: "https://stuartmontgomery.com",
    siteName: "Stuart Montgomery",
    locale: "en_IE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stuart Montgomery",
  description:
    "Professional mural artist based in County Meath, Ireland. Hand-painted murals for homes, creches, restaurants and commercial spaces.",
  url: "https://stuartmontgomery.com",
  telephone: "+353872900736",
  email: "info@stuartmontgomery.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "County Meath",
    addressCountry: "IE",
  },
  areaServed: {
    "@type": "Country",
    name: "Ireland",
  },
  priceRange: "££",
  serviceType: "Mural Artist",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
          <Hero172/>
          <Services12/>
          <Process1/>
          <Testimonial13/>
          <Cta6/>
        </main>
      </div>
    </>
  );
}
