````md
# Yash Kumar Portfolio

A personal portfolio website built with **Next.js**, **TypeScript** and **Tailwind CSS** to showcase my software engineering projects, AI/robotics work, cloud-based systems and personal insights.

The website includes a homepage, projects page, insights/blog-style page, contact page and a Git-based CMS admin panel for writing and managing insight posts.



## About

This portfolio is designed to present my technical journey as a Computer Science student and software engineer. It focuses on practical engineering work, including backend systems, AI applications, robotics simulation, cloud services and personal reflections from industry conversations.

Main sections:

- **Home** — overview of my technical focus and background.
- **Projects** — selected engineering projects with outcomes, technical details and GitHub links.
- **Insights** — personal posts about interviews, technology thoughts, career reflections and future business ideas.
- **Contact** — simple contact page with email and phone details.
- **Admin CMS** — local CMS panel for creating and editing insight posts without manually writing code.

---

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Decap CMS**
- **Markdown content**
- **Gray Matter**
- **GitHub**

---

## Key Features

- Responsive personal portfolio design
- Clean navigation with active page styling
- Project showcase cards
- Insight posts managed through Markdown
- Read More pages for full insight content
- Search and category filtering for insights
- Contact page with direct email access
- Local admin panel for creating posts through a CMS interface
- Image upload support for insight thumbnails

---

## Project Structure

```txt
yash-kumar-portfolio/
├── app/
│   ├── contact/
│   ├── insights/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── AboutStory.tsx
│   ├── NavBar.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── content/
│   └── insights/
│
├── lib/
│   └── insights.ts
│
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   ├── projects/
│   ├── uploads/
│   │   └── insights/
│   └── yash-profile.jpg
│
├── package.json
└── README.md
````

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the website locally:

```txt
http://localhost:3000
```

Open the CMS admin panel locally:

```txt
http://localhost:3000/admin/index.html
```

Run Decap CMS local backend:

```bash
npx decap-server
```

The local backend allows the CMS to create and edit Markdown files inside the project.

---

## Adding New Insight Posts

Insight posts are stored as Markdown files inside:

```txt
content/insights/
```

Each post includes frontmatter such as:

```yaml
---
title: "Post Title"
slug: "post-title"
category: "Interviews"
postType: "Reflection"
date: "2026-05-31"
thumbnail: "/uploads/insights/example.png"
preview: "Short preview text for the card."
takeaway: "Main thought or reflection."
tags:
  - Career
  - Interview
  - Technology
keywords:
  - AI
  - Software Engineering
  - Career
ctaLabel: "LinkedIn"
ctaUrl: "https://www.linkedin.com/"
featured: false
published: true
---
```

The full post content is written below the frontmatter in Markdown.

---

## Current Insight Categories

* Interviews
* Tech Thoughts
* Business Ideas
* Career Journey
* Future Plans
* Learning Notes

---

## Deployment

This project can be deployed using **Vercel**.

Basic deployment steps:

1. Push the project to GitHub.
2. Import the GitHub repository into Vercel.
3. Deploy using the default Next.js settings.
4. Add any required environment variables if needed later.

---

## GitHub Repository

```txt
https://github.com/yashN1246826/yash-kumar-portfolio
```

---

## Author

**Yash Kumar**
BSc Computer Science
Software Engineering | AI | Robotics | Cloud

GitHub: [yashN1246826](https://github.com/yashN1246826)

---

## Status

This portfolio is actively being improved with new projects, insights, UI refinements and content updates.

````

Then run:

```bash
git add README.md
git commit -m "Add README"
git push
````
