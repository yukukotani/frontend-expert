import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown/markdownToHtml";

type PostMetaData = {
  title: string;
  author: string;
  editor?: string | string[];
  createdAt: string;
  updatedAt: string;
  tags: string[];
  summary: string;
};

export type PostData = {
  slug: string;
  content: string;
  metaData: PostMetaData;
};

const postsDirectoryPath = path.join(process.cwd(), "data", "posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectoryPath);
}

function assertMetaData(metaData: any): asserts metaData is PostMetaData {
  const missingProperties: Array<keyof PostMetaData> = [];
  if (!("title" in metaData)) {
    missingProperties.push("title");
  }
  if (!("author" in metaData)) {
    missingProperties.push("author");
  }
  if (!("createdAt" in metaData)) {
    missingProperties.push("createdAt");
  }
  if (!("updatedAt" in metaData)) {
    missingProperties.push("updatedAt");
  }
  if (!("tags" in metaData)) {
    missingProperties.push("tags");
  }
  if (!("summary" in metaData)) {
    missingProperties.push("summary");
  }
  if (missingProperties.length > 0) {
    throw new Error(`Missing meta data: ${missingProperties.join(", ")}`);
  }
}

export async function getPostBySlug(slug: string): Promise<PostData> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectoryPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (!data.updatedAt) data.updatedAt = data.createdAt;
  if (!data.tags) {
    data.tags = [];
  } else {
    data.tags = Array.from(new Set(data.tags));
  }

  assertMetaData(data);

  return {
    slug: realSlug,
    content: await markdownToHtml(content),
    metaData: data,
  };
}

let posts: PostData[];

export async function getAllPosts() {
  if (posts) {
    return posts;
  }
  const slugs = getPostSlugs();
  const _posts = await Promise.all(slugs.map(getPostBySlug));

  return _posts.sort((post1, post2) =>
    post1.metaData.createdAt > post2.metaData.createdAt ? -1 : 1
  );
}

export async function getPostsByAuthor(authorName: string) {
  posts = await getAllPosts();
  return posts.filter((post) => post.metaData.author === authorName);
}

export async function getAllTags() {
  posts = await getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((post) => post.metaData.tags)));
  return tags;
}

export async function getPostsByTag(tag: string) {
  posts = await getAllPosts();
  return posts.filter((post) => post.metaData.tags.includes(tag));
}
