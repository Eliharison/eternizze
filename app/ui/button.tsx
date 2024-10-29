import Link from 'next/link';
import Image from "next/legacy/image";

interface ButtonLinkProps {
  href: string;
  label: string;
  icon?: string;
  variant?: 'primary' | 'outline' | 'dark' | 'shadowed';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'flex justify-center items-center rounded-lg transition-colors';
  const sizeStyles = {
    sm: 'w-[100px] h-[35px] px-3 py-2 text-sm',
    md: 'w-[120px] h-[40px] sm:h-[50px] px-4 py-3 text-base',
    lg: 'w-[140px] h-[50px] px-6 py-3 text-lg',
  };
  const variantStyles = {
    primary: 'text-white bg-blue-400 hover:bg-blue-500',
    outline: 'text-blue-400 outline outline-2 outline-blue-400',
    dark: 'text-white bg-black hover:bg-blue-500',
    shadowed: 'text-white bg-blue-400 shadow-custom',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <span>{label}</span>
      {icon && <Image src={icon} width={12} height={24} alt="Icon" className="ml-2" />}
    </Link>
  );
};

export default ButtonLink;
