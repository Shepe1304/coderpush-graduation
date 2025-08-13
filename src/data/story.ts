import { WeekContent, InternProfile } from "@/types";

export const interns: InternProfile[] = [
  {
    name: "Đức Hùng",
    avatar: "/interns/duc_hung.png",
    message:
      "(Insert message here)",
  },
  {
    name: "Quỳnh Giang",
    avatar: "/interns/quynh_giang.png",
    message: "Greatest gratitude to dear mentors, fellow interns, and everyone at CP for being an unforgettable part of this wonderful summer!",
  },
  {
    name: "Quỳnh Anh",
    avatar: "/interns/quynh_anh.png",
    message: "(Insert message here)",
  },
  {
    name: "Minh Tuấn",
    avatar: "/interns/minh_tuan.png",
    message: "(Insert message here)",
  },
  {
    name: "Mia",
    avatar: "/interns/mia.png",
    message: "(Insert message here)",
  },
];

export const prologue = {
  title: "CoderPush Summer Internship 2025",
  subtitle: "An Amazing Journey of Growth",
  content:
    "In the blazing summer of 2025, five ambitious minds stepped into CoderPush...",
  subtext:
    "Three transformative months. Countless lines of code. Infinite possibilities ahead.",
  cta: "Send Interns to Graduation?",
};

