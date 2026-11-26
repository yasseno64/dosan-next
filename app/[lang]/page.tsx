import Hero from "../components/Hero";
import Static from "../components/Static";
import Insights from "../components/Insights";
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
      <Static lang={lang as "ar" | "en"} t={dict.Static} />
      <Insights lang={lang as "ar" | "en"} t={dict.Insights} />
    </div>
  );
}
