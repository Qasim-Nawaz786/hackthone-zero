"use client";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        // onupload error change the tsconfig.json strict value for false
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="fsh8qn9l"
      />

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
