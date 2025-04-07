import FullStackPayments from "./components/FullStackPayments";
import FutureBusiness from "./components/FutureBusiness";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import ModernRails from "./components/ModernRails";

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
      <Hero />
      <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
      <ModernRails />
      <div className="w-full h-auto pb-[100px] md:pb-[200px] "></div>
      <FutureBusiness />
      <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>
      <FullStackPayments />
      <div className="w-full h-auto pb-[100px] md:pb-[200px] "></div>
      <div className="flex items-center justify-center max-w-sm mx-auto md:max-w-xl">
        <div className="flex flex-col gap-3 px-6 text-center">
          <h3 className="text-black text-2xl md:text-4xl">
            HIFI serves hundreds of money movement flows
          </h3>
          <p className="text-black text-sm font-spacemono">
            A coordination layer to consolidate banks, liquidity provisioning, money transmitters, compliance, and wallets into one integration. Build for any money movement use case.
          </p>
        </div>
      </div>
      <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>
      <GetStarted />
    </div>
  );
}
