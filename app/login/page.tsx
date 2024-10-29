import Image from "next/legacy/image";
import Link from 'next/link';
import Logo from '@/app/ui/logo';

export default function Page() {
  return (
    <main className="relative h-[100dvh] flex items-center justify-center ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] min-w-[320px] h-full z-[-1] hidden lg:block">
        <Image
          src="/background-login-page.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Modal */}
      <section className="relative flex flex-col items-center justify-center rounded-[25px] max-w-lg gap-6 sm:p-14 sm:shadow-custom w-full">

        {/* Logo */}
        <Logo width="8xl" />

        {/* Form */}
        <form className="mt-4 w-2/3 sm:w-auto">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className=" rounded-[25px] w-full py-[13px] px-3 leading-tight shadow-custom"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="mb-6">
            <label className="block font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="appearance-none rounded-[25px] w-full py-[13px] px-3 mb-3 leading-tight shadow-custom"
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="flex flex-col  sm:flex-row sm:gap-6 text-center sm:items-center justify-between">
            <Link
              className="bg-blue-400 text-white py-[10px] px-9 rounded-[13px] mt-4 shadow-custom"
              type="button"
              href="/construction"
            >
              Login
            </Link>
            <Link
              className="inline-block mt-4 align-baseline outline outline-1  text-[16px] py-[10px] px-9 rounded-[13px] text-blue-400"
              href="/construction"
            >
              Esqueceu a senha?
            </Link>
          </div>
        </form>

        <h3 className="text-center text-base mt-10">
          Não tem uma conta?{' '}
          <Link href="/construction" className="text-blue-400">
            Crie Uma !
          </Link>
        </h3>
      </section>
    </main>
  );
}
