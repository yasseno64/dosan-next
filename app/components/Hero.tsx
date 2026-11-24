import Image from "next/image";
import dosan from "../../public/dosan-hero.webp";

type Props = {
  t: Record<string, string>;
};

export default function Hero({ t }: Props) {
  return (
    <section className="relative h-screen bg-[#030712] sm:h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#030712]">
        {/* Image */}
        <div className="hero-zoom absolute inset-0 will-change-transform">
          <Image
            src={dosan}
            alt="Dosan Energy Oxycom Units"
            fill
            priority
            sizes="100vw"
            className="block object-cover object-[50%_42%]"
          />
        </div>

        {/* Overlays */}
        {/* Full Hero Overlay */}
<div className="pointer-events-none absolute inset-0 z-[2] bg-linear-to-b from-[#003743]/50 via-[#003743]/12 via-38% to-[#003743]/82" />

{/* Side Gradient */}
<div className="pointer-events-none absolute left-0 top-0 bottom-0 z-[2] w-[min(64%,900px)] bg-linear-to-r from-[#003743]/82 via-[#003743]/50 via-46% to-transparent" />
        {/* Content */}
        <div className="pointer-events-none absolute bottom-0 start-0 top-[clamp(92px,13vh,132px)] z-[5] flex w-full flex-col justify-end px-[clamp(16px,5vw,64px)] pb-[clamp(36px,6vh,88px)]">
          <p className="m-0 mb-[clamp(10px,1.8vh,18px)] flex items-center gap-[10px] text-[12px] font-semibold uppercase tracking-[1.4px] text-white">
            <span className="block h-[2px] w-[20px] bg-[#1dcca0]" />
            {t.smallTItle}
          </p>

          <h1 className="m-0 max-w-[13ch] text-[min(clamp(31.3px,4.8vw,66.1px),8.8vh)] font-bold leading-none tracking-[clamp(-2px,-0.18vw,-0.6px)] text-white rtl:tracking-normal [text-wrap:balance]">
            {t.title}
          </h1>

          <p className="m-0 mt-[clamp(14px,2.4vh,32px)] max-w-[52ch] text-[clamp(14px,1.1vw,16px)] leading-[1.55] text-white/90">
            {t.desc}
          </p>

          <div className="pointer-events-auto mt-[clamp(16px,2.6vh,34px)] flex flex-wrap gap-3">
            <button className="inline-flex h-[52px] items-center justify-center gap-2 rounded-md bg-[#1dcca0] px-7 text-[14px] font-semibold leading-none text-[#00201a] transition active:scale-95">
              {t.btn1}
            </button>
            <button className="inline-flex h-[52px] items-center justify-center gap-2 rounded-md bg-transparent px-7 text-[14px] font-semibold leading-none text-white transition [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.55)] hover:bg-[#c9c9c9] active:scale-95">
              {t.btn2}
            </button>
          </div>
        </div>

        {/* Small text (top) */}
        <div className="pointer-events-none absolute end-[clamp(16px,5vw,64px)] top-[clamp(100px,14vh,140px)] z-[5] flex items-center gap-[10px]">
          <span className="block h-px w-[18px] bg-[#1dcca0]" />
          <span className="text-[11px] font-semibold uppercase tracking-[1.6px] text-white/75">
            {t.smallText}
          </span>
        </div>

        {/* Scroll hint */}
        <div className="hero-hint pointer-events-none absolute bottom-[clamp(22px,3vh,34px)] end-[clamp(16px,5vw,64px)] z-[5] flex items-center gap-[10px]">
          <span className="text-[11px] font-semibold uppercase tracking-[1.6px] text-white/60">
            {t.scrollHint}
          </span>
<span className="mt-4 text-[#1dcca0] animate-[bounce_2s_ease-in-out_infinite]">
  ↓
</span>        </div>
      </div>
    </section>
  );
}