export const weeklyContent: WeekContent[] = [
  {
    week: 1,
    title: "First Steps Into Innovation",
    sections: [
      {
        id: "arrival",
        title: "Welcome to the Future",
        content:
          "Introductions all around—five interns meeting each other for the first time and stepping into CoderPush’s world. Excitement was high, and laptops were ready for the challenges ahead.",
        type: "act",
        order: 1,
      },
      {
        id: "orientation",
        title: "Understanding the Mission",
        content:
          "Learning about CoderPush’s vision, culture, and the products that drive its success. Big questions were asked, and personal goals began to take shape.",
        type: "act",
        order: 2,
      },
    ],
  },
  {
    week: 2,
    title: "Breaking Through Barriers",
    sections: [
      {
        id: "project-intro",
        title: "The Big Three",
        content:
          "Introductions to OrcheSTARS, Pulse, and Groopl!—the flagship internal projects. Mentors were assigned: chị Châu, anh Hector, anh Kim Long, and anh Văn Hùng.",
        type: "act",
        order: 3,
      },
      {
        id: "team-pairing",
        title: "Finding Your Partner",
        content:
          "Pairs formed: Châu–Giang, Tuấn–Long, Mia–Văn Hùng, Đức Hùng–Hector. Quỳnh Anh also met the Operations and Marketing teams, including chị Trân, chị Phương Anh, chị Hannah, chị Vân, and chị Mai.",
        type: "act",
        order: 4,
      },
      {
        id: "local-setup",
        title: "Booting Up",
        content:
          "Setting up projects locally, exploring codebases, and familiarizing with tech stacks. The first real step into the work ahead.",
        type: "act",
        order: 5,
      },
    ],
  },
  {
    week: 3,
    title: "First Contributions",
    sections: [
      {
        id: "coderbrain-launch",
        title: "Hello, CoderBrain",
        content:
          "CoderBrain made its debut. Anh Harley’s advice on ownership inspired everyone to post updates and share progress openly.",
        type: "act",
        order: 6,
      },
      {
        id: "first-issues",
        title: "Ideas Into Action and Achievements",
        content:
          "Giang pitched and opened a GitHub issue for Pulse’s Project Hours Visualization. Hùng practiced AI-assisted coding and submitted his first PR for OrcheSTARS. Mia began making progress on her OrcheSTARS tasks.",
        type: "act",
        order: 7,
      },
      {
        id: "early-wins",
        title: "More Achievements!!!",
        content:
          "Tuấn rebuilt Sign In/Sign Up flows with live password validation. Quỳnh Anh’s first LinkedIn post plan took shape after the condutction of a deep content pool.",
        type: "act",
        order: 8,
      },
    ],
  },
  {
    week: 4,
    title: "Merging Wins",
    sections: [
      {
        id: "feature-merges",
        title: "First Features Live",
        content:
          "Hùng fixed and merged affiliate dashboard updates for OrcheSTARS. Giang shipped her Project Hours Visualization to Pulse’s main branch. Mia learned TypeScript and Tailwind, applying them to a mini project.",
        type: "act",
        order: 9,
      },
      {
        id: "documentation",
        title: "Writing It Down",
        content:
          "Tuấn documented Sign In/Sign Up features and ran GetX tests. Quỳnh Anh completed both the content and design for a blog post.",
        type: "act",
        order: 10,
      },
    ],
  },
  {
    week: 5,
    title: "Leveling Up",
    sections: [
      {
        id: "stack-mastery",
        title: "First Tickets Done",
        content:
          "Mia completed her first Orchestars ticket. Giang enhanced her feature for mobile responsiveness and began learning system design.",
        type: "act",
        order: 11,
      },
      {
        id: "steady-progress",
        title: "Refinement & Research",
        content:
          "Hùng got UI updates merged. Tuấn deepened mobile skills and explored AI agent design fundamentals.",
        type: "act",
        order: 12,
      },
    ],
  },
  {
    week: 6,
    title: "Diving Deeper",
    sections: [
      {
        id: "bigger-tasks",
        title: "New Frontiers",
        content:
          "Mia tackled Revenue Analytics for OrcheSTARS. Giang pivoted to backend learning via roadmap.sh and delivered her first tech talk: speeding up databases with Redis.",
        type: "act",
        order: 13,
      },
      {
        id: "shipping-features",
        title: "Shipping & Planning",
        content:
          "Hùng merged two affiliate dashboard PRs. Tuấn completed the Home feature for the AI project and scoped its structure.",
        type: "act",
        order: 14,
      },
    ],
  },
  {
    week: 7,
    title: "Milestones & Goodbyes",
    sections: [
      {
        id: "pr-marathon",
        title: "Fast Iterations",
        content:
          "Mia created four PRs for Affiliate Dashboard’s Revenue and Events pages, improving them through mentor and AI reviews.",
        type: "act",
        order: 15,
      },
      {
        id: "farewell",
        title: "An Early Graduation",
        content:
          "Quỳnh Anh gave her first tech talk before graduating early. Hùng began work on a mock membership points and user profile page.",
        type: "act",
        order: 16,
      },
    ],
  },
  {
    week: 8,
    title: "Exploring New Frontiers",
    sections: [
      {
        id: "tech-talks",
        title: "Knowledge Sharing",
        content:
          "Tuấn delivered his first tech talk on face recognition. Giang joined a 48-hour hackathon, pushing her skills under pressure and emerged with an AI journaling app.",
        type: "act",
        order: 17,
      },
    ],
  },
  {
    week: 9,
    title: "Expanding the Toolkit",
    sections: [
      {
        id: "deep-dives",
        title: "Learning & Shipping",
        content:
          "Hùng presented his first tech talk. Giang explored RESTful APIs, CORS, API authentication, and rate limiting. Tuấn implemented image upload to AWS S3 and set up EC2 to deploy the AI project.",
        type: "act",
        order: 18,
      },
    ],
  },
  {
    week: 10,
    title: "Final Push",
    sections: [
      {
        id: "closing-notes",
        title: "Wrapping It Up",
        content:
          "Mia delivered her first tech talk. Giang worked on E2E testing. The team wrapped up tasks and prepared for graduation.",
        type: "act",
        order: 19,
      },
    ],
  },
];

export const epilogue = {
  title: "Graduation Day",
  content:
    "And here we are! From confused beginners to confident developers. Thank you CoderPush for this incredible journey!",
  emoji: "🎓",
};
