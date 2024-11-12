import Image from 'next/image';
import Logo from '@/app/ui/logo';

export default async function Header() {
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
      <div className="grid columns-2 justify-center items-center">
        <Logo width="10xl" />
      </div>
    </header>
  );
}
