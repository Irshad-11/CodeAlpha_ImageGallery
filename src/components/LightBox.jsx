import { useEffect, useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

function Lightbox({ image, onClose, onNext, onPrev }) {
  const [isAnimating, setIsAnimating] = useState(false);

  // 🔐 Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        triggerTransition(() => onNext?.());
      }
      if (e.key === "ArrowLeft") {
        triggerTransition(() => onPrev?.());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // 🧼 Transition wrapper
  const triggerTransition = (action) => {
    setIsAnimating(true);
    setTimeout(() => {
      action();
      setIsAnimating(false);
    }, 250);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 dark:bg-black/40 backdrop-blur-md flex items-center justify-center transition-opacity duration-500"
      onClick={() => triggerTransition(onClose)}
    >
      <div
        className="transition-all duration-500 relative rounded-2xl shadow-xl p-4 md:p-6 max-w-screen-lg backdrop-blur-lg bg-slate-300/70 dark:bg-slate-700/70 w-[90%] md:w-[80%] h-[90%] overflow-hidden flex flex-col md:flex-row gap-4 glass-bg text-black dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => triggerTransition(onClose)}
          className="absolute top-4 right-4 hover:text-red-400 z-20"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        {/* 🖼️ Image Area */}
        <div className="w-full md:w-1/2 h-[60%] md:h-full flex items-center justify-center">
          <img
            key={image.src} // 👈 triggers fade on change
            src={image.src}
            alt={image.alt}
            className={`rounded-lg object-cover shadow-md transition-opacity duration-300 ease-in-out ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            } w-full h-full md:w-[515px] md:h-[670px] max-h-[90%] md:max-h-full max-w-full`}
          />
        </div>

        {/* 📄 Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-4 overflow-y-auto max-h-full px-1">
            <div className="md:pt-7 text-2xl md:text-4xl font-bold md:w-[360px]">
              {image.title}
            </div>
            <div className="text-[12px] md:text-xl leading-relaxed text-black dark:text-gray-200">
              {image.description}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 italic">
              {image.tags?.join(", ")}
            </div>
          </div>

          {/* ⬅️➡️ Navigation */}
          <div className="w-[90%] pl-5 flex justify-between mt-4 px-2">
            <button
              onClick={() => triggerTransition(onPrev)}
              className="hover:scale-110 transition-transform"
              aria-label="Previous"
            >
              <ArrowLeft size={28} />
            </button>
            <button
              onClick={() => triggerTransition(onNext)}
              className="hover:scale-110 transition-transform"
              aria-label="Next"
            >
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
