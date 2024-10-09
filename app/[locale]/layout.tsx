// /app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'bn' }, { locale: 'mr' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;

  try {
    // Adjust the path to import localization files correctly
    messages = (await import(`../../locales/${params.locale}/about.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale "${params.locale}":`, error);
    notFound();
  }

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
