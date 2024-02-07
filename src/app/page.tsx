import { Footer } from "@/components/Footer";

function Hero() {
  return (
    <section className={`relative z-100 top-0 flex items-center justify-center w-full pt-8 h-[60vh] bg-gradient-to-r from-black to-transparent bg-cover `} style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/view-istanbul-cloudy-weather-multiple-low-high-buildings-fog-sunlight-breaking-through-clouds-turkey.png?alt=media&token=4617e990-72ef-42de-9441-844a90630d5a")' }}>

      <div className="relative z-20 grid grid-cols-[1fr_2fr] gap-8 items-center px-8 w-5/6 ">
        <h1 className="text-6xl font-black">THE BEST DEALS IN ONE PLACE</h1>

        <img src="https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/3d-view-house-model.png?alt=media&token=633ed869-5c42-438f-a755-4a035a76fe7b" alt="image" className="" />
      </div>

      <div className="absolute z-0 top-0 left-0 bg-white bg-opacity-60  h-full w-full"></div>

    </section>
  )
}

function About() {
  return (
    <section className="grid grid-cols-[2fr_3fr] gap-16 items-center justify-center px-32 py-16 h-max">

        <img src="https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/african-business-male-people-shaking-hands.png?alt=media&token=2486d508-0cf4-4a31-9089-b85a8ea3e340" alt="image" className="w-full bg-black h-full rounded-lg" />

      <div className="flex flex-col gap-4">

        <div className="flex flex-col">
          <h3 className="text-sm text-slate-500 font-light">About Us</h3>
          <h2 className="text-2xl text-black font-black">OUR COMPANY</h2>
        </div>

        <p className="text text-sm text-slate-700 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa doloremque in explicabo, nobis laboriosam dolorum, vel, eveniet non illo consequatur aperiam magni. Nisi ex, quia doloribus non iure est ipsa ipsum assumenda quas ducimus tempore, nesciunt et incidunt architecto quasi laudantium vel aperiam! Tempore, nostrum consequatur. Totam exercitationem enim vero?</p>


      </div>

    </section>
  )
}

function Services() {
  return (
    <section className="items-center justify-center px-32 py-16 h-max">

      <div className="flex items-center gap-4 w-full">

        <div className="flex flex-col">
          <h3 className="text-sm text-slate-500 font-light">Our Services</h3>
          <h2 className="text-2xl text-black font-black">FIND A DEAL THAT SUITS YOUR NEEDS</h2>
        </div>

        <div className="flex gap-8 w-full justify-between h-max">

          <a href="/properties" className="w-full h-full" >
          <div className="flex flex-col items-center justify-center gap-8 py-16 bg-slate-200 hover:bg-slate-300 rounded-lg w-full">
            <img src="/icons/house.svg" alt="house" className="w-24" />
            <h2 className="text-xl font-bold">Property deals</h2>
          </div>
          </a>

          <a href="/cars" className="w-full h-full">
          <div className="flex flex-col items-center justify-center gap-8 py-16 bg-slate-200 hover:bg-slate-300 rounded-lg w-full">
            <img src="/icons/car.svg" alt="car" className="w-24" />
            <h2 className="text-xl font-bold">Car deals</h2>
          </div>
          </a>

        </div>


      </div>

    </section>
  )
}

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center w-max m-auto">
      <h1 className="text-6xl font-gilroy font-bold">REACH OUT TO US</h1>
      <button className="bg-black px-6 py-4 text-white font-bold w-full rounded-lg">EMAIL US</button>
    </section>
  )
}



export default async function Home() {

  return (
    <main className="absolute top-0">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
