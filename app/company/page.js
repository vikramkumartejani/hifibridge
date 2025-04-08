import GetStarted from "../components/GetStarted";
import Hero from "./Hero";
import OurPeople from "./OurPeople";
import OurValues from "./OurValues";
import OurVision from "./OurVision";
import WhereAreweGoing from "./WhereAreweGoing";

export const metadata = {
     title: 'Company | HIFI',
     description: 'Learn more about what we do.',
};

export default function Company() {
     return (
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <Hero/>
               <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
               <OurVision/>
               <div className="w-full h-auto pb-[100px] md:pb-[200px]"></div>
               <OurValues/>
               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>
               <OurPeople/>
               <div className="w-full h-auto pb-[60px] md:pb-[120px] "></div>
               <WhereAreweGoing/>
               <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>
               <GetStarted />
          </div>
     );
}
