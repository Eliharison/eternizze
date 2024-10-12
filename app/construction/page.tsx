import { quicksand } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Construction() {
  return (
    <div className="h-[100dvh] flex items-center justify-center gap-24">
      <div className='w-[35vw]'>
        <h1 className={`${quicksand.className}`}>Em Construção!</h1>
        <h4>Nesse momento o desenvolvedor esta trabalhando a todo vapor para trazer mais funcionalidades, volte daqui a alguns dias!</h4>
        <Link href='/' className='flex bg-blue-400 text-white mt-2 p-4 rounded-xl justify-center items-center'>Voltar</Link>
      </div>
      <Image
        src="/construcao.png"
        width={300}
        height={300}
        alt="Em Construção!"
      />
    </div>
  );
}
