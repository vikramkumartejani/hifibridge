import GetStarted from "../components/GetStarted";

export const metadata = {
     title: 'Platform Overview | HIFI',
     description: 'Learn more about what we do.',
};

export default function PlatformOverview() {
     return(
          <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-14">
               <GetStarted/>
          </div>
     );
}
