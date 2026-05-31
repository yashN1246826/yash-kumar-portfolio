"use client";

import { useState } from "react";

export default function AboutStory() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-slate-500">
              // section.story
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              I build systems with engineering depth and real-world purpose.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              I am a final-year Computer Science student at Nottingham Trent
              University, focused on building practical systems across AI,
              robotics, cloud and backend engineering. My projects are not just
              demos — they include architecture, data flow, measurable outcomes
              and working implementation evidence.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 rounded-full border border-slate-900 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white"
            >
              Read my story →
            </button>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <div className="grid grid-cols-2 gap-4">
              <Stat value="6" label="Projects" sub="AI · Robotics · Cloud" />
              <Stat value="30" label="FPS" sub="pose capture target" />
              <Stat value="5×" label="Faster" sub="5 min → 60 sec" />
              <Stat value="3D" label="Vision" sub="dual-camera analysis" />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <div className="max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl md:p-12">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-slate-500">
                  My Story
                </p>
                <h3 className="text-3xl font-black text-slate-950 md:text-5xl">
                  From learning systems to building them.
                </h3>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                My interest in technology has always come from wanting to
                understand how systems work underneath the surface. At university,
                I started moving beyond theory and focused on building complete
                applications that connect algorithms, interfaces, data pipelines
                and real user problems.
              </p>

              <p>
                My strongest project is my Virtual AI Fitness Trainer, a
                dual-camera computer vision system for analysing deadlift form.
                I built it using Python, OpenCV, MediaPipe, stereo reconstruction
                and a PyQt5 interface. The system processes front and side camera
                views to recover more meaningful 3D movement information than a
                single-camera setup can provide.
              </p>

              <p>
                A key engineering decision was using parallel processing instead
                of a linear video pipeline. Processing both camera feeds one after
                the other created long waiting times, so I restructured the flow
                to reduce analysis time from around 5 minutes to about 60 seconds
                while targeting 30 FPS capture. That made the system feel much
                closer to a usable product rather than just an academic prototype.
              </p>

              <p>
                I also created a custom droop-ratio metric for back rounding
                detection. A basic spine-angle method produced false positives
                because deadlifts naturally involve forward lean. The droop ratio
                compares shoulder and hip displacement, making the detection more
                specific to actual rounding rather than normal lifting posture.
              </p>

              <p>
                Alongside this, I have built projects in ROS2 and Gazebo robotics,
                Hadoop-based data analysis, cloud service orchestration, a C++
                timetabling system and a hybrid GymAsis AI chatbot. Across these
                projects, I try to show the same thing: not just what the software
                does, but how the system is designed, why the technical decisions
                were made, and what measurable result came from the implementation.
              </p>

              <p>
                My goal is to grow into a software engineering role where I can
                work on reliable systems, AI-enabled products, backend services
                and cloud-based platforms. I enjoy building, debugging, improving
                performance and explaining technical decisions clearly.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Stat({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="text-3xl font-black text-slate-950">{value}</div>
      <div className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-sm text-slate-500">{sub}</div>
    </div>
  );
}