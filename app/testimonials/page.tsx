
import { Cta6 } from "@/components/cta6";
import type { Metadata } from "next";
import { Testimonial3 } from "@/components/testimonial3";

export const metadata: Metadata = {
  title: "Testimonials — What Clients Say",
  description:
    "Read what homeowners, businesses and childcare providers across Dublin and Meath say about Stuart Montgomery's hand-painted murals and artwork.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials — What Clients Say About Stuart Montgomery",
    description:
      "Hear from families, creches and businesses who have commissioned hand-painted murals with Stuart Montgomery.",
    url: "https://stuartmontgomery.com/testimonials",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <Testimonial3 />
      </main>
      <section><Cta6/></section>
    </div>
  );
}
