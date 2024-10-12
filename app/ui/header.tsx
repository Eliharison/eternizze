import Image from 'next/image';
import Link from 'next/link';
import { lobster } from '@/app/ui/fonts';

export default function Header() {
  return (
    <header className="flex justify-between md:grid md:grid-cols-3 p-4 relative max-h-52">
      <div className="flex justify-start items-end">
          <Image
            src="/symbol.svg"
            width={172}
            height={91}
            className="hidden lg:block"
            alt="Simbolo do meu amor"
          />
      </div>
      <div className="flex justify-center items-center">
        <span className="flex">
          <h1 className={`text-blue-500 ${lobster.className} md:text-10xl`}>Eter</h1>
          <h1 className={`${lobster.className} md:text-10xl`}>nizze</h1>
        </span>
      </div>
      <div className="flex justify-end items-center">
        <Link
          href="/construction"
          className="items-center col-span-2 gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span>
        </Link>
      </div>
    </header>
  );
}
