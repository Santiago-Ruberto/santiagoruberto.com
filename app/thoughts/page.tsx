import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts — Santiago Ruberto",
  description: "Essays, writings, and ideas by Santiago Ruberto.",
};

const thoughts = [
  {
    title: "Oscar Bosetti",
    href: "/thoughts/oscar-bosetti",
  },
];

export default function ThoughtsPage() {
  return (
    <main className="thoughts-page">
      <h1>Thoughts</h1>

      <section className="thoughts-list" aria-label="Thoughts">
        {thoughts.map((thought) => (
          <a className="thought-entry" href={thought.href} key={thought.href}>
            <span className="thought-marker" aria-hidden="true" />
            <span>{thought.title}</span>
          </a>
        ))}
      </section>
    </main>
  );
}
