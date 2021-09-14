import Image from 'next/image';

export default function HeroImage({ src, alt, link, text }) {
  return (
    <div className="relative h-[500px] w-full md:max-w-3xl">
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        alt={alt}
        className="md:rounded-lg"
      />
      <span className="absolute bottom-24 left-0 w-full flex justify-center">
        <a
          href={link}
          className="bg-gray-50 hover:bg-gray-200 text-gray-900 py-2 px-4 bottom-16
          right-0 text-xl font-semibold rounded-sm focus:outline-none
          focus:ring focus:ring-gray-50 focus:ring-opacity-75 active:bg-gray-50"
        >
          {text}
        </a>
      </span>
    </div>
  );
}
