function Hero() {
  return (
    <section className="top-0 flex items-center justify-center w-full pt-24 h-[60vh] bg-red-300">
        <div className="grid grid-cols-2 gap-8 px-8 w-5/6 ">
            <h1 className="font-bold text-6xl">ALL THE BEST DEALS IN ONE PLACE</h1>

            <img src="/" alt="image" className=" bg-black" />
        </div>
    </section>
  )
}

function About() {
  return (
    <section className="grid grid-cols-2 gap-16 items-center justify-center px-32 py-16 h-[30vw]">

      <div className="">
        <img src="/" alt="image" className="w-full bg-black h-full" />
      </div>

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



export default async function Home() {

  return (
    <main className="absolute top-0">
      <Hero />
      <About />
    </main>
  );
}
