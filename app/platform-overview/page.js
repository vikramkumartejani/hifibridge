import GetStarted from "../components/GetStarted";
import Hero from "./Hero";
import MoveMoneyAcrossBorders from "./MoveMoneyAcrossBorders";
import StickySection from "./StickySection";
import TheChallenge from "./TheChallenge";
import TheSolution from "./TheSolution";

export const metadata = {
     title: 'Platform Overview | HIFI',
     description: 'Learn more about what we do.',
};

export default function PlatformOverview() {
     return(
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <Hero/>
               <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>
               <MoveMoneyAcrossBorders/>
               <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
               <StickySection/>
               <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
               <TheChallenge/>
               <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>
               <TheSolution/>
               <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>
               <GetStarted/>
          </div>
     );
}
