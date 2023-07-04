import { Joan } from "next/font/google";
import FreshDesign from "./components/FreshDesign";
import Inbox from "./components/Inbox";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import SideBar from "./components/SideBar";
import Subscription from "./components/Subscription";
import Transition from "./components/Transition";
import UpcommingEvent from "./components/UpcommingEvent";
import Update from "./components/Update";
import Jobs from "./components/Jobs";
import HelpCenter from "./components/HelpCenter";

export default function Home() {
  return (
    <main className='flex bg-neutral-50 pb-10'>
      <div>
        <SideBar />
      </div>

      
      <div className='w-full xl:pl-72 '>
        <Navbar />
        <div className='lg:mx-10 xl:mx-28'>
          <Overview />
               <div className='md:flex w-full md:flex-row flex-col'>
                  <Update />
                  <FreshDesign />
                </div>
                <div className="md:flex w-full md:flex-row flex-col">
                  <Subscription />
                  <Inbox />
                </div>
                <div className="md:flex w-full md:flex-row flex-col">
                   {/* <Transition /> */}
                   <UpcommingEvent />
                </div>
                <div className="md:flex w-full md:flex-row flex-col">
                    <Jobs />
                    <HelpCenter />
                </div>
      
        </div>
      </div>
    </main>
  );
}
