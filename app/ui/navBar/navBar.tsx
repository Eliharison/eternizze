import NavbarLogic from '@/app/ui/navBar/navBarLogic';
import Search from '@/app/ui/navBar/search';
import { auth, signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import IsScrolled from '@/app/ui/navBar/scrolled';

async function Navbar() {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const text = isLoggedIn ? 'Sair' : 'Login';

  const loginButton = isLoggedIn ? (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type="submit"
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-400 p-3 text-sm font-medium hover:bg-blue-500 hover:text-sky-100 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">{text}</div>
      </button>
    </form>
  ) : (
    <Link
      href="/login"
      className="items-center col-span-2 gap-5 rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
    >
      <span>{text}</span>
    </Link>
  );

  return (
    <IsScrolled>
      <NavbarLogic loginButton={loginButton}>
        <Search placeholder="Pesquise Historias..." />
      </NavbarLogic>
    </IsScrolled>
  );
}

export default Navbar;
