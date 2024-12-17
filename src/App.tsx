import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewEntry from "./pages/NewEntry";
import EntryView from "./pages/EntryView";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/new" element={<NewEntry />} />
        <Route path="/entry/:id" element={<EntryView />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;