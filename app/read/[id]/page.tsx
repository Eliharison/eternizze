import { getStoryById } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import Logo from '@/app/ui/logo';

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const story = await getStoryById(params.id);

  if (!story) {
    notFound();
  }

  return (
    <>
      <header className="flex justify-center p-4 relative max-h-52">
      <Logo width='10xl'/>
      </header>
      <main className="mt-8">
        <h1>{story.title}</h1>
        <h4 className="mt-10">{story.subtitle}</h4>
        <p className="mt-16">{story.content}</p>
      </main>
    </>
  );
}
