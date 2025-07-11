import { useState, useEffect } from "react";
import { images } from "./data/images";
import ImageCard from "./components/ImageCard";
import Lightbox from "./components/Lightbox";
import FilterBar from "./components/FilterBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const getUniqueTags = (images) => {
  const tagSet = new Set();
  images.forEach((img) => img.tags?.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet);
};

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode toggle by observing <html> class changes
  useEffect(() => {
    const root = window.document.documentElement;

    // Initial check
    setIsDark(root.classList.contains("dark"));

    // Watch for class changes on <html>
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const uniqueTags = getUniqueTags(images);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const removeTag = (tagToRemove) =>
    setSelectedTags((prev) => prev.filter((t) => t !== tagToRemove));

  const clearAllTags = () => setSelectedTags([]);

  const filteredImages =
    selectedTags.length === 0
      ? images
      : images.filter((img) =>
          selectedTags.every((tag) => img.tags.includes(tag))
        );

  return (
    <div
      className={`min-h-screen duration-700  transition-all ${
        isDark ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      <NavBar />
      <FilterBar
        tags={uniqueTags}
        selectedTags={selectedTags}
        onToggle={toggleTag}
        onRemove={removeTag}
        onClearAll={clearAllTags}
      />

      <ImageCard
        images={filteredImages}
        onImageClick={(index) => setActiveIndex(index)}
      />

      {activeIndex !== null && (
        <Lightbox
          image={filteredImages[activeIndex]}
          onClose={() => setActiveIndex(null)}
          onNext={() =>
            setActiveIndex((i) =>
              i < filteredImages.length - 1 ? i + 1 : i
            )
          }
          onPrev={() =>
            setActiveIndex((i) => (i > 0 ? i - 1 : i))
          }
        />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
