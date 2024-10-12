import { quicksand } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  link: string;
}

export function Card({ title, subtitle, link }: CardProps) {
  return (
    <div className=" xl:w-[320px] h-[215px] p-[21px] bg-white rounded-[25px] shadow-custom transition-transform duration-300 hover:scale-105">
      <a href={link}>
        <h5
          className={`mb-2 ${quicksand.className} tracking-tight text-black text-lg sm:text-xl`}
        >
          {title}
        </h5>
      </a>
      <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis h-[76px]">
        {subtitle} 
      </p>
      <Link
        href={link}
        className="w-[100px] h-[35px] flex justify-center items-center px-3 py-2 text-sm  text-center text-blue-400 outline-blue-400 outline outline-2 rounded-lg"
      >
        Ler
        <Image src="/arrow.svg" width={12} height={24} alt="Arrow" />
      </Link>
    </div>
  );
}

export function MediumCard({ title, subtitle, link }: CardProps) {
  return (
    <Link href={link} passHref>
      <div className="relative flex-grow lg:flex-grow-0 lg:w-[525px] h-[215px] rounded-[25px] shadow-custom overflow-hidden group transition-transform duration-300 hover:scale-105">
        <Image
          src="/image-test.png"
          alt="Imagem do card"
          layout="fill"
          className="transition-all duration-300 group-hover:brightness-50 group-hover:blur-sm object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
          <h1 className={`text-xl sm:text-3xl mb-2 ${quicksand.className} `}>
            {title}
          </h1>
          <p className="text-base">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export function LargeCard({ title, subtitle, link }: CardProps) {
  return (
    <div className="lg:h-[446px] lg:w-[520px] relative rounded-[25px] shadow-custom overflow-hidden group bg-white">
      <div className="relative w-full h-[200px] sm:h-[225px]">
        <Image
          src="/image-test-2.jpg"
          alt="Imagem do card"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h1 className={`text-xl sm:text-3xl ${quicksand.className}  mb-2`}>
          {title}
        </h1>
        <p className="text-sm sm:text-base mb-4">{subtitle}</p>
        <div className="flex justify-between items-center">
          <Link
            href={link}
            className="w-[120px] h-[40px] sm:h-[50px] flex justify-center items-center px-3 py-2 text-sm text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Ler
            <Image src="/arrow-white.svg" width={12} height={24} alt="Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
