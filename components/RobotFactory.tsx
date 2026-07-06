/**
 * Animirana scena v heroju: stroj na tekočem traku "proizvaja" robotke,
 * ki se odpeljejo po traku in padejo z njega (animacije v globals.css).
 * Čisti CSS — brez odjemalskega JS; spoštuje prefers-reduced-motion.
 */
function Robot({ delay }: { delay: number }) {
  return (
    <div
      className="robot-anim absolute bottom-0"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Antena */}
      <div className="absolute -top-3.5 left-1/2 h-3.5 w-px -translate-x-1/2 bg-white/40">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
      </div>
      {/* Telo */}
      <div className="relative h-12 w-12 rounded-xl border border-white/25 bg-gradient-to-br from-primary to-primary-glow shadow-[0_6px_16px_rgba(79,70,229,0.45)]">
        {/* Obraz */}
        <div className="absolute inset-x-1.5 top-2 flex h-5 items-center justify-center gap-1.5 rounded-md bg-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
        </div>
        {/* Gumb na trebuhu */}
        <span className="absolute bottom-1.5 left-1/2 h-1.5 w-4 -translate-x-1/2 rounded-full bg-ink/50" />
      </div>
    </div>
  );
}

export default function RobotFactory() {
  return (
    <div aria-hidden="true" className="relative h-64 w-full select-none sm:h-72">
      {/* Sij pod sceno */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "radial-gradient(30rem 10rem at 50% 100%, rgba(79, 70, 229, 0.35), transparent 70%)",
        }}
      />

      {/* Pas z robotki — animacija `left` v % meri širino tega pasu */}
      <div className="robot-lane absolute bottom-[3.8rem] left-[24%] right-[2%] z-10 h-16">
        <Robot delay={0} />
        <Robot delay={2.3} />
        <Robot delay={4.6} />
      </div>

      {/* Stroj */}
      <div className="absolute bottom-[3.4rem] left-0 z-20 w-[26%] min-w-[6.5rem]">
        <div className="relative h-40 rounded-2xl border border-white/15 bg-ink-soft shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
          {/* Dimnik */}
          <div className="absolute -top-5 left-5 h-5 w-6 rounded-t-md border border-b-0 border-white/15 bg-ink-soft" />
          {/* Statusna lučka */}
          <span className="machine-light absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-accent" />
          {/* Napis */}
          <p className="absolute left-3.5 top-4 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-bodylight/50">
            Decerno
          </p>
          {/* Zračniki */}
          <div className="absolute left-3.5 top-10 space-y-1.5">
            <span className="block h-1 w-10 rounded-full bg-white/10" />
            <span className="block h-1 w-8 rounded-full bg-white/10" />
            <span className="block h-1 w-9 rounded-full bg-white/10" />
          </div>
          {/* Okence z utripom */}
          <div className="absolute bottom-14 left-3.5 right-3.5 flex h-8 items-center justify-center rounded-md border border-primary/40 bg-primary/15">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-primary-glow">
              AI
            </span>
          </div>
          {/* Izhodna odprtina — robotki pridejo od tu */}
          <div className="absolute -right-1 bottom-0 h-16 w-3 rounded-l-md bg-ink" />
        </div>
      </div>

      {/* Tekoči trak */}
      <div className="absolute bottom-10 left-[6%] right-0 z-10">
        <div className="relative h-5 overflow-hidden rounded-full border border-white/15 bg-white/[0.06]">
          <div className="belt-track absolute inset-0" />
        </div>
        {/* Noge traku */}
        <div className="mt-0 flex justify-between px-[12%]">
          <span className="h-6 w-1.5 rounded-b-sm bg-white/10" />
          <span className="h-6 w-1.5 rounded-b-sm bg-white/10" />
          <span className="h-6 w-1.5 rounded-b-sm bg-white/10" />
        </div>
      </div>

      {/* Tla */}
      <div className="absolute bottom-9 left-0 right-0 h-px bg-white/10" />
    </div>
  );
}
