"use client";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMN = 4;

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  function getColumn(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMN === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumn(0), getColumn(1), getColumn(2), getColumn(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
