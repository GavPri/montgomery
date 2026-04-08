import { Cta6 } from "@/components/cta6";
import { Hero172 } from "@/components/hero172";
import { Process1 } from "@/components/process1";
import { Services12 } from "@/components/services12";
import { Testimonial13 } from "@/components/testimonial13";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <Hero172/>
        <Services12/>
        <Process1/>
        <Testimonial13/>
        <Cta6/>
      </main>
    </div>
  );
}
