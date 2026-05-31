"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useRef, useState } from "react";

type EvidenceCard = {
  title: string;
  text: string;
};

type EvidenceSlide = {
  label: string;
  title: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  cards?: EvidenceCard[];
};

type Project = {
  title: string;
  type: string;
  category: "AI" | "Robotics" | "Cloud" | "Big Data" | "Software";
  status: string;
  description: string;
  stack: string[];
  github?: string;
  slides: EvidenceSlide[];
};

const projects: Project[] = [
  {
    title: "Virtual AI Fitness Trainer",
    type: "Computer Vision / AI System",
    category: "AI",
    status: "Final Year Project",
    github: "https://github.com/yashN1246826/DeadliftAnlayser",
    description:
      "A dual-camera AI system for 3D deadlift analysis, combining pose estimation, stereo reconstruction, parallel video processing and rule-based biomechanics.",
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyQt5",
      "NumPy",
      "Stereo Vision",
      "Computer Vision",
    ],
    slides: [
      {
        label: "Project Summary",
        title: "Architecture, performance and evaluation",
        cards: [
          {
            title: "Problem",
            text:
              "Single-camera form analysis loses depth and viewing-plane context, making deadlift faults such as back rounding and lateral tilt harder to measure reliably.",
          },
          {
            title: "Technical Build",
            text:
              "Engineered a dual-camera pipeline using OpenCV, MediaPipe, stereo reconstruction, rule-based biomechanics and a PyQt5 desktop interface.",
          },
          {
            title: "Evaluation",
            text:
              "Tested on 21 recorded sessions with 151 manually counted reps. The system detected 152 reps, giving 100.7% rep-count coverage.",
          },
          {
            title: "Outcome",
            text:
              "Achieved 85.7% of sessions within ±1 rep, 81.4% lateral-tilt precision, 92.7% lateral-tilt accuracy and 84.2% back-rounding precision.",
          },
        ],
      },
      {
        label: "System Architecture",
        title: "Dual-camera 3D analysis pipeline",
        image: "/projects/fitness-trainer/virtual_ai_fitness_trainer_architecture.png",
        imageAlt: "Virtual AI Fitness Trainer system architecture",
        text:
          "Designed a modular pipeline separating camera capture, 2D pose extraction, stereo reconstruction, repetition detection and biomechanics scoring. The two-camera setup enables multi-plane analysis: side view for sagittal faults and front view for coronal-plane tilt.",
      },
      {
        label: "Parallel Processing",
        title: "5× faster session analysis",
        image: "/projects/fitness-trainer/session-review.jpeg",
        imageAlt: "Deadlift session review interface",
        text:
          "Implemented parallel video processing instead of a linear frame-by-frame workflow. This reduced end-to-end analysis time from around 5 minutes to under 60 seconds, an 80% reduction, while maintaining 30 FPS capture for smoother pose extraction.",
      },
      {
        label: "Custom Metric",
        title: "Droop-ratio back-rounding model",
        image: "/projects/fitness-trainer/droop-ratio.jpeg",
        imageAlt: "Droop ratio metric for deadlift back rounding",
        text:
          "Developed a custom droop-ratio metric to separate genuine spinal rounding from natural deadlift forward lean. Instead of relying only on spine angle, the model compares shoulder-to-hip drift, reducing false positives during hip-hinge movement.",
      },
      {
        label: "Session Review",
        title: "Per-rep scoring and fault detection",
        image: "/projects/fitness-trainer/session-review.jpeg",
        imageAlt: "Deadlift session review interface",
        text:
          "Converted raw pose landmarks into structured rep-level feedback. Each repetition is scored using detected faults such as back rounding and lateral tilt, turning pose data into interpretable biomechanics feedback.",
      },
      {
        label: "Progress Tracking",
        title: "Longitudinal training analytics",
        image: "/projects/fitness-trainer/progress-tracker.jpeg",
        imageAlt: "Deadlift progress tracking dashboard",
        text:
          "Persisted session summaries as structured logs to support progress tracking over time. This turns the analyser from a one-off feedback tool into a longitudinal performance system for monitoring technique improvements.",
      },
    ],
  },
  {
    title: "ROS2 Autonomous Robot Simulation",
    type: "Robotics / Navigation System",
    category: "Robotics",
    status: "Simulation Project",
    github: "https://github.com/yashN1246826/ROS2-Autonomous-Robot-Simulation",
    description:
      "A ROS2 and Gazebo robotics simulation with autonomous navigation, object detection, odometry and landmark logging inside a maze environment.",
    stack: ["ROS2", "Gazebo", "Python", "YOLO", "Docker", "Navigation"],
    slides: [
      {
        label: "Project Summary",
        title: "Problem, build, outcome and user value",
        cards: [
          {
            title: "Problem",
            text:
              "Robots need to interpret their environment, react to traffic signs and navigate safely through a maze.",
          },
          {
            title: "Technical Build",
            text:
              "Built a ROS2/Gazebo simulation using YOLO detections, odometry, velocity control, obstacle-aware navigation and landmark logging.",
          },
          {
            title: "Outcome",
            text:
              "Connected perception, navigation and rule-based control into one explainable robotics workflow.",
          },
          {
            title: "User Value",
            text:
              "Shows how autonomous systems can make movement decisions from sensor, vision and map inputs.",
          },
        ],
      },
      {
        label: "System Architecture",
        title: "ROS2 navigation pipeline",
        image: "/projects/ros2-nav/arcitecture.png",
        imageAlt: "ROS2 autonomous robot system architecture",
        text:
          "The robot receives camera, odometry and simulated sensor data. ROS2 nodes process detections, estimate goals, apply traffic rules and publish velocity commands back into Gazebo.",
      },
      {
        label: "Simulation Environment",
        title: "Gazebo maze world",
        image: "/projects/ros2-nav/gazeebo-map.png",
        imageAlt: "ROS2 Gazebo maze simulation environment",
        text:
          "The robot runs inside a custom Gazebo maze environment with traffic signs, goal markers and landmark objects. ROS2 topics and Gazebo bridges connect simulation data to the navigation logic.",
      },
      {
        label: "Goal Detection",
        title: "Vision-based goal localisation",
        image: "/projects/ros2-nav/goal-detection.png",
        imageAlt: "ROS2 goal detection inside Gazebo simulation",
        text:
          "YOLO detections identify goal markers and signs. Detection output is combined with odometry so the robot can understand where important objects are located in the simulated map.",
      },
    ],
  },
  {
    title: "CycleNest Cloud Service",
    type: "Cloud / Service-Oriented Backend",
    category: "Cloud",
    status: "Backend System",
    github: "https://github.com/yashN1246826/CycleNest-Cloud-Service",
    description:
      "A Java-based cloud service using REST APIs, Apache Tomcat and MongoDB Atlas for location-based item retrieval and service orchestration.",
    stack: ["Java", "Jersey", "Tomcat", "MongoDB Atlas", "Docker", "REST APIs"],
    slides: [
      {
        label: "Project Summary",
        title: "Problem, build, outcome and user value",
        cards: [
          {
            title: "Problem",
            text:
              "Users need backend services that retrieve, process and return location-based data reliably through APIs.",
          },
          {
            title: "Technical Build",
            text:
              "Built REST endpoints using Java, Jersey JAX-RS, Apache Tomcat, Maven, MongoDB Atlas and Docker.",
          },
          {
            title: "Outcome",
            text:
              "Created a container-ready backend with structured API responses and cloud database integration.",
          },
          {
            title: "User Value",
            text:
              "Supports reliable communication between frontend requests, backend orchestration, external services and stored cloud data.",
          },
        ],
      },
      {
        label: "System Architecture",
        title: "Cloud service orchestration",
        image: "/projects/cyclenest/cyclenest_architecture.png",
        imageAlt: "CycleNest cloud service architecture",
        text:
          "The client sends REST requests to the orchestrator API. The backend validates requests, calls external services, reads and writes cloud data, then returns JSON responses.",
      },
    ],
  },
  {
    title: "Hadoop Traffic Data Analysis",
    type: "Big Data / Distributed Processing",
    category: "Big Data",
    status: "Hadoop Project",
    description:
      "A Hadoop-based distributed processing project that uses HDFS and MapReduce-style analysis to process large datasets and generate structured outputs.",
    stack: ["Hadoop", "HDFS", "MapReduce", "Java", "Big Data", "Distributed Systems"],
    slides: [
      {
        label: "Project Summary",
        title: "Problem, build, outcome and user value",
        cards: [
          {
            title: "Problem",
            text:
              "Large datasets are difficult to process manually or on a single machine when the data grows in volume.",
          },
          {
            title: "Technical Build",
            text:
              "Used HDFS storage and MapReduce processing to split, process, shuffle and aggregate traffic data.",
          },
          {
            title: "Outcome",
            text:
              "Produced structured analytical outputs from raw data using a scalable big-data workflow.",
          },
          {
            title: "User Value",
            text:
              "Shows how raw operational data can be transformed into useful results through distributed computation.",
          },
        ],
      },
      {
        label: "System Architecture",
        title: "Hadoop distributed workflow",
        image: "/projects/hadoop/hadoop_architecture.png",
        imageAlt: "Hadoop distributed processing architecture",
        text:
          "The dataset is uploaded into HDFS, split across distributed storage blocks and processed through MapReduce jobs. Mapper, shuffle and reducer stages transform raw data into final aggregated outputs.",
      },
    ],
  },
  {
    title: "Timetabling System",
    type: "C++ / Scheduling System",
    category: "Software",
    status: "Software Engineering Project",
    github: "https://github.com/yashN1246826/TimeTablingSystem",
    description:
      "A C++ timetabling system that models users, sessions, rooms and scheduling logic to produce structured timetable records.",
    stack: ["C++", "OOP", "Scheduling", "Data Structures", "CLI App", "Software Design"],
    slides: [
      {
        label: "Project Summary",
        title: "Problem, build, outcome and user value",
        cards: [
          {
            title: "Problem",
            text:
              "Manual timetable planning can become inconsistent when sessions, rooms and course constraints are handled separately.",
          },
          {
            title: "Technical Build",
            text:
              "Built a C++ application with separate models and modules for users, sessions, rooms and timetable operations.",
          },
          {
            title: "Outcome",
            text:
              "Created a structured scheduling workflow for creating, managing and viewing timetable information.",
          },
          {
            title: "User Value",
            text:
              "Helps organise timetable data clearly so users can manage academic scheduling with fewer manual errors.",
          },
        ],
      },
      {
        label: "System Architecture",
        title: "Timetable scheduling workflow",
        image: "/projects/timetable/timetabling_architecture.png",
        imageAlt: "Timetabling system architecture",
        text:
          "The user interacts with the C++ console application. The app routes actions through admin and student modules, validates timetable data and outputs structured session or timetable results.",
      },
    ],
  },
  {
    title: "GymAsis AI Chatbot",
    type: "Hybrid AI Assistant",
    category: "Cloud",
    status: "AI Application",
    github: "https://github.com/yashN1246826/GymAsis",
    description:
      "A gym-focused AI assistant combining rule-based conversation, similarity search, voice interaction, cloud speech support, logic checks and image classification.",
    stack: ["Python", "AIML", "NLTK", "TensorFlow", "Google Cloud API", "TF-IDF", "CNN"],
    slides: [
      {
        label: "Project Summary",
        title: "Problem, build, outcome and user value",
        cards: [
          {
            title: "Problem",
            text:
              "Fitness beginners often need fast answers on training, equipment and technique without searching through long resources.",
          },
          {
            title: "Technical Build",
            text:
              "Combined AIML rules, TF-IDF similarity matching, NLTK logic checks, Google Cloud voice support and a TensorFlow/Keras CNN.",
          },
          {
            title: "Outcome",
            text:
              "Created a multi-method assistant that handles direct questions, paraphrased queries, voice commands and image-based predictions.",
          },
          {
            title: "User Value",
            text:
              "The user can ask gym questions naturally, speak commands and classify gym equipment images inside one assistant workflow.",
          },
        ],
      },
      {
        label: "System Architecture",
        title: "Hybrid AI chatbot architecture",
        image: "/projects/gymasis/architecture.png",
        imageAlt: "GymAsis AI Chatbot system architecture",
        text:
          "The main chatbot routes user input into AIML direct patterns, TF-IDF fallback matching, NLTK logic checks, CNN equipment recognition and Google Cloud voice support.",
      },
      {
        label: "CNN Recognition",
        title: "Image classification",
        image: "/projects/gymasis/image-classification.png",
        imageAlt: "GymAsis image classification result",
        text:
          "The chatbot can classify gym equipment images. In this example, the CNN predicts the uploaded image as a treadmill and returns confidence scores for each possible class.",
      },
      {
        label: "Voice Interaction",
        title: "Voice command and response flow",
        image: "/projects/gymasis/voice-demo.png",
        imageAlt: "GymAsis voice interaction demo",
        text:
          "The user can speak to the chatbot using the listen command. Spoken input is converted into text, matched to the best response path and returned as a gym-focused answer.",
      },
    ],
  },
];

