import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Navigation } from "@/components/Navigation";
import { saveEntry } from "@/lib/storage";

const NewEntry = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    saveEntry({
      title,
      content,
      date: new Date().toISOString(),
    });
    
    toast.success("Entry saved successfully!");
    navigate("/");
  };

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

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="flex justify-end">
            <Button type="submit" className="bg-journal-800 hover:bg-journal-900">
              Save Entry
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default NewEntry;