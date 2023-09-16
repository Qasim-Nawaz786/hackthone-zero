"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function SetAsFavouriteAction(
  publicId: string,
  isFavourite: boolean
) {
  if (isFavourite) {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  }
}
