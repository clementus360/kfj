export default function AddCar() {

    return (
        <div className="flex w-full justify-between items-center border-b-[1px] border-black py-4 px-4">
            <h2 className="font-bold text-xl">Cars List</h2>
            <a href="/admin/addcar"><button className="bg-green-600 text-white px-4 py-2 rounded-md">Add Car</button></a>
        </div>
    );
}
