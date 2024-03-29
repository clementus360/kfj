import { FeaturedHouses } from "../FeaturedHouses";

export default function Page() {
    return (
        <div className="w-screen max-w-[1440px] m-auto">
            <section className={`w-full relative z-100 top-0 flex items-center justify-center pt-24 h-[60vh] bg-gradient-to-r from-black to-transparent bg-cover `} style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/2150799631.png?alt=media&token=3ff3fbd3-1bd3-481d-807b-63b39fc32750")' }}>
                <div className="relative z-20 lg:grid lg:grid-cols-[2fr_3fr] gap-8 items-center px-8 lg:w-5/6 ">
                    <div className="flex flex-col gap-4 text-white">
                        <h1 className="text-6xl font-black uppercase">Willy Investment Group</h1>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/3d-view-house-model.png?alt=media&token=633ed869-5c42-438f-a755-4a035a76fe7b" alt="image" className="hidden lg:block" />
                </div>

                <div className="absolute z-0 top-0 left-0 bg-black bg-opacity-60  h-full w-full"></div>

            </section>
            <section className="flex flex-col lg:grid lg:grid-cols-[2fr_3fr] gap-16 items-center justify-center px-8 lg:px-32 pt-24 h-max">


                <img src="https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/african-business-male-people-shaking-hands.jpg?alt=media&token=6b557564-6972-4ac0-8ff7-2d6ed990c25a" alt="image" className="w-full bg-black h-full rounded-md" />

                <div className="flex flex-col gap-4">

                    <div className="flex flex-col">
                        <h3 className="text-sm text-slate-500 font-light">About Us</h3>
                        <h2 className="text-2xl text-black font-black">OUR COMPANY</h2>
                    </div>

                    <p className="text-sm text-slate-700 font-light">Welcome to Willy Investment Group, your go-to destination for property management, real estate transactions, and quality pre-owned cars in Rwanda. With a focus on integrity, professionalism, and client satisfaction, we provide seamless experiences for buying, selling, or renting properties and finding the perfect vehicle to suit your needs. Trust Willy Investment Group for excellence in real estate and automotive solutions across Rwanda.</p>


                </div>

            </section>

            <FeaturedHouses />
        </div>
    );
}
