"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";



const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // indice de imagem atual 
    const [showModal, setShowModal] = useState(false);

    // funções para navegação do slider principal
    const prevImage = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photoList.length - 1));
    }

    const nextImage = () => {
        setCurrentIndex((prev) => (prev < photoList.length - 1 ? prev + 1 : 0));
    }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="mx-2">
            <h1 className="text-center text-4xl font-bold my-10 font-sans text-white">
            Bem-vindo à sua Galeria de Fotos!
            </h1>
          

            {/* SLider */}
            <div className="relative max-w-4xl mx-auto">
                <img
                    src={`/assets/${photoList[currentIndex].url}`}
                    alt="Imagem Principal"
                    className="w-full h-96 object-cover rounded-lg "
  
                />

                {/* botões */}
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"

                >
                    ⬅
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
                >
                    ⮕
                </button>

                {/* Abertura Modal */}
                <button
                    onClick={openModal}
                    className="absolute bottom-5 right-5 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
                >
                    🔍
                </button>
            </div>

            {/*Miniaturas*/}
            <div className="flex justify-center gap-4 mt-4">
                {photoList.map((photo, index) => (
                    <img
                        key={photo.id}
                        src={`/assets/${photo.url}`}
                        alt={`Miniatura${index}`}
                        className={`w-20 h-20 object-cover cursor-pointer rounded-lg ${index === currentIndex
                            ? "border-4 border-blue-500"
                            : "opacity-80 hover:opacity-100"
                            }`}
                        onClick={() => setCurrentIndex(index)} // altera a imagem
                    />
                ))}
            </div>
            {/* Modal */}
            {showModal && (
                <Modal
                    image={photoList[currentIndex].url}
                    closeModal={closeModal}
                />
            )}
        </div>

    );

};

export default Page; 