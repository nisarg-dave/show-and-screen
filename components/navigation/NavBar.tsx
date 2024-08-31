import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getSession } from "@/app/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutButton } from "../authentication/AuthButtons";

async function NavBar() {
  const session = await getSession();
  return (
    <header className="bg-primary px-4 h-14 sticky z-30 top-0 text-secondary">
      <div className="flex justify-between pt-3">
        <Link className="text-xl font-semibold cursor-pointer" href="/home">
          <span>Show & Screen</span>
        </Link>
        <div className="flex space-x-4">
          <nav className="mt-1">
            <Link
              className="font-medium text-sm ml-4 hover:underline"
              href="/watched"
            >
              Watched
            </Link>
            <Link
              className="font-medium text-sm ml-4 hover:underline"
              href="/toWatch"
            >
              To Watch
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8">
                <AvatarImage src={session?.user?.image!} />
                <AvatarFallback>{session?.user?.name}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-muted-foreground">
              <DropdownMenuItem className="flex justify-center">
                {session?.user?.name}
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <LogOutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
