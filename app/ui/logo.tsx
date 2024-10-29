import { lobster } from '@/app/ui/fonts';

interface PropWidth {
  width: '4xl' | '8xl' | '10xl';
}

const textSizeMap = {
  '4xl': 'text-4xl',
  '8xl': 'text-8xl',
  '10xl': 'text-10xl',
};

export default function Logo({ width }: PropWidth) {
  const textSizeClass = textSizeMap[width] || 'text-4xl';

  return (
    <span className="flex">
      <h1 className={`text-blue-500 ${lobster.className} ${textSizeClass}`}>
        Eter
      </h1>
      <h1 className={`${lobster.className} ${textSizeClass}`}>nizze</h1>
    </span>
  );
}
