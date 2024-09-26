import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/words/$word")({
  component: Page,
});

function Page() {
  const { word } = Route.useParams();

  return (
    <div>
      <h1>Word: {word}</h1>
    </div>
  );
}
