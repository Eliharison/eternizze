import Image from 'next/legacy/image';
import { quicksand } from '@/app/ui/fonts';

interface BannerProps {
  title: string;
  subtitle: string;
  src: string;
}

export default function Banner({ src, title, subtitle }: BannerProps) {
  return (
    <div className="relative w-full h-96">
      <Image
        src={src}
        alt="Banner"
        layout="fill"
        quality={100}
        className="z-[-1] rounded-xl object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center text-center p-4">
        <h1 className={`text-white ${quicksand.className} text-4xl  mb-0`}>
          {title}
        </h1>
        <p className={`text-white ${quicksand.className} text-lg text-center`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
