import type { Project } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Add a new object to this array to register a new project.
// The home + projects pages will pick it up automatically.
// ───────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "trade-recon",
    slug: "trade-recon",
    name: "Trade Recon",
    category: "Finance · Software Engineering",
    tagline: "A financial trade reconciliation engine that catches fat-finger trades in ~43ms.",
    description:
      "A financial reconciliation system designed to process large volumes of trade records, identify mismatches, and detect potentially erroneous transactions. Ingests thousands of records asynchronously through Kafka, applies asset-class-specific tolerance thresholds for rule-based matching, and uses Isolation Forest to flag anomalies like a 1M-share order entered in place of 10K.",
    status: "featured",
    year: "2024",
    techStack: [
      "Apache Kafka",
      "Python",
      "Flask",
      "Isolation Forest",
      "Prometheus",
      "Grafana",
    ],
    highlights: [
      "Asynchronous ingestion of thousands of trade records via Apache Kafka.",
      "Python reconciliation engine with dynamic rule-based matching.",
      "Asset-class tolerance thresholds — Equity 0.5%, FX 0.1%.",
      "Isolation Forest anomaly detection for fat-finger pattern spotting.",
      "Prometheus + Grafana monitoring with end-of-day compliance reports.",
      "~43ms record-processing latency.",
    ],
    metrics: [
      { label: "Processing latency", value: "~43ms" },
      { label: "Equity tolerance", value: "0.5%" },
      { label: "FX tolerance", value: "0.1%" },
      { label: "Anomaly method", value: "Isolation Forest" },
    ],
    color: "emerald",
    diagram: {
      kind: "pipeline",
      title: "Reconciliation Pipeline",
      nodes: [
        { id: "kafka", label: "Kafka", sublabel: "async ingestion" },
        { id: "engine", label: "Recon Engine", sublabel: "rule-based match" },
        { id: "iso", label: "Isolation Forest", sublabel: "anomaly detect" },
        { id: "flask", label: "Flask UI", sublabel: "operator view" },
        { id: "grafana", label: "Grafana", sublabel: "Prometheus metrics" },
        { id: "eod", label: "EOD Reports", sublabel: "compliance" },
      ],
      edges: [
        { from: "kafka", to: "engine" },
        { from: "engine", to: "iso", label: "match fail" },
        { from: "iso", to: "flask" },
        { from: "engine", to: "flask", label: "matched" },
        { from: "engine", to: "grafana" },
        { from: "iso", to: "eod", label: "flagged" },
      ],
    },
  },
  {
    id: "docsmith",
    slug: "docsmith",
    name: "Docsmith",
    category: "Systems · Operating Systems",
    tagline: "A lightweight Python container runtime that ditches Docker's daemon — 87% faster cold starts.",
    description:
      "A lightweight container runtime implemented in Python, exploring operating-system-level isolation without relying on Docker's standard daemon architecture. Uses Linux namespaces for process isolation and chroot for filesystem isolation, proving out a minimal runtime path that starts containers dramatically faster than the daemon-based default.",
    status: "featured",
    year: "2024",
    techStack: ["Python", "Linux Namespaces", "chroot", "Systems Programming"],
    highlights: [
      "Linux namespaces for process-level isolation.",
      "chroot-based filesystem isolation.",
      "Daemon-free runtime architecture implemented in Python.",
      "87% reduction in container startup time vs Docker default.",
    ],
    metrics: [
      { label: "Startup reduction", value: "−87%" },
      { label: "Isolation", value: "namespaces + chroot" },
      { label: "Language", value: "Python" },
      { label: "Daemon", value: "none" },
    ],
    color: "amber",
    diagram: {
      kind: "comparison",
      title: "Daemon-free vs Docker",
      nodes: [
        { id: "docker", label: "Docker", sublabel: "client → dockerd → containerd → runc" },
        { id: "docsmith", label: "Docsmith", sublabel: "runtime → namespaces + chroot" },
      ],
      edges: [],
    },
  },
  {
    id: "smart-wardrobe",
    slug: "smart-wardrobe",
    name: "Smart Wardrobe",
    category: "Computer Vision · Personalization",
    tagline: "Fit-aware clothing recommendation & virtual try-on using CLIP, Siamese nets, and VITON research.",
    description:
      "A project focused on personalised clothing recommendations and virtual try-on. Started as 3D avatar-based try-on, then pivoted toward a recommendation system that models fit uncertainty and style confidence to improve suggestions.",
    status: "major",
    year: "2023",
    techStack: [
      "OpenCV",
      "MediaPipe",
      "CLIP",
      "Siamese Networks",
      "DeepFashion",
      "VITON-HD",
      "Blender",
      "MakeHuman",
    ],
    highlights: [
      "OpenCV + MediaPipe for body measurement extraction.",
      "CLIP-based image and clothing retrieval.",
      "Siamese networks for similarity scoring.",
      "DeepFashion + Polyvore datasets, VITON / VITON-HD research.",
      "Blender + MakeHuman for avatar experimentation.",
    ],
    metrics: [
      { label: "Retrieval", value: "CLIP" },
      { label: "Similarity", value: "Siamese net" },
      { label: "Datasets", value: "DeepFashion" },
      { label: "Try-on", value: "VITON-HD" },
    ],
    color: "coral",
  },
  {
    id: "honk",
    slug: "honk",
    name: "Honk",
    category: "Full-stack · Mobile-first",
    tagline: "A Tinder-style car discovery & matching platform with a fully-typed modern stack.",
    description:
      "An interactive approach to discovering and matching users with cars. Swipe-based discovery backed by a Node/Express API with Prisma over MySQL, animated with Framer Motion on a Next.js + Tailwind + shadcn/ui front-end.",
    status: "major",
    year: "2023",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "TanStack Query",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
      "Vercel",
    ],
    highlights: [
      "Swipe-driven discovery UX with Framer Motion physics.",
      "TanStack Query for data fetching & cache management.",
      "Node.js + Express + Prisma + MySQL backend.",
      "Deployed on Vercel with Railway / PlanetScale data layer.",
    ],
    metrics: [
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Express" },
      { label: "ORM", value: "Prisma" },
      { label: "DB", value: "MySQL" },
    ],
    color: "teal",
  },
  {
    id: "body-fat-prediction",
    slug: "body-fat-prediction",
    name: "Body Fat Prediction",
    category: "Data Science · ML",
    tagline: "Decision Tree Regression app for body-fat estimation, shipped as a Streamlit dashboard.",
    description:
      "A Decision Tree Regression-based prediction application that estimates body fat percentage from body measurements, wrapped in a Streamlit dashboard for interactive exploration.",
    status: "side",
    year: "2023",
    techStack: ["Python", "scikit-learn", "Decision Tree Regression", "Streamlit"],
    highlights: [
      "Decision Tree Regression estimator.",
      "Streamlit dashboard for interactive inference.",
    ],
    metrics: [
      { label: "Model", value: "Decision Tree" },
      { label: "UI", value: "Streamlit" },
    ],
    color: "emerald",
  },
  {
    id: "leave-management",
    slug: "leave-management",
    name: "Leave Management System",
    category: "Full-stack · MERN",
    tagline: "MERN-stack leave management system for organisations.",
    description:
      "A full-stack MERN application handling leave requests, approvals, and balances within an organisation.",
    status: "side",
    year: "2022",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "MERN stack end-to-end.",
      "Leave request workflow with approvals and balances.",
    ],
    metrics: [
      { label: "Stack", value: "MERN" },
      { label: "Workflow", value: "Approvals" },
    ],
    color: "amber",
  },
  {
    id: "arduino-watering",
    slug: "arduino-watering",
    name: "Arduino Automated Watering",
    category: "Hardware · Automation",
    tagline: "An automation-oriented hardware project for plant watering.",
    description:
      "An Arduino-based automated watering system that senses soil moisture and triggers watering when thresholds are crossed.",
    status: "side",
    year: "2022",
    techStack: ["Arduino", "C/C++", "Sensors", "Automation"],
    highlights: [
      "Soil-moisture sensing with threshold-based actuation.",
      "Embedded automation on Arduino.",
    ],
    metrics: [
      { label: "Platform", value: "Arduino" },
      { label: "Trigger", value: "Moisture" },
    ],
    color: "teal",
  },
  {
    id: "face-mask-emotion",
    slug: "face-mask-emotion",
    name: "Face Mask & Emotion Detection",
    category: "Computer Vision · Detection",
    tagline: "Computer-vision detection system for face masks and emotion recognition.",
    description:
      "A computer-vision system that detects face mask usage and recognises emotions from facial expressions.",
    status: "side",
    year: "2022",
    techStack: ["OpenCV", "Python", "Deep Learning", "Computer Vision"],
    highlights: [
      "Face mask presence detection.",
      "Emotion classification from facial expressions.",
    ],
    metrics: [
      { label: "Task", value: "Detection" },
      { label: "Library", value: "OpenCV" },
    ],
    color: "coral",
  },
];

export const featuredProjects = projects.filter((p) => p.status === "featured");
export const majorProjects = projects.filter((p) => p.status === "major");
export const sideProjects = projects.filter((p) => p.status === "side");
