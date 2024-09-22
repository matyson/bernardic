import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { words } from "@/db/db";

const searchSchema = z.object({
  word: z.string().optional(),
});

export const Route = createFileRoute("/words/")({
  component: Page,
  validateSearch: (search) => searchSchema.parse(search),
});

function Page() {
  const { word } = Route.useSearch();

  if (word) {
    const wordData = words.filter((w) =>
      w.word.toLowerCase().includes(word.toLowerCase()),
    );
    if (!wordData.length) {
      return <div>Word not found</div>;
    }
    return (
      <>
        {wordData.map((w) => (
          <div key={w.word}>
            <h1>{w.word}</h1>
            <p>{w.definition}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <div> Nothing to see here. Search for a word in the search bar above</div>
  );
}
