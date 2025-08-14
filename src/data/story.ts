import { WeekContent, InternProfile } from "@/types";

export const interns: InternProfile[] = [
  {
    name: "Đức Hùng",
    fullName: "Lương Đức Hùng",
    avatar: "/interns/duc_hung.png",
    message:
      "Thank you to everyone at CoderPush for making this summer truly unforgettable. I'm grateful for the support, mentorship, and encouragement from the entire company.",
    role: "Software Engineering Intern",
    project: "OrcheSTARS, AI POC",
    mentor: "Anh Hector",
    bio: "I’m Duc Hung, a sophomore at Michigan State University who loves movies, board games, music, and playing piano. I also enjoy sports like badminton and table tennis. My strengths lie in hard work, curiosity, and problem-solving, and I’m eager to join technical discussions to sharpen these skills. I tend to be quiet at first but am always listening closely, and I hope this internship at CoderPush will help me speak up more, learn new technical and soft skills, and connect with everyone while making great memories along the way.",
  },
  {
    name: "Quỳnh Giang",
    fullName: "Hồ Quỳnh Giang",
    avatar: "/interns/quynh_giang.png",
    message:
      "Greatest gratitude to dear mentors, fellow interns, and everyone at CP for being an unforgettable part of this wonderful summer of coding, learning, and growing together.",
    role: "Software Engineering Intern",
    project: "Pulse",
    mentor: "Chị Minh Châu",
    bio: "Howdy-ho! I’m Giang Ho, a 19-year-old software engineer currently exploring full-stack development with tools like React, Python, C#, and SQL. I love building fun, creative things — whether it's websites, doodles, or funny soundtracks. I thrive in collaborative spaces, especially group games (TeamFight Tactics, anyone?), and I live by the values of empathy, communication, and responsibility. While I’m still working on speaking up more, I’m eager to grow, learn, and connect during this internship — and hopefully make some amazing friends and memories along the way!",
  },
  {
    name: "Quỳnh Anh",
    fullName: "Vũ Ngọc Quỳnh Anh",
    avatar: "/interns/quynh_anh.png",
    message:
      "(This is what I remember chị Quỳnh Anh saying until she gives a new one :D) Thank you very much, everyone at CoderPush. The time here with everyone has been truly amazing, and I’m grateful for all the support and guidance you’ve given me.",
    role: "Generalist Intern",
    project: "Operations & Marketing",
    mentor: "Chị Phương Anh",
    bio: "Hi, I’m Vũ Ngọc Quỳnh Anh, a junior at National Economics University majoring in Finance. I’m easy-going, patient, and thrive in collaborative environments, with strong communication, time management, and organizational skills. While I can be reserved and risk-averse at first, I’m working on stepping up and believe CoderPush’s energy will inspire me. I’m passionate about the arts—especially performance arts and music—and have co-organized and performed in musicals and student-led shows. I also enjoy reading emotional novels, playing a bit of table tennis, and connecting with new people. I’m excited to learn, contribute, and grow with everyone at CoderPush.",
  },
  {
    name: "Minh Tuấn",
    fullName: "Phạm Trần Minh Tuấn",
    avatar: "/interns/minh_tuan.png",
    message:
      "My heartfelt thanks to everyone at CoderPush who's been part of this amazing journey. In just three months, I've grown both technically and professionally.",
    role: "Software Engineering Intern",
    project: "Groopl, AI POC",
    mentor: "Anh Kim Long",
    bio: "I’m Tuan, a first-year Computer Science student diving into fullstack development, with a focus on backend work. I love tackling challenging problems and sticking with them until they’re solved. Outside of coding, I enjoy playing table tennis—always up for a fun match! I value perseverance, curiosity, and teamwork, and I’m working on speaking up more confidently. I’m super excited to learn from everyone, improve my technical and soft skills, and get a real glimpse into how software is built in a professional environment. Looking forward to making great connections, learning a ton, and having a memorable internship experience!",
  },
  {
    name: "Mia",
    fullName: "Phạm Minh Hà",
    avatar: "/interns/mia.png",
    message:
      "Thank you everyone for this amazing summer! I’m truly greatful for the guidance and support you’ve given me!",
    role: "Software Engineering Intern",
    project: "OrcheSTARS",
    mentor: "Anh Văn Hùng",
    bio: "Hi everyone! I’m Minh Ha (Mia), born in 2006, and I’m excited to join CoderPush as a Software Engineering Intern this summer. I love learning, tackling new challenges, and growing both technically and personally. I’m working on being more outgoing and building connections, as teamwork is key in software engineering. Outside of work, I enjoy reading and origami—let’s fold some paper together! Looking forward to learning, growing, and connecting with everyone over these three months.",
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
        title: "Welcome to the Party",
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
          "Mia completed her first OrcheSTARS ticket. Giang enhanced her feature for mobile responsiveness and began learning system design.",
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
          "Giang grasped core and advanced API concepts. Mia created four PRs for Affiliate Dashboard’s Revenue and Events pages, improving them through mentor and AI reviews.",
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
      {
        id: "disney-concert",
        title: "A Magical Experience",
        content: `"Once Upon A Time" Disney Concert by OrcheSTARS featuring Dustin Tiêu was a highlight, bringing the team together for a night of music and fun. It was a moment to remember as they celebrated their hard work and achievements.`,
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
          "Mia presented her first tech talk. Giang explored RESTful APIs, CORS, API authentication, and rate limiting. Tuấn implemented image upload to AWS S3. Hùng set up EC2 to deploy the AI project.",
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
          "Hùng delivered his first tech talk. Giang worked on E2E testing. The team wrapped up tasks and prepared for graduation.",
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
