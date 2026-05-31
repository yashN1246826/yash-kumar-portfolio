import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";

type InsightDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const posts = getAllInsights();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white px-6 py-10 text-slate-950 sm:px-10 lg:py-14">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/insights"
          className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
        >
          ← Back to Insights
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-xl shadow-slate-900/5">
          <div className="bg-white p-4 sm:p-6">
            {post.thumbnail ? (
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-slate-100 px-8 text-center">
                <p className="text-sm font-semibold text-slate-500">
                  Add a thumbnail from the admin panel
                </p>
              </div>
            )}
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              {post.category}
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-slate-700">
              {post.preview}
            </p>

            {post.takeaway && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  What I learned / what I think
                </p>
                <p className="mt-3 text-base font-medium leading-8 text-slate-700">
                  {post.takeaway}
                </p>
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.body && (
              <div className="prose prose-slate mt-10 max-w-none">
                {post.body.split("\n").map((line, index) => {
                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="mt-10 text-2xl font-bold tracking-tight text-slate-950"
                      >
                        {line.replace("## ", "")}
                      </h2>
                    );
                  }

                  if (line.trim() === "") {
                    return <br key={index} />;
                  }

                  return (
                    <p
                      key={index}
                      className="text-base font-medium leading-8 text-slate-700"
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/insights"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Back to Insights
              </Link>

              {post.ctaUrl && (
                <a
                  href={post.ctaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                >
                  {post.ctaLabel || "View LinkedIn Post"} →
                </a>
              )}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}