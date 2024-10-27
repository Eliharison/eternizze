import { lobster } from '@/app/ui/fonts';

export default function Page() {
  return (
    <>
      <header className="flex justify-center p-4 relative max-h-52">
        <span className="flex">
          <h1 className={`text-blue-500 ${lobster.className} md:text-10xl`}>
            Eter
          </h1>
          <h1 className={`${lobster.className} md:text-10xl`}>nizze</h1>
        </span>
      </header>
      <main className='mt-8'>
        <h1>Dedicatoria ao meu Amor</h1>
        <h4 className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac turpis ut magna accumsan eleifend eget et metus. Duis vehicula, lorem eget posuere feugiat, dolor.</h4>
        <h5 className='mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac turpis ut magna accumsan eleifend eget et metus. Duis vehicula, lorem eget posuere feugiat, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac turpis ut magna accumsan eleifend eget et metus. Duis vehicula, lorem eget posuere feugiat, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac turpis ut magna accumsan eleifend eget et metus. Duis vehicula, lorem eget posuere feugiat, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac turpis ut magna accumsan eleifend eget et metus. Duis vehicula, lorem eget posuere feugiat, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac turpis ut magna accumsan eleifend eget et metus. Duis vehicula, lorem eget posuere feugiat, dolor.</h5>
      </main>
    </>
  );
}
