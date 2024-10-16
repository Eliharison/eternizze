import Header from '@/app/ui/header';
import Banner from '@/app/ui/banner';
import { Card, MediumCard, LargeCard } from '@/app/ui/cards';

export default function Home() {
  return (
    <>
      <Header />
      <div className='px-5 pb-5 xl:p-0' >
        <Banner
          src="/banner.png"
          title="Dedicatória ao meu Amor"
          subtitle="Aqui fica nossa historia"
        />
        <main className="mt-6 mx-auto flex flex-col lg:flex-row justify-around gap-[25px]">
          <div className="flex flex-col gap-[25px]">
            <MediumCard
              title="Encontro Romantico"
              subtitle="Foi o nosso primeiro encontro romantico para um restaurante, aqui realmente foi um dos dias mais marcantes"
              link="/construction"
            />
            <LargeCard
              title="Comida Japonesa"
              subtitle="Um role no Sushi Satoshi onde comemos muito e demos muito prejuizo!"
              link="/construction"
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 justify-around 2xl:grid-cols-3 grid-rows-3 gap-[25px]">
            <Card
              title="Nossa Formatura!"
              subtitle="Um momento marcante! e cheio de gafes por parte do boy!"
              link="/construction"
            />
            <Card
              title="Nosso primeiro Beijo!"
              subtitle="Uma coisa linda de se ver! perto do banheiro do bar.."
              link="/construction"
            />
            <Card
              title="Pedido de Namoro"
              subtitle="Não foi como esperavamos mas esta valendo!"
              link="/construction"
            />
            <Card
              title="Dia dos Namorados!"
              subtitle="Aqui a mulher não esperava o que à aguardava..."
              link="/construction"
            />
            <Card
              title="Passamos na Faculdade!"
              subtitle="Um momento de triteza, duvidas e ansiedades que resultaram em muita alegria! "
              link="/construction"
            />
            <Card
              title="Quem chegou em quem?"
              subtitle="Aqui você vai descobrir quem e como foi esse momento decisivo em nosso relacionamento."
              link="/construction"
            />
          </div>
        </main>
      </div>
    </>
  );
}
