import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export function NewEntryButton() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <Button
      onClick={() => navigate("/new")}
      className={`gap-2 bg-journal-800 hover:bg-journal-900 ${
        isMobile ? 'rounded-full w-14 h-14 shadow-lg' : ''
      }`}
    >
      <Plus className={`${isMobile ? 'h-6 w-6' : 'h-4 w-4'}`} />
      {!isMobile && "New Entry"}
    </Button>
  );
}