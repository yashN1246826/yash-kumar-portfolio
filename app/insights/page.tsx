import Link from "next/link";
import { getAllInsights, getFeaturedInsight } from "@/lib/insights";

const categories = [
  "All",
  "Interviews",
  "Tech Thoughts",
  "Business Ideas",
  "Career Journey",
  "Future Plans",
  "Learning Notes",
];

export default function InsightsPage() {
  const posts = getAllInsights();
  const featured = getFeaturedInsight();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white px-6 py-10 text-slate-950 sm:px-10 lg:py-14">
      <section className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                Insights
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Ideas, conversations and reflections from my tech journey.
              </h1>

              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />

              <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
                A space where I share interview previews, technology thoughts,
                business ideas, career reflections and what I’m currently
                exploring in software engineering, AI and emerging technology.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-5 shadow-inner">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Current themes
              </p>

              <div className="grid gap-3">
                {[
                  "Interviews",
                  "Computer Vision",
                  "AI Business",
                  "Career Growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                  >
                    <p className="text-sm font-bold text-slate-950">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-10 rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3">
                {featured.thumbnail ? (
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.thumbnail}
                      alt={featured.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-slate-100 px-8 text-center">
                    <p className="text-sm font-semibold text-slate-500">
                      Add a thumbnail from the admin panel
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                  Featured Reflection
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {featured.title}
                </h2>

                <p className="mt-5 text-base font-medium leading-8 text-slate-700">
                  {featured.preview}
                </p>

                {featured.takeaway && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      What I learned / what I think
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                      {featured.takeaway}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {featured.ctaUrl && (
                  <a
                    href={featured.ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                  >
                    {featured.ctaLabel || "View Post"} →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Filter visual only for now */}
        <div className="mb-10 rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-md sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    index === 0
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <input
              placeholder="Search insights, topics or people..."
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 lg:max-w-sm"
            />
          </div>
        </div>

        {/* Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/80 shadow-md shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="bg-white p-3">
                {post.thumbnail ? (
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-slate-100 px-8 text-center">
                    <p className="text-sm font-semibold text-slate-500">
                      Add a thumbnail from the admin panel
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  {post.category}
                </p>

                <h3 className="text-xl font-bold tracking-tight text-slate-950">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm font-medium leading-6 text-slate-700">
                  {post.preview}
                </p>

                {post.takeaway && (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Thought
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-700">
                      {post.takeaway}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                    Read More →
                </Link>

                {post.ctaUrl && (
                    <a
                    href={post.ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
                    >
                    LinkedIn →
                    </a>
                )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              No insights yet.
            </h2>
            <p className="mt-3 text-slate-700">
              Create your first post from the admin panel.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}