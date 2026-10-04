const posts = [
  {
    title: "Howard Roark’s courtroom speech, Part IV, Chapter 18",
    href: "/thoughts/howard-roark-courtroom-speech",
  },
  {
    title: "Oscar Bosetti",
    href: "/thoughts/oscar-bosetti",
  },
];

export default function PostList() {
  return (
    <ul className="thoughts-list" aria-label="Posts">
      {posts.map((post) => (
        <li key={post.href}>
          <a className="thought-entry" href={post.href}>
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
