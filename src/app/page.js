import Banner from "@/components/Banner";
import Contexts from "@/components/Contexts";
import TopBooks from "@/components/TopBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
        
      <TopBooks></TopBooks>
       <Contexts></Contexts>
    </div>
  );
}
