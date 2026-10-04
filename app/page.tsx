import type { Metadata } from "next";
import PostList from "./post-list";

export const metadata: Metadata = {
  title: "Santiago Ruberto",
  description: "Posts and writings collected by Santiago Ruberto.",
  alternates: { canonical: "https://www.santiagoruberto.com" },
};

export default function Home() {
  return (
    <main className="thoughts-page">
      <PostList />
    </main>
  );
}
