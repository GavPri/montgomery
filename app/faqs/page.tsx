import type { Metadata } from "next";
import { Faq20 } from "@/components/faq20";

export const metadata: Metadata = {
  title: "FAQs — Commissioning a Mural or Painting",
  description:
    "Answers to common questions about commissioning a hand-painted mural with Stuart Montgomery — process, materials, pricing, timelines and more.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs — Commissioning a Mural or Painting",
    description:
      "Everything you need to know about commissioning a mural with Stuart Montgomery, from first contact to finished piece.",
    url: "https://stuartmontgomery.com/faqs",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <Faq20/>
      </main>
    </div>
  );
}
