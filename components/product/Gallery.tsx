"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({
  images,
  alt,
}: {
  images: readonly string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const src = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex gap-2">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              className={`relative size-16 overflow-hidden rounded-xl border ${
                index === active ? "border-ink" : "border-line"
              }`}
            >
              <Image src={image} alt="" fill unoptimized className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
