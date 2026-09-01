export default function Background() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="absolute -left-32 top-[18%] h-72 w-72 rounded-full bg-neutral-200/60 blur-[1px]" />
            <div className="absolute -left-20 bottom-[15%] h-44 w-44 rounded-full bg-neutral-300/40 blur-[2px]" />
            <div className="absolute -right-36 top-[10%] h-80 w-80 rounded-full bg-neutral-200/70 blur-[2px]" />

            <div className="absolute -right-16 bottom-[22%] h-52 w-52 rounded-full bg-neutral-300/40 blur-[3px]" />
            <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[100px] opacity-80" />
        </div>
    )
}