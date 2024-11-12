import Image from 'next/legacy/image';
import Link from 'next/link';
import IsScrolled from '@/app/ui/navBar/scrolled';
import { auth, signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
import Search from '../search';

async function Navbar() {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const text = isLoggedIn ? 'Sair' : 'Login';

  return (
    <IsScrolled>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <Image
            src="/create-note.svg"
            alt="Criar Card"
            width={32}
            height={32}
          />
          <Image src="/notes.svg" alt="Ver Cards" width={32} height={32} />
        </div>
        <div className="flex space-x-4">
          <Search placeholder="Pesquise Historias..." />
          <div className="flex justify-end items-center">
            {isLoggedIn ? (
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                  <PowerIcon className="w-6" />
                  <div className="hidden md:block">{text}</div>
                </button>
              </form>
            ) : (
              <Link
                href="/login"
                className="items-center col-span-2 gap-5 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
              >
                <span>{text}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </IsScrolled>
  );
}

export default Navbar;
