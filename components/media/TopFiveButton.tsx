"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import { handleRemoveFromTopFiveMovies } from "@/app/actions";

interface TopFiveButtonProps {
  isTopFive?: boolean;
}

function TopFiveButton({ isTopFive }: TopFiveButtonProps) {
  const { toast } = useToast();

  return (
    <>
      {isTopFive ? (
        <Button
          className="w-full"
          onClick={() => {
            handleRemoveFromTopFiveMovies();
            toast({
              title: "Removed From Top Five",
              description: "Removed From Top Five",
            });
          }}
        >
          Remove From Top Five
        </Button>
      ) : (
        <Button
          className="w-full bg-muted-foreground text-secondary"
          variant={"outline"}
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Add To Top Five
        </Button>
      )}
    </>
  );
}

export default TopFiveButton;
