import '@/app/ui/global.css';
import { comfortaa } from '@/app/ui/fonts';

export const metadata = {
  title: 'Eternizze',
  description: 'Aqui você pode eternizar as suas historias!'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${comfortaa.className}`}>{children}</body>
    </html>
  );
}
