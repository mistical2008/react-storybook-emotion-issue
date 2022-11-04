import fetch from "cross-fetch";
import { useQuery } from "react-query";
import type { Post } from "./types";
import { css } from "@emotion/react";

export function App() {
  const { isLoading, isSuccess, isError, data } = useQuery<Post[]>(
    "posts",
    () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
        if (res.ok) return res.json();

        throw res;
      })
  );

  return (
    <main>
      {/*NOTE: @emotion css prop usage */}
      <h1 css={css({ color: "red", fontSize: "1.5em" })}>
        Storybook Testing Example
      </h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {isSuccess &&
        data!.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      {isError && <span>Error loading posts</span>}
    </main>
  );
}
