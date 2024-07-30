// ImageComponent.js
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;

}

const ImageComponent = ({ src, alt, width, height }: ImageProps) => {
  return (
<section className="w-full pointer-events-none select-none  " >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        className="rounded-t-md rounded-b"
        width={650}
        height={360}


      />
      </section >
  );
};

export default ImageComponent;