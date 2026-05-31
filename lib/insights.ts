import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type InsightPost = {
  title: string;
  slug: string;
  category: string;
  postType: string;
  date: string;
  thumbnail?: string;
  preview: string;
  takeaway?: string;
  tags?: string[];
  keywords?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  featured?: boolean;
  published?: boolean;
  body: string;
};

const insightsDirectory = path.join(process.cwd(), "content", "insights");

export function getAllInsights(): InsightPost[] {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(insightsDirectory)
    .filter((file) => file.endsWith(".md"));

  const posts = files.map((file) => {
    const filePath = path.join(insightsDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title || "",
      slug: data.slug || file.replace(".md", ""),
      category: data.category || "Learning Notes",
      postType: data.postType || "Reflection",
      date: data.date || "",
      thumbnail: data.thumbnail || "",
      preview: data.preview || "",
      takeaway: data.takeaway || "",
      tags: data.tags || [],
      keywords: data.keywords || [],
      ctaLabel: data.ctaLabel || "Read More",
      ctaUrl: data.ctaUrl || "",
      featured: Boolean(data.featured),
      published: data.published !== false,
      body: content,
    } as InsightPost;
  });

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedInsight() {
  const posts = getAllInsights();
  return posts.find((post) => post.featured) || posts[0];
}

export function getInsightBySlug(slug: string): InsightPost | undefined {
  const posts = getAllInsights();
  return posts.find((post) => post.slug === slug);
}