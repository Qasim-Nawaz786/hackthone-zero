"use client";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../components/ui/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";

export default function FavouriteList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);
  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
            onUnheart={(unheartedResources) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resources) =>
                    resources.public_id !== unheartedResources.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}
