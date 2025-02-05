import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex justify-between bg-gray-200 items-center shadow-md p-2">
            <Navbar />
        </header>
    );
}
