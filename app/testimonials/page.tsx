
import { Cta6 } from "@/components/cta6";
import { Testimonial3 } from "@/components/testimonial3";

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
