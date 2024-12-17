import { JournalEntry } from "@/components/JournalEntry";
import { NewEntryButton } from "@/components/NewEntryButton";
import { Navigation } from "@/components/Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const isMobile = useIsMobile();
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
    <>
      <Navigation />
      <main className="container max-w-2xl mx-auto px-4 pt-24 pb-8 animate-fadeIn">
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-journal-800">Recent Entries</h1>
          {isMobile ? null : <NewEntryButton />}
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

        {isMobile && (
          <div className="fixed bottom-6 right-6">
            <NewEntryButton />
          </div>
        )}
      </main>
    </>
  );
};

export default Index;
