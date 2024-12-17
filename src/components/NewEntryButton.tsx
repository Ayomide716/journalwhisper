import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function NewEntryButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/new")}
      className="gap-2 bg-journal-800 hover:bg-journal-900"
    >
      <Plus className="h-4 w-4" /> New Entry
    </Button>
  );
}