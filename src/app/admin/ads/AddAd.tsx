export default function AddAd() {
    return (
        <div className="flex w-full justify-between items-center border-b-[1px] border-black py-4 px-4">
            <h2 className="font-bold text-xl">Ads List</h2>
            <a href="/admin/addad"><button className="bg-green-600 text-white px-4 py-2 rounded-md">Add Ad</button></a>
        </div>
    );
}
