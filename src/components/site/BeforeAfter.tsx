import { useRef, useState, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 w-full touch-none overflow-hidden rounded-2xl bg-muted shadow-lift select-none sm:aspect-16/10"
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
    >
      <img
        src={afterImage}
        alt={afterAlt}
        loading="lazy"
        width={1280}
        height={864}
        className="absolute inset-0 size-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          loading="lazy"
          width={1280}
          height={864}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: containerRef.current?.offsetWidth ?? undefined }}
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-forest/85 px-3 py-1 text-xs font-semibold tracking-wide text-forest-foreground uppercase backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-leaf/90 px-3 py-1 text-xs font-semibold tracking-wide text-leaf-foreground uppercase backdrop-blur-sm">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-background/90"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-forest shadow-lift">
          <MoveHorizontal className="size-5" aria-hidden="true" />
        </span>
      </div>

      <label className="sr-only" htmlFor="before-after-range">
        Reveal before and after
      </label>
      <input
        id="before-after-range"
        type="range"
        min={0}
        max={100}
        value={Math.round(value)}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
        aria-label="Reveal before and after"
      />
    </div>
  );
}
