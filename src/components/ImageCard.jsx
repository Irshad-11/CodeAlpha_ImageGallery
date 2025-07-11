function ImageCard({ images, onImageClick }) {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-8 ">
      <div className="columns-2 md:columns-4 xl:columns-5 gap-1 md:gap-2 space-y-4">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="break-inside-avoid cursor-pointer"
            onClick={() => onImageClick(index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover w-full
              bg-gray-50/30 p-1 backdrop-blur-md dark:bg-zinc-800/30"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
