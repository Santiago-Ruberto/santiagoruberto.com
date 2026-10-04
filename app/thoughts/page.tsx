import type { Metadata } from "next";
import PostList from "../post-list";

export const metadata: Metadata = {
  title: "Thoughts — Santiago Ruberto",
  description: "Essays, writings, and ideas by Santiago Ruberto.",
};

export default function ThoughtsPage() {
  return (
    <main className="thoughts-page">
      <h1>Thoughts</h1>

      <PostList />
    </main>
  );
}
