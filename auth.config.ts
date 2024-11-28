import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redireciona para a página inicial após o login
      if (url === baseUrl || url === '/login') {
        return baseUrl;  // Redireciona para a página inicial
      }
      return url; // Caso o usuário venha de outra página, mantém o redirecionamento original
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnRead = nextUrl.pathname.startsWith('/read');
      const isOnLoginPage = nextUrl.pathname === '/';
  
      // Permite acesso à página de login
      if (isOnLoginPage) {
        return true;
      }
  
      // Se a página for de leitura, verifica a visibilidade da história
      if (isOnRead) {
        const isPrivateStory = nextUrl.pathname.includes('private'); // Exemplo, use lógica para verificar visibilidade
        if (isPrivateStory && !isLoggedIn) {
          return false; // Bloqueia acesso a histórias privadas sem login
        }
      }
  
      return true; // Acessa o conteúdo normalmente para públicos e usuários logados
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
