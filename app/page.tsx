"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const experience = [
  {
    date: "May 2025 — Jul 2025",
    role: "Software Engineer Intern",
    company: "Makeke.shop",
    points: [
      "Optimised Google Maps API rendering, reducing load time by 1.5 seconds.",
      "Built and maintained containerised Python/Flask APIs with reliable deployments.",
      "Troubleshot production issues using logs, debugging and defect resolution.",
      "Contributed to peer code reviews and improved coding standards.",
    ],
  },
  {
    date: "Jun 2024 — Jul 2024",
    role: "Teacher Assistant",
    company: "Bluecoat SCITT Alliance",
    points: [
      "Explained technical concepts clearly to students with different learning needs.",
      "Worked with teaching staff to plan, adapt and deliver structured content.",
      "Built communication, organisation and stakeholder-engagement skills.",
      "Developed reliability and adaptability in a fast-paced environment.",
    ],
  },
  {
    date: "Dec 2023 — Mar 2025",
    role: "Customer Service Assistant",
    company: "Premier Stores",
    points: [
      "Handled customer queries in a fast-paced retail environment.",
      "Developed confidence, communication and problem-solving skills.",
      "Managed daily responsibilities with consistency alongside university study.",
      "Built strong attention to detail through stock, payments and customer support tasks.",
    ],
  },
];

const education = [
  {
    date: "Jul 2023 — Jul 2026",
    degree: "BSc Computer Science with Artificial Intelligence",
    place: "Nottingham Trent University",
    detail:
      "Predicted First-Class Honours. Relevant areas include software engineering, cloud computing, databases, machine learning, operating systems, computer networks and technical writing.",
  },
];

const focus = [
  {
    title: "Build",
    text: "I design and implement backend systems, APIs and AI applications with practical use cases.",
    icon: "⚙️",
  },
  {
    title: "Scale",
    text: "I focus on reliability, deployment, performance and the engineering trade-offs behind production systems.",
    icon: "📈",
  },
  {
    title: "Explain",
    text: "I communicate technical work clearly, from architecture decisions to user-facing product value.",
    icon: "💡",
  },
];

