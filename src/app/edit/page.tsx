//@ts-nocheck

"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "bg-remove"
  >();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit {publicId} </h1>
      </div>
      <div>
        <div className="flex gap-4 mb-4">
          <Button
            variant="secondary"
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
          <Button onClick={() => setTransformation("generative-fill")}>
            Apply Generative Fill
          </Button>
          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Apply grayscale
          </Button>
          <Button onClick={() => setTransformation("bg-remove")}>
            Apply BG Remove
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} alt="image" width={300} height={200} />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              alt="image"
              width={300}
              height={200}
              crop="pad"
              fillBackground
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              alt="image"
              width={300}
              height={200}
              blur="800"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              alt="image"
              width={300}
              height={200}
              grayscale
            />
          )}
          {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              alt="image"
              width={300}
              height={200}
              removeBackground
            />
          )}
        </div>
      </div>
    </div>
  );
}
