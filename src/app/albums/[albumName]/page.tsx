import cloudinary from "cloudinary";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/ui/cloudinary-image";

import AlbumGrid from "./album-grid";
import { ForceRefresh } from "@/components/force-refresh";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Gallerypage({
  params: { albumName },
}: {
  params: { albumName: string };
}) {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder= ${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  const MAX_COLUMN = 4;

  function getColumn(colIndex: number) {
    return result.resources.filter(
      (resource, idx) => idx % MAX_COLUMN === colIndex
    );
  }
  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
        </div>
        <AlbumGrid images={result.resources} />
      </div>
    </section>
  );
}
