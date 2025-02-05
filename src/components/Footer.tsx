export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="p-4 bg-black text-center text-white">
            <small>
                @bethgaviao :: &#169; all rights reserved :: {`${year}`}
            </small>
        </footer>
    );
}
