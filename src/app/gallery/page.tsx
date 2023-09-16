import Uploadbutton from "./upload-button";
import cloudinary from "cloudinary";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../components/ui/cloudinary-image";
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Gallerypage({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <Uploadbutton />
        </div>
        <SearchForm initialSearch={search} />

        <GalleryGrid images={result.resources} />
      </div>
    </section>
  );
}
