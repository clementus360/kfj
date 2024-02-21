import { Contact } from "./Contact";
import FeaturedAds from "./FeaturedAds";
import { FeaturedCars } from "./FeaturedCars";
import { FeaturedHouses } from "./FeaturedHouses";

function Hero() {
  return (
    // <section className={`relative z-100 top-0 flex items-center justify-center w-full pt-24 h-[60vh] bg-gradient-to-r from-black to-transparent bg-cover `} style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/24725.jpg?alt=media&token=e33fa891-8f03-452b-b0e7-80944da520cd")' }}>
    <section className={`relative z-100 top-0 flex items-center justify-center w-full pt-24 lg:h-[60vh] bg-gradient-to-r from-black to-transparent bg-cover bg-center`} style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/carton-house-model-and-toy-car-on-document-banner-2023-11-27-05-05-11-utc.png?alt=media&token=ad23d2a9-1e9b-4707-b1e6-fdf352bc9597")' }}>

      <div className="relative z-20 lg:grid lg:grid-cols-[2fr_3fr] gap-8 items-center lg:px-8 w-5/6 ">
        <div className="py-16 lg:py-0 flex flex-col gap-4 text-white">
          <h1 className="text-6xl font-black">THE BEST DEALS IN ONE PLACE</h1>
          <p>Unlocking opportunities, driving success - Willy Investment Group, your trusted partner in property and automotive excellence.</p>
        </div>
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/3d-view-house-model.png?alt=media&token=633ed869-5c42-438f-a755-4a035a76fe7b" alt="image" className="hidden lg:block" /> */}
      </div>

      <div className="absolute z-0 top-0 left-0 bg-black bg-opacity-60  h-full w-full"></div>

    </section>
  )
}

function Services() {
  return (
    <section className="items-center justify-center px-8 sm:px-32 pb-24 h-max">

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">

        <div className="flex flex-col">
          <h3 className="text-sm text-slate-500 font-light">Our Services</h3>
          <h2 className="text-2xl text-black font-black">FIND A DEAL THAT SUITS YOUR NEEDS</h2>
        </div>

        <div className="flex gap-8 w-full justify-between h-max">

          <a href="/properties" className="w-full h-full" >
            <div className="flex flex-col items-center justify-center gap-8 py-16 bg-slate-200 hover:bg-slate-300 rounded-md h-full w-full">
              <img src="/icons/house.svg" alt="house" className="w-24" />
              <h2 className="text-xl font-bold">Property deals</h2>
            </div>
          </a>

          <a href="/cars" className="w-full h-full">
            <div className="flex flex-col items-center justify-center gap-8 py-16 bg-slate-200 hover:bg-slate-300 rounded-md h-full w-full">
              <img src="/icons/car.svg" alt="car" className="w-24" />
              <h2 className="text-xl font-bold">Car deals</h2>
            </div>
          </a>

        </div>


      </div>

    </section>
  )
}

export default async function Home() {

  return (
    <main className="max-w-[1440px] m-auto">
      <Hero />
      <FeaturedHouses />
      <FeaturedCars />
      <Services />
      <Contact />

      <FeaturedAds />
    </main>
  );
}
