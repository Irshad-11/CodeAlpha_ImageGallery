import { X } from "lucide-react";

function FilterBar({ tags, selectedTags, onToggle, onRemove, onClearAll }) {
  return (
    <div className="w-full px-4 pt-6 pb-3 space-y-3 duration-500 transition-all">
      {/* 🔹 Selected Tags Row */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center max-w-screen-lg mx-auto duration-500 transition-all">
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#c08060] text-white text-sm shadow duration-500 transition-opacity"
            >
              {tag}
              <button
                onClick={() => onRemove(tag)}
                className="hover:text-red-200 duration-500 transition-opacity"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          <button
            onClick={onClearAll}
            className="text-sm underline duration-500 transition text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white ml-2"
          >
            Clear All
          </button>
        </div>
      )}

      {/* 🔸 Tag Grid - 2 rows mobile, 3 rows desktop */}
      <div className="max-w-screen-lg mx-auto overflow-hidden relative rounded-md backdrop-blur-md bg-gray-200/50 dark:bg-zinc-800/50 border border-blue-400/30 p-2 md:px-6 md:py-4 duration-500 transition">
        <div className="custom-scrollbar grid grid-rows-2 grid-flow-col auto-cols-max gap-2 overflow-x-auto pb-4 pr-6">
          {tags.map((tag) => {
            const selected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onToggle(tag)}
                className={`whitespace-nowrap px-4 py-1 border border-gray-700 dark:border-zinc-500 rounded-full text-sm font-medium transition duration-200 ${
                  selected
                    ? "bg-[#c08060] text-white scale-105 shadow"
                    : "bg-gray-200 text-black hover:bg-[#eee] dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* ⬅️ Right-side gradient to hint scrollable overflow */}
        <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-black/10 via-black/5 to-transparent dark:from-white/10 dark:via-white/5 pointer-events-none" />
      </div>
    </div>
  );
}

export default FilterBar;
