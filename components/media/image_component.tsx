import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageProps) => {
  return (
    <section className=" pointer-events-none select-none">
      <Image
        src={src}
        alt={alt}
        className="w-full aspect-square rounded-xl p-1 "
     
        priority={true}

        width={400}

        height={400}

      />
    </section>
  );
};

export default ImageComponent;