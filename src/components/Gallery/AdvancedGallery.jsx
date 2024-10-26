import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const AdvancedGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleKeyPress = useCallback((e) => {
    if (!selectedImage) return;
    
    if (e.key === 'Escape') {
      setSelectedImage(null);
      setIsZoomed(false);
    } else if (e.key === 'ArrowLeft') {
      setSelectedImage((prev) => {
        const currentIndex = images.findIndex(img => img.src === prev.src);
        return currentIndex > 0 ? images[currentIndex - 1] : images[images.length - 1];
      });
    } else if (e.key === 'ArrowRight') {
      setSelectedImage((prev) => {
        const currentIndex = images.findIndex(img => img.src === prev.src);
        return currentIndex < images.length - 1 ? images[currentIndex + 1] : images[0];
      });
    }
  }, [images, selectedImage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className="aspect-square relative">
              <img
                src={image.src}
                alt={image.alt || 'gallery'}
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
                onLoad={handleImageLoad}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(image)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-2 rounded-full"
                >
                  <ZoomIn className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={() => {
                const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                setSelectedImage(currentIndex > 0 ? images[currentIndex - 1] : images[images.length - 1]);
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={() => {
                const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                setSelectedImage(currentIndex < images.length - 1 ? images[currentIndex + 1] : images[0]);
              }}
              className="absolute right-4 text-white hover:text-gray-300 z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              className={`cursor-zoom-in transition-transform duration-300 ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || 'gallery'}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedGallery;