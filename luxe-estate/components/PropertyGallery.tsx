"use client";

import { useState } from "react";
import { Property } from "@/lib/types";

type Props = {
  property: Property;
  images: string[];
};

export default function PropertyGallery({ property, images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm group">
        <img
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={images[activeIndex]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          {property.is_featured && (
            <span className="bg-mosque text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              Featured
            </span>
          )}
          {property.tag && (
            <span className="bg-white/90 backdrop-blur text-nordic-dark text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              {property.tag}
            </span>
          )}
          <span className="bg-white/90 backdrop-blur text-nordic-dark text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            {property.status}
          </span>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-nordic-dark px-5 py-2.5 rounded-lg text-sm font-semibold shadow-xl backdrop-blur transition-all flex items-center gap-2 z-10 border border-black/5 hover:shadow-2xl hover:-translate-y-0.5"
        >
          <span className="material-icons text-sm">grid_view</span>
          View All Photos
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {images.map((imgUrl, idx) => (
          <div 
            key={idx} 
            onClick={() => setActiveIndex(idx)}
            className={`flex-none w-48 aspect-[4/3] rounded-lg overflow-hidden cursor-pointer snap-start transition-all duration-300 ${idx === activeIndex ? 'ring-2 ring-mosque ring-offset-2 ring-offset-background-light shadow-md' : 'opacity-70 hover:opacity-100'}`}
          >
            <img alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" src={imgUrl} />
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300">
          <button 
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-50 flex items-center justify-center"
          >
            <span className="material-icons">close</span>
          </button>
          <div className="max-w-6xl w-full flex flex-col items-center h-full justify-center">
            <div className="relative w-full flex-grow flex items-center justify-center mb-6 mt-12 lg:mt-0">
              <img 
                src={images[activeIndex]} 
                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl" 
                alt="Full view" 
              />
            </div>
            <div className="flex gap-3 overflow-x-auto w-full pb-4 justify-center flex-shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {images.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-none w-24 sm:w-32 aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${idx === activeIndex ? 'ring-2 ring-white scale-105 shadow-lg' : 'opacity-40 hover:opacity-100'}`}
                >
                  <img alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" src={imgUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
