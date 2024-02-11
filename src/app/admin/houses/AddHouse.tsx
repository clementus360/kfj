export default function AddHouse() {


    return (
        <div className="flex w-full justify-between items-center border-b-[1px] border-black py-4 px-4">
            <h2 className="font-bold text-xl">Houses List</h2>
            <a href="/admin/addhouse"><button className="bg-blue-800 text-white px-4 py-2 rounded-md">Add House</button></a>
        </div>
    );
}
