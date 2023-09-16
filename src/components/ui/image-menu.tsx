import { Menu, User, FolderPlus, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddtoAlbumDialog } from "../add-to-album-dealog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            <AddtoAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button asChild variant="ghost">
              <Link
                className="cursor-pointer"
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              >
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
