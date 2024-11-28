import { getStoryById } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/ui/navBar/navBar';
import Logo from '@/app/ui/logo';

type PageProps = {
  params?: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  if (params == undefined) {
    notFound();
  }

  const resolvedParams = await params;
  const id = resolvedParams?.id;
  const story = await getStoryById(id);

  if (!story) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <header className="flex justify-center p-4 relative max-h-52">
        <Logo width="10xl" />
      </header>
      <main className="mt-8 px-2">
        <h1>{story.title}</h1>
        <h4 className="mt-10 px-2">{story.subtitle}</h4>
        <div
          className="mt-16"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
      </main>
      <footer className="py-4 mt-8">
      <div className="container mx-auto text-center">
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
            Voltar para a Página Principal
          </button>
        </Link>
      </div>
    </footer>
    </>
  );
}
