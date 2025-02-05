"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const images = Array.from({ length: 25 }, (_, i) => `/gallery/img${i + 1}.jpg`);

export default function ImageGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (src: string) => {
        setSelectedImage(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="columns-3 gap-2 p-8">
            {images.map((src, index) => (
                <Link key={index} href="#" onClick={() => openModal(src)}>
                    <div className="relative group mb-2 overflow-hidden cursor-pointer">
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            width={300}
                            height={0}
                            sizes="300px"
                            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </Link>
            ))}

            {selectedImage && (
                <Dialog
                    open={isOpen}
                    onClose={closeModal}
                    className="fixed z-50 inset-0"
                >
                    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-70">
                        <div className="relative">
                            <Image
                                src={selectedImage}
                                alt="Full-size"
                                width={800}
                                height={600}
                                className="rounded-xl"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white text-2xl font-bold"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
}
