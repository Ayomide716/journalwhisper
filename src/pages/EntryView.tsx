import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { toast } from "sonner";
import { getEntries, JournalEntryType } from "@/lib/storage";

const EntryView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState<JournalEntryType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const entries = getEntries();
    const foundEntry = entries.find(e => e.id === id);
    if (foundEntry) {
      setEntry(foundEntry);
      setTitle(foundEntry.title);
      setContent(foundEntry.content);
    } else {
      toast.error("Entry not found");
      navigate("/");
    }
  }, [id, navigate]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    const entries = getEntries();
    const updatedEntries = entries.map(e => 
      e.id === id ? { ...e, title, content } : e
    );
    
    localStorage.setItem("journal_entries", JSON.stringify(updatedEntries));
    
    // Dispatch custom event to notify Index component
    window.dispatchEvent(new Event('entryUpdated'));
    
    toast.success("Entry updated successfully!");
    setIsEditing(false);
  };

  if (!entry) return null;

  return (
    <>
      <Navigation />
      <main className="container max-w-2xl mx-auto px-4 pt-24 pb-8 animate-fadeIn">
        <Button
          variant="ghost"
          className="mb-8 gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        {isEditing ? (
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <Input
                placeholder="Entry Title"
                className="text-xl font-serif border-none text-journal-800 focus-visible:ring-0 px-0 text-2xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <Textarea
              placeholder="Write your thoughts..."
              className="min-h-[400px] resize-none border-none focus-visible:ring-0 px-0 text-journal-700"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <div className="flex justify-end gap-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-journal-800 hover:bg-journal-900">
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <h1 className="text-3xl font-serif font-bold text-journal-800">
              {entry.title}
            </h1>
            <p className="text-sm text-journal-500">
              {new Date(entry.date).toLocaleDateString()}
            </p>
            <div className="journal-content whitespace-pre-wrap">
              {entry.content}
            </div>
            <div className="flex justify-end">
              <Button 
                onClick={() => setIsEditing(true)}
                className="bg-journal-800 hover:bg-journal-900"
              >
                Edit Entry
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default EntryView;