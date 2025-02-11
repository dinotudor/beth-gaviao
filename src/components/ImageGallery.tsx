"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CategoriesEnum, ImageMetaData } from "@/utils/data";

export default function ImageGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const categories: string[] = Object.values(CategoriesEnum);

    const isAllSelected = selectedCategories.length === categories.length;
    const isNoneSelected = selectedCategories.length === 0;

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        );
    };

    const toggleSelectAll = () => {
        setSelectedCategories(isAllSelected ? [] : [...categories]);
    };

    const toggleSelectNone = () => {
        setSelectedCategories(isNoneSelected ? [...categories] : []);
    };

    const filteredImages =
        selectedCategories.length === 0 || isAllSelected
            ? ImageMetaData
            : ImageMetaData.filter((img) =>
                  selectedCategories.includes(img.category)
              );

    const openModal = (src: string) => {
        setSelectedImage(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1 text-sm md:px-4 md:py-2 rounded-lg ${
                            selectedCategories.includes(category)
                                ? "bg-gray-400 text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
                <button
                    onClick={toggleSelectAll}
                    disabled={isAllSelected}
                    className={`px-3 py-1 text-sm md:px-4 md:py-2 rounded-lg ${
                        isAllSelected ? "bg-gray-400 text-white" : "bg-gray-200"
                    }`}
                >
                    Todas
                </button>
                <button
                    onClick={toggleSelectNone}
                    disabled={isNoneSelected}
                    className={`px-3 py-1 text-sm md:px-4 md:py-2 rounded-lg ${
                        isAllSelected ? "bg-gray-400 text-white" : "bg-gray-200"
                    }`}
                >
                    Limpar
                </button>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
                {filteredImages.map((img, index) => (
                    <Link
                        key={index}
                        href="#"
                        onClick={() => openModal(img.src)}
                    >
                        <div className="relative group mb-2 overflow-hidden cursor-pointer">
                            <Image
                                src={img.src}
                                alt={`Thumbnail ${img.title}`}
                                width={300}
                                height={0}
                                sizes="300px"
                                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg font-semibold">
                                    {img.title}
                                </h3>
                                <p className="text-white text-sm">
                                    {img.date ?? ""}
                                </p>
                            </div>
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
        </div>
    );
}
