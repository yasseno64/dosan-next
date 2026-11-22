import LangSwitcher from "./LangSwitcher";

const links = [
  "services",
  "projects",
  "partners",
  "calculators",
  "insights",
  "about",
  "contact",
] as const;

type Props = {
  lang: "en" | "ar";
  t: Record<string, string>;
};

export default function Navbar({ lang, t }: Props) {
  const isArabic = lang === "ar";
  return (
    <header
      id="navbar"
      className="nav-scroll fixed inset-x-0 top-0 z-[100] flex items-center gap-[clamp(12px,2vw,32px)] px-[clamp(14px,3vw,44px)] "
    >
      {/* Logo */}
      <a href={`/${lang}`} className="flex shrink-0 items-center">
        <img
          className="block h-8 brightness-0 invert"
          src="https://new.dosanenergy.com/assets/dosan-logo.png"
          alt="dosan Logo"
        />
      </a>

      {/* Desktop Navigation */}

      <nav className="hidden md:flex min-w-0 flex-1 items-center gap-[clamp(10px,1.4vw,26px)] overflow-x-auto">
        {links.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className="flex-none whitespace-nowrap py-1.5 text-[13.5px] font-medium tracking-[0.3px] text-white underline decoration-transparent decoration-[1.3px] underline-offset-[7px] hover:decoration-[#24a88b]"
          >
            {t[key]}
          </a>
        ))}
      </nav>
      {/* Desktop Utilities */}
      <div className="hidden md:flex items-center gap-4 ">
        <LangSwitcher lang={lang} />
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center rounded-md  bg-[#1dcca0] px-3 text-sm font-semibold leading-none text-[#00201a] transition active:scale-95 "
        >
          {t.rateWebsite}
        </button>
      </div>
      {/* Mobile: open button */}
      <a
        href="#mobile-menu"
        aria-label="Open menu"
        className="ms-auto flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>

      {/* Mobile: overlay */}

       <div className="md:hidden">
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[999] hidden h-[100dvh] w-screen flex-col justify-between overflow-y-auto bg-[#043742] p-5 target:flex"
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <a href="#navbar">
                <img
                  src="https://new.dosanenergy.com/assets/dosan-logo.png"
                  alt="dosan ENERGY"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </a>

              {/* Close */}
              <a
                href="#navbar"
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </a>
            </div>

            <nav className="mt-2 flex flex-col">
              {links.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-base font-bold text-white transition hover:text-[#1cd2ad]"
                >
                  <span>{t[key]}</span>
                  <span className="text-lg text-[#1cd2ad]">{isArabic ? "←" : "→"}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-4">
            <button
              type="button"
              className="h-[42px] w-full rounded-md bg-[#1dcca0] text-sm font-bold text-[#00201a] transition active:scale-95"
            >
              {t.requestEvaluation}
            </button>

            <div className="my-5">
              <LangSwitcher lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}