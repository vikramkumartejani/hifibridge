import FullStackPayments from "./components/FullStackPayments";
import FutureBusiness from "./components/FutureBusiness";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import HifiServes from "./components/HifiServes";
import ModernRails from "./components/ModernRails";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
      <Hero />
      <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
      <ModernRails />
      <div className="w-full h-auto pb-[100px] md:pb-[200px] "></div>
      <Slider/>
      <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
      <FutureBusiness />
      <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>
      <FullStackPayments />
      <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
      <HifiServes />
      <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
      <GetStarted />
    </div>
  );
}
