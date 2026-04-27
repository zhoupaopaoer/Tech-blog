import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

export function getAllTags(posts: BlogPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
    a.localeCompare(b, "zh-CN")
  );
}

export function getAllCategories(posts: BlogPost[]) {
  return [...new Set(posts.map((post) => post.data.category))].sort((a, b) =>
    a.localeCompare(b, "zh-CN")
  );
}

export function getArchiveGroups(posts: BlogPost[]) {
  const groups = new Map<
    string,
    {
      year: string;
      posts: BlogPost[];
    }
  >();

  for (const post of posts) {
    const year = String(post.data.pubDate.getFullYear());
    const current = groups.get(year);

    if (current) {
      current.posts.push(post);
    } else {
      groups.set(year, { year, posts: [post] });
    }
  }

  return [...groups.values()].sort((a, b) => Number(b.year) - Number(a.year));
}

export function getRelatedPosts(post: BlogPost, posts: BlogPost[], limit = 3) {
  return posts
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => {
      const sharedTags = candidate.data.tags.filter((tag) =>
        post.data.tags.includes(tag)
      ).length;
      const categoryScore =
        candidate.data.category === post.data.category ? 2 : 0;

      return {
        post: candidate,
        score: sharedTags + categoryScore
      };
    })
    .filter((item) => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime()
    )
    .slice(0, limit)
    .map((item) => item.post);
}

export function paginatePosts(posts: BlogPost[], page: number, pageSize = 12) {
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    page: currentPage,
    pageSize,
    totalPages,
    items: posts.slice(start, end)
  };
}
