import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/words/$wordId')({
  component: () => <div>Hello /words/$wordId!</div>,
})
