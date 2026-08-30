const COLUMNS: Array<Array<"filled" | "light">> = [
  ["filled", "light"],
  ["light"],
  ["filled", "light", "light"],
  ["light"],
];

export function AppPreview() {
  return (
    <div className="w-full flex-shrink-0 rounded-[10px] border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:w-64">
      <div className="flex gap-2">
        <div className="flex-1 rounded-[5px] bg-slate-100 px-2.5 py-1.5">
          <div className="text-sm font-bold leading-none text-indigo-600">12</div>
          <div className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Active</div>
        </div>
        <div className="flex-1 rounded-[5px] bg-slate-100 px-2.5 py-1.5">
          <div className="text-sm font-bold leading-none text-indigo-600">64%</div>
          <div className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Reply rate</div>
        </div>
      </div>
      <div className="mt-2 flex gap-[5px]">
        {COLUMNS.map((bars, i) => (
          <div key={i} className="flex flex-1 flex-col gap-1 rounded-[5px] border border-slate-200 bg-slate-50 p-1">
            {bars.map((bar, j) => (
              <div
                key={j}
                className={
                  bar === "filled"
                    ? "h-4 rounded-[3px] bg-indigo-600/15 border-t-2 border-indigo-600"
                    : "h-3 rounded-[3px] bg-indigo-600/10"
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
