import type { Metadata } from "next";
import { Contact18 } from "@/components/contact18";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote",
  description:
    "Get in touch with Stuart Montgomery for a free, no-obligation consultation. Based in Co. Meath, working across Ireland. Call, email or fill in the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Stuart Montgomery — Get a Free Quote",
    description:
      "Contact Stuart for a free consultation. He'll visit your space, discuss your ideas and provide a no-obligation quote.",
    url: "https://stuartmontgomery.com/contact",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <Contact18/>
      </main>
    </div>
  );
}
