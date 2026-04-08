import { About10 } from "@/components/about10";
import { Faq20 } from "@/components/faq20";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <About10/>
      </main>
    </div>
  );
}
