import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white px-6 py-14 text-slate-950 sm:px-10 lg:py-20">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12 lg:p-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
            Contact
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Let’s connect and talk about opportunities.
              </h1>

              <div className="mt-6 h-1.5 w-28 rounded-full bg-blue-500" />

              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-slate-700">
                I’m open to graduate software engineering roles, AI projects,
                backend systems, cloud work, technical collaborations and
                early-career opportunities.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:yashkumar0083@gmail.com?subject=Portfolio%20Contact%20-%20Yash%20Kumar"
                  className="rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                >
                  Email Me →
                </a>

                <Link
                  href="/"
                  className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Back Home
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-900/5 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Contact Details
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:YOUR_EMAIL_HERE"
                    className="mt-2 block text-lg font-bold text-slate-950 transition hover:text-blue-600"
                  >
                    yashkumar0083@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Phone
                  </p>
                  <a
                    href="tel:+4407780198393"
                    className="mt-2 block text-lg font-bold text-slate-950 transition hover:text-blue-600"
                  >
                    +44 07780 198393
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-950">
                    Nottingham, United Kingdom
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/yash-kumar-tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg font-bold text-slate-950 transition hover:text-blue-600"
                  >
                    linkedin.com/in/yash-kumar-tech
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/yashN1246826"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg font-bold text-slate-950 transition hover:text-blue-600"
                  >
                    github.com/yashN1246826
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}