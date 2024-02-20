import Navigator from "./Navigator";

export default function layout({children}: Readonly<{
    children: React.ReactNode;
  }>) {


    return (
        <div className="flex flex-col gap-8 w-full  lg:w-8/12 m-auto pt-32 ">

            <Navigator />

            <div>
                {children}
            </div>
            
        </div>
    )
}
