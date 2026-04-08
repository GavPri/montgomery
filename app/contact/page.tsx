import { Contact18 } from "@/components/contact18";
import { Faq20 } from "@/components/faq20";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-screen flex-col items-center justify-center py-16 px-4 lg:px-16">
        <Contact18/>
      </main>
    </div>
  );
}
