import { JournalEntry } from "@/components/JournalEntry";
import { NewEntryButton } from "@/components/NewEntryButton";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Temporary mock data
  const entries = [
    {
      id: 1,
      title: "A New Beginning",
      content: "Today marks the start of my journaling journey. I've always wanted to keep a diary but never found the right moment. This app feels different - clean, simple, and inviting.",
      date: new Date(),
    },
    {
      id: 2,
      title: "Reflections",
      content: "Spent the morning walking through the park, watching the leaves dance in the wind. It's amazing how these quiet moments can bring such clarity.",
      date: new Date(Date.now() - 86400000),
    },
  ];

  return (
    <div className="container py-8 max-w-2xl animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-journal-800">My Journal</h1>
        <NewEntryButton />
      </div>
      
      <div className="space-y-4">
        {entries.map((entry) => (
          <JournalEntry
            key={entry.id}
            {...entry}
            onClick={() => navigate(`/entry/${entry.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;