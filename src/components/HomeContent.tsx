import Image from "next/image";
import pic from "../../public/pic-test2.jpg";

export default function HomeContent() {
    return (
        <section className="p-2 ">
            <h1 className="text-2xl font-bold text-center">Bio</h1>
            <p className="bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at hendrerit enim. Fusce ut sollicitudin velit. Aliquam erat
                volutpat. Donec blandit dui sit amet accumsan tempor. Aliquam
                sed lectus nulla. Sed tristique, dui et iaculis aliquet, tortor
                dolor convallis nibh, quis interdum nulla lorem quis massa. Sed
                eget pharetra quam. Sed venenatis leo ipsum, eu sodales lacus
                rutrum ac. Integer vestibulum turpis in est pharetra, a euismod
                magna faucibus.
            </p>
            <article>
                <Image
                    src={pic}
                    className="object-cover bg-gray-100 p-4 rounded-lg shadow-sm"
                    alt="img"
                />
            </article>
        </section>
    );
}
