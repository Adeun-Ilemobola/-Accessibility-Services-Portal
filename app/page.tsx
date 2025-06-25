import BlurBackImg from "@/components/BlurBackImg";
import { LoginCard } from "@/components/Login";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <BlurBackImg>
        <LoginCard/>
      </BlurBackImg>
    
    </div>
  );
}