export default function Home() {
  const [showStory, setShowStory] = useState(false);
  const [visibleExperience, setVisibleExperience] = useState({});

  return (
    <div className="bg-gradient-to-b from-white via-slate-50/30 to-white text-slate-900 overflow-hidden">
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          h1, h2, h3, .font-black {
            font-family: 'Syne', sans-serif;
          }
          
          ::selection {
            background-color: rgba(37, 99, 235, 0.15);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .card-hover {
            transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }
          
          .skill-tag {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.05), rgba(15, 23, 42, 0.05));
            border: 1px solid rgba(71, 85, 105, 0.2);
            transition: all 0.3s ease;
          }
          
          .skill-tag:hover {
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.05));
            border-color: rgba(37, 99, 235, 0.3);
            transform: translateY(-2px);
          }
          
          .timeline-dot {
            transition: all 0.3s ease;
            box-shadow: 0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 6px rgba(71, 85, 105, 0.2);
          }
          
          .timeline-dot:hover {
            box-shadow: 0 0 0 4px rgba(255, 255, 255, 1), 0 0 12px rgba(37, 99, 235, 0.4);
          }
        `}</style>


              {/* HERO SECTION */}
        <section className="relative flex items-start justify-center overflow-hidden pt-10 pb-16">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 py-8 lg:py-12 w-full">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  <span className="text-xs font-bold tracking-wider text-blue-700">
                    BSc Computer Science
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                  <span className="gradient-text">Engineering </span>
                  <span className="text-slate-950">backend systems, AI applications and cloud services.</span>
                </h1>

                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
              </div>

              {/* Subheading */}
              <div className="max-w-2xl">
                <p className="text-xl sm:text-2xl leading-relaxed text-slate-700 font-medium">
                  Distributed systems, computer vision, robotics simulation and practical software delivery.
                </p>
                <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
                  I build technical projects with measurable engineering outcomes — from dual-camera AI analysis and ROS2 navigation to cloud-backed APIs and data processing systems.
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["Python", "C++", "Docker", "Azure", "Computer Vision"].map((skill, idx) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 text-xs font-bold text-slate-700 rounded-full"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-slate-950 to-slate-800 text-white font-bold text-sm transition-all hover:shadow-xl hover:shadow-slate-900/20 active:scale-95"
                >
                  View Projects
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/insights"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-900 font-bold text-sm hover:border-slate-400 hover:bg-slate-50 transition-all"
                >
                  Read Insights
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-[2.5rem] blur-2xl" />
                
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/50 bg-white shadow-2xl shadow-slate-900/10">
                  <Image
                    src="/yash-profile.jpg"
                    alt="Yash Kumar at a technology event"
                    width={800}
                    height={1000}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="card-hover rounded-3xl border border-slate-200/50 bg-white/50 backdrop-blur-sm p-8 md:p-16 shadow-lg shadow-slate-900/5">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">About</p>
                <h2 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                  Build, learn and keep improving.
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-slate-700">
                   I am a recent Computer Science graduate at Nottingham Trent University, focused on backend engineering, AI systems, robotics simulation and cloud-backed services. I like projects where I can design the architecture, build the system and explain the technical decisions clearly.
                </p>

                {showStory && (
                  <div className="space-y-6 text-base leading-relaxed text-slate-600 border-t border-slate-200 pt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <p>
                      My strongest projects are practical systems: a dual-camera AI fitness trainer, a ROS2 autonomous robot simulation, a cloud service orchestrator, a Hadoop data analysis workflow and a C++ timetabling system.
                    </p>
                    <p>
                      I care about measurable engineering outcomes. For example, in my fitness trainer project I used parallel video processing to reduce analysis time from around 5 minutes to about 60 seconds while working with 30 FPS capture and dual-camera movement data.
                    </p>
                    <p>
                      I enjoy turning complex technical work into clear evidence: architecture diagrams, GitHub repositories, screenshots, measurable improvements and concise explanations of why each design decision matters.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setShowStory(!showStory)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-slate-300 bg-white text-xs font-bold uppercase tracking-wider text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white transition-all duration-300"
                >
                  {showStory ? "Show Less" : "Read Full Story"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Professional</p>
            <h2 className="text-4xl sm:text-5xl font-black">Timeline</h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Practical experience across software engineering, teaching, communication and customer-facing environments.
            </p>
          </div>

          <div className="relative ml-4 md:ml-8">
            {/* Timeline line */}
            <div className="absolute left-2.5 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent" />

            {experience.map((item, idx) => (
              <div 
                key={`${item.role}-${item.company}`} 
                className="relative mb-16 group cursor-pointer"
                onMouseEnter={() => setVisibleExperience(prev => ({ ...prev, [idx]: true }))}
                onMouseLeave={() => setVisibleExperience(prev => ({ ...prev, [idx]: false }))}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[19px] md:-left-[26px] top-6 timeline-dot h-6 w-6 rounded-full bg-white border-2 border-blue-400 shadow-md" />

                {/* Card */}
                <div className="card-hover ml-12 md:ml-20 rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-8 shadow-md shadow-slate-900/5">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-950">{item.role}</h3>
                      <p className="text-sm font-medium text-slate-500">{item.company}</p>
                    </div>
                    <div className="inline-block rounded-full bg-slate-100/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 whitespace-nowrap">
                      {item.date}
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {item.points.map((point, pointIdx) => (
                      <li 
                        key={point} 
                        className="flex gap-4 text-sm leading-relaxed text-slate-600 animate-in fade-in slide-in-from-left-4"
                        style={{ transitionDelay: `${pointIdx * 50}ms` }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Education</p>
            <h2 className="text-4xl sm:text-5xl font-black">Academic Foundation</h2>
          </div>

          <div className="relative ml-4 md:ml-8">
            {/* Timeline line */}
            <div className="absolute left-2.5 md:left-4 top-0 h-24 w-0.5 bg-gradient-to-b from-slate-300 to-transparent" />

            {education.map((item) => (
              <div key={item.degree} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[19px] md:-left-[26px] top-6 timeline-dot h-6 w-6 rounded-full bg-white border-2 border-slate-400 shadow-md" />

                {/* Card */}
                <div className="card-hover ml-12 md:ml-20 rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-8 shadow-md shadow-slate-900/5">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      <h3 className="max-w-2xl text-2xl font-bold leading-tight text-slate-950">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-500">{item.place}</p>
                    </div>
                    <div className="inline-block rounded-full bg-slate-100/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 whitespace-nowrap">
                      {item.date}
                    </div>
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Methodology</p>
            <h2 className="text-4xl sm:text-5xl font-black">Build. Scale. Explain.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {focus.map((item, idx) => (
              <div 
                key={item.title} 
                className="card-hover group rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm p-8 shadow-md shadow-slate-900/5 flex flex-col"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 flex-grow">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="card-hover relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 md:p-16 shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Next Steps</p>
                <h2 className="text-4xl sm:text-5xl font-black text-white">
                  Projects show the engineering.
                </h2>
                <p className="text-base leading-relaxed text-slate-300">
                  My projects demonstrate backend systems, AI applications, robotics simulation, cloud services and the architecture behind them.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects" 
                  className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:shadow-xl hover:shadow-white/20 active:scale-95"
                >
                  View Projects
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link 
                  href="/insights" 
                  className="group inline-flex items-center justify-center rounded-full border-2 border-slate-600 bg-transparent px-8 py-4 text-sm font-bold text-white hover:border-slate-400 hover:bg-slate-800/50 transition-all"
                >
                  Read Insights
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-200/30 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          <p>Crafted with precision • © 2026 Yash Kumar</p>
        </div>
      </footer>
    </div>
  );
}
