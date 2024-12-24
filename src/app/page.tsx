/* eslint-disable */
import Image from "next/image";
import Hero from "./components/Hero";
import Brandtag from "./components/Brandtag";
import NewArrival from "./components/NewArrival";
import TopSeller from "./components/TopSeller";
import BrowseStyles from "./components/BrowseStyles";
import Reviews from './components/Reviews'


export default function Home() {
  return (
    <main className=''>
      <Hero />
      <div id="brandtag">

      <Brandtag />
      </div>
      <div id="newarrival">

      <NewArrival />
      </div>
      <div id="topseller">

      <TopSeller />
      </div>
      

      <TopSeller />
      <BrowseStyles />
      <Reviews />
    
    </main>
  );
}