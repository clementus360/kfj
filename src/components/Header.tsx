export default function Header() {
    return (
        <div className="relative z-50 flex justify-between bg-white rounded-lg w-10/12 shadow-lg px-8 py-4 m-auto mt-8">
            <a href="/"><img src="/logo.svg" alt="logo" /></a>

            <ul className="hidden sm:flex gap-8 font-light items-center">
                <a href="/"><li>Home</li></a>
                <a href="/properties"><li>Properties</li></a>
                <a href="/properties"><li>Cars</li></a>
                <a href="/properties"><li>Contact Us</li></a>
            </ul>
        </div>
    );
}
