import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/china.svg" alt="Chinese" height={32} width={40} className="rounded-md" />
          Chinese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/italy.svg" alt="Italian" height={32} width={40} className="rounded-md" />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/sk.svg" alt="Korean" height={32} width={40} className="rounded-md" />
          Korean
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/spain.svg" alt="Spanish" height={32} width={40} className="rounded-md" />
          Spanish
        </Button>
      </div>
    </footer>
  );
};
