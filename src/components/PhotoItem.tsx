import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo;
    onClick: () => void
}

export const PhotoItem =  ({photo, onClick}: Props) => {
    return (
        <div
         onClick={onClick} 
         className="cursor-pointer hover:opacity-80">

            {/* imagem */}
                <img 
                src={`/assets/${photo.url}`} 
                alt={photo.url || "imagem da galeria"} 
                className="w-full rounded-lg"
                loading="lazy" />
        </div>
    );
}