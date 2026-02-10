export default function HeroCollage() {
  const tiles = [
    { bg: "bg-blue-200", label: "Fashion" },
    { bg: "bg-pink-200", label: "Beauty" },
    { bg: "bg-amber-200", label: "Food" },
    { bg: "bg-emerald-200", label: "Fitness" },
    { bg: "bg-violet-200", label: "Tech" },
    { bg: "bg-cyan-200", label: "Travel" },
  ];
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full min-h-[320px]">
      {tiles.map((tile, i) => (
        <div key={i} className={`${tile.bg} rounded-2xl flex items-end p-3 ${i === 0 ? "row-span-2" : ""}`}>
          <span className="text-xs font-bold bg-white/80 backdrop-blur px-2.5 py-1 rounded-full">{tile.label}</span>
        </div>
      ))}
    </div>
  );
}
