/** Renders a name with every capital letter (e.g. the A of Ajaykumar and of Asha) set in a clear serif capital. */
export default function CapName({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={className}>
      {children.split("").map((c, i) =>
        c !== c.toLowerCase() ? (
          <span key={i} className="font-serif text-[1.05em] font-semibold italic leading-none">{c}</span>
        ) : (
          c
        ),
      )}
    </span>
  );
}
