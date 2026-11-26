// components/Static.tsx
type Props = {
  lang: "ar" | "en";
  t: any; // locale[lang].Static
};

const metrics = [
  { key: "alfanar", value: "117" },
  { key: "damac", value: "35" },
  { key: "extra", value: "49,623" },
  { key: "coolingCost", value: "66" },
  { key: "tempDrop", value: "20" },
];

export default function Static({ lang, t }: Props) {
  return (
    <section
      className="relative overflow-hidden bg-[#14171a] text-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at 18% 42%, rgba(15, 173, 149, 0.12), transparent 24%),
          linear-gradient(90deg, #14171a 0%, #14171a 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start gap-4 lg:mb-16">
          <span className="inline-flex rounded-full px-3 py-1 text-[12px] font-medium text-[#0D7A62]">
            {t.tag}
          </span>

          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-start">
            <h2 className="max-w-[400px] text-start text-[clamp(2.2rem,3vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white">
              {t.title}
            </h2>

            <span
              className="max-w-[38ch] text-start text-xs font-bold leading-[2] tracking-[-0.04em]"
              style={{ color: "rgba(255, 255, 255, 0.62)" }}
            >
              {t.subtitle}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <div
              key={metric.key}
              className="flex min-h-[210px] flex-col justify-end"
            >
              <div className="text-[clamp(2rem,3vw,4rem)] font-bold leading-none tracking-[-0.06em] text-white transition-colors duration-300 hover:text-[#1dcca0]">
                {metric.value}
                {t.metrics[metric.key].unit}
              </div>

              <div className="mb-[150px] mt-4 space-y-1 text-start">
                <p className="text-xs leading-relaxed text-gray-400">
                  {t.metrics[metric.key].label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}