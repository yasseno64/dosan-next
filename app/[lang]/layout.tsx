import "./global.css";
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import Navbar from "../components/Navbar";

const locale = {en,ar}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
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