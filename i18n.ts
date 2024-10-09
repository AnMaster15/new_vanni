import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  try {
    const messages = (await import(`./locales/${locale}/about.json`)).default;
    return {
      messages: messages
    };
  } catch (error) {
    console.error(`Error loading messages for locale "${locale}":`, error);
    throw new Error(`Messages not found for locale: ${locale}`);
  }
});