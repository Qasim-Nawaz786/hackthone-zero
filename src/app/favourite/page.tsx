import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../components/ui/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import FavouriteList from "./favourite-list";

export default async function FavouritePage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  // console.log("result", result);

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favourite Images</h1>
        </div>
        <FavouriteList initialResources={result.resources} />
      </div>
    </section>
  );
}
