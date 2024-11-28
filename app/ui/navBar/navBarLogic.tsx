'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/legacy/image';

interface NavbarLogicProps {
  children: React.ReactNode;
  loginButton: React.ReactNode;
}

export default function NavbarLogic({
  children,
  loginButton,
}: NavbarLogicProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Links de navegação */}
      <div className="flex space-x-4">
        {isHomePage ? (
          <>
            <Link href={'/construction'}>
              <Image
                src="/create-note.svg"
                alt="Criar Card"
                width={32}
                height={32}
              />
            </Link>
            <Link href={'/construction'}>
              <Image src="/notes.svg" alt="Ver Cards" width={32} height={32} />
            </Link>
          </>
        ) : (
          <Link href={'/'}>
            <button className="flex h-[48px] grow items-center justify-center rounded-md p-3 bg-white text-sm text-black font-medium hover:bg-[#c1c1c1]  md:flex-none md:justify-start md:p-2 md:px-3">
              <Image src="/arrow-black.svg" alt="Voltar" width={20} height={20} />
              <span>Voltar</span>
            </button>
          </Link>
        )}
      </div>

      {/* Barra de pesquisa e botão de Login/Sair */}

      {/* Adicionar xl:block após pronto */}
      <div className="flex space-x-4 items-center">
        {isHomePage && <div className="hidden ">{children}</div>}
        {loginButton}
      </div>
    </div>
  );
}
