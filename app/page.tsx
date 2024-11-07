import Header from '@/app/ui/header';
import Banner from '@/app/ui/banner';
import { Card, MediumCard, LargeCard } from '@/app/ui/cards';
import { getStories } from '@/app/lib/actions';
import { auth } from '../auth'; // Importe o `auth` diretamente

export default async function Home() {
  const stories = await getStories();
  const session = await auth(); // Verifica a sessão autenticada
  const isLoggedIn = !!session?.user;

  const getLink = (id: string, visibility: 'public' | 'private') => {
    if (visibility === 'private' && !isLoggedIn) {
      return '/login'; 
    }
    return `/read/${id}`; 
  };
  

  return (
    <>
      <Header />
      <div className="px-5 pb-5 xl:p-0">
        <Banner
          src="/banner.png"
          title="Dedicatória ao meu Amor"
          subtitle="Aqui fica nossa história"
        />
        <main className="mt-6 mx-auto flex flex-col lg:flex-row justify-around gap-[25px]">
          <div className="flex flex-col gap-[25px]">
            {stories[0] && (
              <MediumCard
                title={stories[0].title}
                subtitle={stories[0].subtitle}
                link={getLink(stories[0].id, stories[0].visibility)}
              />
            )}
            {stories[1] && (
              <LargeCard
                title={stories[1].title}
                subtitle={stories[1].subtitle}
                link={getLink(stories[1].id, stories[1].visibility)}
              />
            )}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 justify-around 2xl:grid-cols-3 grid-rows-3 gap-[25px]">
            {stories.slice(2).map((story) => (
              <Card
                key={story.id}
                title={story.title}
                subtitle={story.subtitle}
                link={getLink(story.id, story.visibility)}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
