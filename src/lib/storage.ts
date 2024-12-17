export interface JournalEntryType {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const saveEntry = (entry: Omit<JournalEntryType, "id">) => {
  const entries = getEntries();
  const newEntry = {
    ...entry,
    id: crypto.randomUUID(),
  };
  
  entries.unshift(newEntry);
  localStorage.setItem("journal_entries", JSON.stringify(entries));
  return newEntry;
};

export const getEntries = (): JournalEntryType[] => {
  const entries = localStorage.getItem("journal_entries");
  return entries ? JSON.parse(entries) : [];
};

export const updateEntry = (id: string, updates: Partial<JournalEntryType>) => {
  const entries = getEntries();
  const updatedEntries = entries.map(entry =>
    entry.id === id ? { ...entry, ...updates } : entry
  );
  localStorage.setItem("journal_entries", JSON.stringify(updatedEntries));
  return updatedEntries.find(entry => entry.id === id);
};