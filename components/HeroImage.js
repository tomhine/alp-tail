import Image from 'next/image';

export default function HeroImage({ src, width, height, alt, link, text }) {
  return (
    <div className="relative">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="w-11/12 absolute"
      />
      <span className="absolute bottom-24 left-0 w-full flex justify-center">
        <a
          href={link}
          className="bg-gray-50 hover:bg-gray-200 py-2 px-4 bottom-16
          right-0 text-xl font-semibold rounded-sm focus:outline-none
          focus:ring focus:ring-gray-50 focus:ring-opacity-75 active:bg-gray-50"
        >
          {text}
        </a>
      </span>
    </div>
  );
}
