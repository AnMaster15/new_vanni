import path from 'path'; // Use import instead of require

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'bn', 'mr'],
};

export const defaultNS = 'about';

export const localePath = typeof window === 'undefined'
  ? path.resolve('./public/locales') // Use path.resolve for server-side
  : '/locales'; // Use string directly for client-side

export default {
  i18n,
  defaultNS,
  localePath,
};
