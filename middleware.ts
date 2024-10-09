// /middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'bn', 'mr'], // Supported locales
  defaultLocale: 'en', // Default locale
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Match all paths except the specified ones
};
