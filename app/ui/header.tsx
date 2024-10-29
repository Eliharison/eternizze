import Image from "next/legacy/image";
import Link from 'next/link';
import Logo from '@/app/ui/logo';

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
        <Logo width='10xl'/>
      </div>
      <div className="flex justify-end items-center">
        <Link
          href="/login"
          className="items-center col-span-2 gap-5 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
        >
          <span>Log in</span>
        </Link>
      </div>
    </header>
  );
}
