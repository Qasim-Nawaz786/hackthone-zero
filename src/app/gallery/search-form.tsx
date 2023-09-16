"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagname, setTagname] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagname(initialSearch);
  }, [initialSearch]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery? search=${encodeURIComponent(tagname)}`);
      }}
    >
      <Label htmlFor="tag-name" className="text-right">
        Search By Tag
      </Label>
      <div className="flex gap-x-2">
        <Input
          onChange={(e) => setTagname(e.currentTarget.value)}
          id="album-name"
          value={tagname}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
