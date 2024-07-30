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
        priority
        className="rounded-t-md rounded-b"
        layout="fixed"
        width={500}
        height={500}
        objectFit="cover"
      />
    </section>
  );
};

export default ImageComponent;