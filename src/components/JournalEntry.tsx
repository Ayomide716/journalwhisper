import { format } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface JournalEntryProps {
  title: string;
  content: string;
  date: Date;
  onClick?: () => void;
}

export function JournalEntry({ title, content, date, onClick }: JournalEntryProps) {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer animate-fadeIn"
      onClick={onClick}
    >
      <CardHeader className="space-y-1">
        <h3 className="font-serif text-xl font-bold text-journal-800">{title}</h3>
        <p className="text-sm text-journal-500">{format(date, "MMMM d, yyyy")}</p>
      </CardHeader>
      <CardContent>
        <p className="text-journal-600 line-clamp-3">{content}</p>
      </CardContent>
    </Card>
  );
}