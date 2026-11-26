type Props = {
  lang: "ar" | "en";
  t: any;
};

export default function Insights({ lang, t }: Props) {
  const href = `/${lang}/insights`;
  return (
    <section
      id="insights"
      className="bg-white px-[clamp(16px,5vw,64px)] py-[clamp(80px,11vw,168px)]"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-[clamp(30px,4vw,56px)] flex flex-wrap items-end justify-between gap-[20px]">
          <div>
            <p className="m-0 mb-[14px] text-[12px] font-medium uppercase tracking-[1.4px] text-[#328f7b]">
              {t.tag}
            </p>
            <h2 className="m-0 text-[clamp(22.9px,2.4vw,33.6px)] font-bold leading-[1.08] tracking-[-1px] text-[#043742]">
              {t.title}
            </h2>
          </div>
          <a
            href={href}
            className="text-[12px] font-semibold text-[#328f7b] transition-colors hover:text-[#1dcca0]"
          >
            {t.allArticles}
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          {/* Featured Main Article */}
          <a href={href} className="group block text-white">
            <div className="relative mb-[20px] aspect-[16/10] overflow-hidden rounded-[10px] bg-[#0f172a]">
              <img
                src="https://dosanenergy.com/assets/dosan-oxycom-units.webp"
                alt={t.featured.title}
                loading="lazy"
                decoding="async"
                className="block h-full w-full rounded-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mb-[12px] flex gap-[16px] text-[11.5px] font-semibold uppercase tracking-[0.8px] text-slate-400">
              <span className="text-[#007a62]">{t.featured.category}</span>
              <span>{t.featured.badge}</span>
              <span>{t.featured.readTime}</span>
            </div>
            <h3 className="m-0 mb-[12px] text-[clamp(17.3px,1.7vw,25.2px)] font-semibold leading-[1.16] tracking-[-0.7px] text-[#043742] transition-colors [text-wrap:pretty]">
              {t.featured.title}
            </h3>
            <p className="m-0 max-w-[56ch] text-[16px] leading-[1.65] text-slate-500">
              {t.featured.desc}
            </p>
          </a>

          {/* Side Articles */}
          <div className="flex flex-col">
            {/* Article 1 */}
            <a
              href={href}
              className="group grid grid-cols-[84px_1fr] gap-[18px] rounded-[10px] border-t border-slate-200 py-[20px] transition-transform duration-500 ease-out hover:translate-x-3 hover:bg-[#edf7f4] "
            >
              <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#0f172a]">
                <img
                  src="https://dosanenergy.com/assets/dosan-damac-precooll.webp"
                  alt={t.article1.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full rounded-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <span className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.8px] text-[#328f7b]">
                  {t.article1.category}
                </span>
                <h4 className="m-0 text-[16px] font-semibold leading-[1.35] text-[#043742] transition-colors">
                  {t.article1.title}
                </h4>
              </div>
            </a>

            {/* Article 2 */}
            <a
              href={href}
              className="group grid grid-cols-[84px_1fr] gap-[18px] rounded-[10px] border-t border-slate-200 py-[20px] transition-transform duration-500 ease-out hover:translate-x-3 hover:bg-[#edf7f4] "
            >
              <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#0f172a]">
                <img
                  src="https://dosanenergy.com/assets/dosan-psau-chillers.webp"
                  alt={t.article2.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full rounded-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <span className="mb-[6px] block text-[11px] font-bold uppercase tracking-[0.8px] text-[#328f7b]">
                  {t.article2.category}
                </span>
                <h4 className="m-0 text-[16px] font-semibold leading-[1.35] text-[#043742] transition-colors">
                  {t.article2.title}
                </h4>
              </div>
            </a>

            {/* Article 3 */}
            <a
              href={href}
              className="group grid grid-cols-[84px_1fr] gap-[18px] rounded-[10px] border-t border-b border-slate-200 py-[20px] transition-transform duration-500 ease-out hover:translate-x-3 hover:bg-[#edf7f4] "
            >
              <div className="relative aspect-square overflow-hidden rounded-[10px]">
                <img
                  src="https://dosanenergy.com/assets/dosan-analytics-hero.webp"
                  alt={t.article3.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full rounded-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <span className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.8px] text-[#328f7b]">
                  {t.article3.category}
                </span>
                <h4 className="m-0 text-[16px] font-semibold leading-[1.35] text-[#043742] transition-colors">
                  {t.article3.title}
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
