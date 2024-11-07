import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/ui/logo';
import { auth, signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';

export default async function Header() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  const text = isLoggedIn ? 'Sair' : 'Login';
  
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
        <Logo width="10xl" />
      </div>
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
    </header>
  );
}
