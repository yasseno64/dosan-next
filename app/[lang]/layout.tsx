import type { Metadata } from "next";
import "./global.css";
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import Navbar from "../components/Navbar";

const locale = { en, ar };

const pageTitles = {
  en: "Cooling that costs less to run. | Dosan Energy",
  ar: "تبريد بتكلفة تشغيل أقل. | دوسان للطاقة",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ar") {
    return { title: "Dosan Energy" };
  }

  return {
    title: pageTitles[lang],
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ar") {
    return <p>اللغة غير مدعومة</p>;
  }

  return (
    <html lang={lang} dir={lang === "en" ? "ltr" : "rtl"}>
      <body>
        <Navbar lang={lang} t={locale[lang].navbar} />
        {children}
      </body>
    </html>
  );
}