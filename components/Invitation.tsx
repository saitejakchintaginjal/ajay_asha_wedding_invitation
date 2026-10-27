import Fireworks from "./Fireworks";
import CapName from "./CapName";
import FlipWord from "./FlipWord";
import ScrollReveal from "./ScrollReveal";
import ScratchCard from "./ScratchCard";
import { SectionTitle } from "./Reveal";
import { invocations, wedding } from "@/lib/config";

function Hero() {
  const name = "font-script text-maroon-deep drop-shadow-[0_0_10px_rgba(255,247,234,.9)]";
  // the illustration shows in full at the top; only its bottom edge dissolves into the ivory page
  const fade = "linear-gradient(to bottom, transparent 0%, #000 1.8%, #000 93%, transparent 100%)";
  return (
    <section className="relative overflow-hidden bg-ivory pt-5 text-center">
      <div className="relative z-10 space-y-0.5 px-4 pb-2 font-serif text-[12.5px] font-semibold leading-snug tracking-[.06em] text-maroon">
        {invocations.map((l) => <p key={l}>|| {l} ||</p>)}
      </div>

      <div className="relative" style={{ WebkitMaskImage: fade, maskImage: fade }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt={`${wedding.groom} and ${wedding.bride} walking hand in hand towards the wedding mandap`}
          className="seq-bg block aspect-[4/5] w-full object-cover object-[50%_62%]"
        />
        <div className="seq-fx absolute inset-0"><Fireworks light startAfter={{ htmlClass: "revealed", ms: 8000 }} /></div>
      </div>

      {/* names sit just below the photo, on the ivory page, so the couple and the mandap stay clear */}
      <div className="seq-names relative z-10 -mt-5 flex justify-center px-3 pb-3">
        <div className="flex items-baseline justify-center gap-1.5 whitespace-nowrap text-[clamp(26px,8vw,40px)] leading-none">
          <CapName className={name}>{wedding.groom}</CapName>
          <FlipWord className="font-script text-[.95em] text-ruby drop-shadow-[0_0_8px_rgba(255,247,234,.95)]" />
          <CapName className={name}>{wedding.bride}</CapName>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="px-8 pt-8">
      <ScrollReveal className="rounded-3xl border border-gold/20 bg-gradient-to-b from-white/25 to-white/45 px-5 py-5 text-center shadow-[0_10px_40px_rgba(212,164,57,.14)] backdrop-blur-[2px]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center whitespace-nowrap rounded-full border border-gold-dark/70 pb-0.5 font-script text-[16px] leading-none tracking-tight text-gold-dark shadow-[inset_0_0_0_3px_rgba(255,247,234,.9),inset_0_0_0_4px_rgba(184,134,11,.35)]">
          <span className="flex items-center gap-[6px]">
            <span className="pr-[1px]"><CapName>{wedding.groom[0]}</CapName></span>
            <span className="text-[1.15em] text-ruby" aria-label="and">♥</span>
            <span><CapName>{wedding.bride[0]}</CapName></span>
          </span>
        </div>
        <p className="mt-2 text-[9px] uppercase tracking-[.3em] text-gold-dark">Together with their families</p>
        <h2 className="gold-text font-script text-4xl leading-tight">Welcome</h2>
        <p className="mt-1.5 font-serif text-[15px] leading-snug text-maroon-deep">
          With the blessings of Lord Ganesha and our elders, we joyfully invite you to share in the wedding of our children.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gold/30 pt-2.5 text-xs">
          <div><p className="text-[10px] font-bold uppercase tracking-[.15em] text-gold-dark">Groom&apos;s family</p><p className="mt-0.5 font-serif text-sm font-bold leading-snug text-maroon-deep">{wedding.groomParents}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[.15em] text-gold-dark">Bride&apos;s family</p><p className="mt-0.5 font-serif text-sm font-bold leading-snug text-maroon-deep">{wedding.brideParents.map((n) => <span key={n} className="block">{n}</span>)}</p></div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Journey() {
  return (
    <section className="px-5 pt-12">
      <SectionTitle eyebrow="Meet the" title="Bride & Groom" />
      <ScrollReveal>
        <div className="ornate-frame tap-lift mx-auto aspect-[2/3] w-[76%] overflow-hidden rounded-t-[999px] bg-night shadow-[0_18px_40px_rgba(90,30,20,.35)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero.jpg" alt={`${wedding.groom} and ${wedding.bride}`} className="h-full w-full object-cover object-[47%_50%]" />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="glass tap-lift mt-6 rounded-3xl px-5 py-4 text-center">
          <p className="font-script text-4xl leading-tight text-gold-dark">Two hearts, one journey</p>
          <p className="mt-1.5 font-serif text-base leading-relaxed text-maroon/90">
            Two souls, two families, one beautiful beginning. We would be honoured to have you with us as we start a lifetime of love, laughter and togetherness.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function Invitation() {
  return (
    <>
      {/* sacred symbols: transparent cut-out with a soft brown edge so the white Namam shows on ivory */}
      <header className="px-10 pb-0 pt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/symbols.png" alt="Sudarshana Chakra, Namam and Shankha" className="mx-auto block h-auto w-[48%] [filter:drop-shadow(0_0_.6px_#6b4410)_drop-shadow(0_0_.6px_#6b4410)_drop-shadow(0_2px_3px_rgba(90,40,10,.25))]" />
      </header>
      <Hero />
      <Welcome />
      <ScratchCard />
      <Journey />
    </>
  );
}
