import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageProps) => {
  return (
    <section className=" pointer-events-none select-none ">
      <Image
        src={src}
        alt={alt}
        className="w-full rounded-xl"
        priority
        width={500}

        height={500}

      />
    </section>
  );
};

export default ImageComponent;