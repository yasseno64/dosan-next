import Hero from "../components/Hero";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

const locales = { en, ar };

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = locales[lang as "ar" | "en"] || locales.ar;

  return (
    <div>
      <Hero t={dict.Hero} />
    </div>
  );
}