const filters = ["All", "AI", "Robotics", "Cloud", "Big Data", "Software"] as const;

type Filter = (typeof filters)[number];

function matchesProject(project: Project, searchTerm: string, activeFilter: Filter) {
  const query = searchTerm.trim().toLowerCase();
  const filterMatches = activeFilter === "All" || project.category === activeFilter;

  if (!query) return filterMatches;

  const searchable = [
    project.title,
    project.type,
    project.status,
    project.category,
    project.description,
    ...project.stack,
    ...project.slides.flatMap((slide) => [
      slide.label,
      slide.title,
      slide.text || "",
      ...(slide.cards?.flatMap((card) => [card.title, card.text]) || []),
    ]),
  ]
    .join(" ")
    .toLowerCase();

  return filterMatches && searchable.includes(query);
}

function EvidenceDeck({ slides }: { slides: EvidenceSlide[] }) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const current = slides[active];

  const previousSlide = () => {
    setActive((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const nextSlide = () => {
    setActive((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  const handleTouchEnd = (endX: number) => {
    if (touchStart === null) return;

    const distance = touchStart - endX;

    if (distance > 50) nextSlide();
    if (distance < -50) previousSlide();

    setTouchStart(null);
  };

  return (
    <div className="mt-8 rounded-[1.5rem] border border-slate-200/70 bg-slate-50/70 p-4 shadow-inner sm:p-6">
      <div
        className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm sm:p-6"
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
      >
        <div className="grid gap-8 lg:grid-cols-[1.55fr_0.75fr] lg:items-center">
          <div className="min-h-[360px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 sm:min-h-[460px] sm:p-6">
            {current.image ? (
              <div className="flex h-full min-h-[330px] items-center justify-center rounded-2xl bg-slate-50 p-3">
                <Image
                  src={current.image}
                  alt={current.imageAlt || current.title}
                  width={1700}
                  height={1000}
                  className="max-h-[445px] w-full object-contain"
                  priority={active === 0}
                />
              </div>
            ) : (
              <div className="grid h-full min-h-[330px] items-center gap-4 sm:min-h-[425px] md:grid-cols-2">
                {current.cards?.map((card, index) => (
                  <div
                    key={card.title}
                    className={`rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                      index === 0
                        ? "border-l-4 border-l-blue-600"
                        : index === 1
                        ? "border-l-4 border-l-slate-400"
                        : index === 2
                        ? "border-l-4 border-l-slate-400"
                        : "border-l-4 border-l-slate-400"
                    }`}
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                      {card.title}
                    </p>
                    <p className="text-[0.95rem] font-medium leading-6 text-slate-700">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-500">
              {current.label}
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {current.title}
            </h3>

            {current.text && (
              <p className="mt-5 text-base font-medium leading-7 text-slate-700">
                {current.text}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previousSlide}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white active:scale-95"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to ${slide.title}`}
              className={`h-2.5 rounded-full transition ${
                active === index
                  ? "w-9 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white active:scale-95"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const projectRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesProject(project, searchTerm, activeFilter)),
    [activeFilter, searchTerm]
  );

  const filterCounts = useMemo(() => {
    return filters.reduce((acc, filter) => {
      acc[filter] =
        filter === "All"
          ? projects.length
          : projects.filter((project) => project.category === filter).length;
      return acc;
    }, {} as Record<Filter, number>);
  }, []);

  const scrollToProject = (projectTitle: string) => {
    projectRefs.current[projectTitle]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (filteredProjects.length > 0) {
      scrollToProject(filteredProjects[0].title);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white text-slate-900 font-sans">
      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:py-12">
        {/* Hero Section */}
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/70 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Projects / Systems / Proof
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Building AI, robotics and backend systems with measurable engineering outcomes.
              </h1>

              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />

              <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-slate-700 sm:text-lg">
                A technical portfolio focused on architecture, data flow, measurable performance and working implementation evidence.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 shadow-sm">
              <div className="rounded-xl bg-white px-4 py-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-slate-950">6</p>
                <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                  Projects
                </p>
              </div>
              <div className="rounded-xl bg-white px-4 py-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-slate-950">5×</p>
                <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                  Faster
                </p>
              </div>
              <div className="rounded-xl bg-white px-4 py-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-slate-950">30</p>
                <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">
                  FPS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="sticky top-4 z-20 mb-10 rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-md sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    activeFilter === filter
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {filter} · {filterCounts[filter]}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearchSubmit} className="w-full lg:max-w-sm">
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by tech, project or keyword..."
                className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </form>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <button
              key={`jump-${project.title}`}
              type="button"
              onClick={() => scrollToProject(project.title)}
              className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 text-left shadow-md shadow-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {project.category}
                </p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                  View
                </span>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-slate-950">
                {project.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-700">
                {project.description}
              </p>
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mb-16 rounded-2xl border border-slate-200/70 bg-white/80 p-10 text-center shadow-lg shadow-slate-900/5">
            <h2 className="text-3xl font-bold text-slate-950">No matching project found.</h2>
            <p className="mt-3 text-slate-700">
              Try searching for AI, ROS2, cloud, Hadoop, timetable, Python or C++.
            </p>
          </div>
        )}

        {/* Detailed Project Sections */}
        <div className="mb-16 grid gap-10">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              ref={(element) => {
                projectRefs.current[project.title] = element;
              }}
              className="scroll-mt-28 rounded-[2rem] border border-slate-200/70 bg-white/75 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 sm:p-10"
            >
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                    {project.type}
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                    {index + 1}. {project.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="w-fit rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-blue-600/20">
                    {project.status}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white active:scale-95"
                    >
                      View GitHub
                    </a>
                  )}
                </div>
              </div>

              <p className="max-w-5xl text-lg leading-8 text-slate-700">
                {project.description}
              </p>

              <EvidenceDeck slides={project.slides} />

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Info Section */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-md shadow-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              Engineering Proof
            </p>
            <p className="text-sm leading-6 text-slate-700">
              Every project includes architecture diagrams, screenshots or working output evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-md shadow-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              Measured Outcomes
            </p>
            <p className="text-sm leading-6 text-slate-700">
              Performance numbers are surfaced where available, including 5 min → 60 sec processing and 30 FPS capture.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-md shadow-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              Fast Navigation
            </p>
            <p className="text-sm leading-6 text-slate-700">
              Use filters, search or the project cards above to jump directly into the relevant system.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div>
          <Link
            href="/"
            className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
