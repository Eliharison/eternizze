import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|json|css|js|map|woff|woff2|ttf|eot|otf)).*)',
  ],
};

export default NextAuth(authConfig).auth;
