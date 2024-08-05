import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageProps) => {
  return (
    <section className=" pointer-events-none select-none p-1">
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-t-xl rounded-b-lg"
     
        priority={true}

        width={400}

        height={400}

      />
    </section>
  );
};

export default ImageComponent;