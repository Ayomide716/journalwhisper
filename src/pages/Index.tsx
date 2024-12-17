import { JournalEntry } from "@/components/JournalEntry";
import { NewEntryButton } from "@/components/NewEntryButton";
import { Navigation } from "@/components/Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import { getEntries } from "@/lib/storage";
import { useEffect, useState } from "react";
import type { JournalEntryType } from "@/lib/storage";

const Index = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [entries, setEntries] = useState<JournalEntryType[]>([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  return (
    <>
      <Navigation />
      <main className="container max-w-2xl mx-auto px-4 pt-24 pb-8 animate-fadeIn">
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-journal-800">Recent Entries</h1>
          {isMobile ? null : <NewEntryButton />}
        </div>
        
        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-center text-journal-600 py-8">No entries yet. Start writing your first entry!</p>
          ) : (
            entries.map((entry) => (
              <JournalEntry
                key={entry.id}
                title={entry.title}
                content={entry.content}
                date={new Date(entry.date)}
                onClick={() => navigate(`/entry/${entry.id}`)}
              />
            ))
          )}
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