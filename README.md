# 🎓 CoderPush Graduation 2025

An interactive scroll-telling website celebrating our amazing internship journey at CoderPush. Built with Next.js, TailwindCSS, and smooth animations to showcase weekly highlights, personal stories, and graduation messages.

![CoderPush Banner](https://img.shields.io/badge/CoderPush-Empower%20Pioneers-cyan?style=for-the-badge&logo=code&logoColor=white)

---

## 🚀 Features

- **Interactive Scroll Story**: Animated journey through the internship experience
- **Paper Airplane Progress**: Flying airplane that transforms into a progress indicator
- **Week-by-Week Highlights**: Structured content showing growth and milestones
- **Personal Graduation Cards**: Individual messages from each intern
- **Modern Animations**: Smooth Framer Motion animations throughout
- **Professional Branding**: CoderPush color scheme and visual identity

---

## 📂 Project Structure

```
coderpush-graduation/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main application page
│   │   ├── layout.tsx            # App layout and metadata
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Prologue.tsx      # Opening section
│   │   │   ├── StorySection.tsx  # Individual story sections
│   │   │   └── Epilogue.tsx      # Graduation celebration
│   │   ├── PaperAirplane.tsx     # Animated airplane component
│   │   ├── ProgressBar.tsx       # Journey progress indicator
│   │   ├── WeekDivider.tsx       # Week section separators
│   │   ├── Navigation.tsx        # Side navigation menu
│   │   └── FloatingElements.tsx  # Background animations
│   ├── data/
│   │   └── story.ts              # 📝 MAIN CONTENT FILE
│   ├── hooks/
│   │   └── useScrollProgress.ts  # Scroll tracking hook
│   └── types/
│       └── index.ts              # TypeScript definitions
├── public/
│   └── interns/                  # 🖼️ INTERN PHOTOS FOLDER
│       ├── duc_hung.png
│       ├── mia.png
│       ├── minh_tuan.png
│       ├── quynh_giang.png
│       └── quynh_anh.png
└── README.md
```

---

## 📝 Quick Content Updates

### ✏️ Updating Your Graduation Message

1. **Open the content file:**
   ```
   /src/data/story.ts
   ```

2. **Or use search:**
   - Press `Ctrl + Shift + F` (Windows/Linux) or `Cmd + Shift + F` (Mac)
   - Search for: `"Insert message here"`

3. **Find your name and update your message:**
   ```typescript
   export const interns: InternProfile[] = [
     {
       name: "Quỳnh Giang",
       avatar: "/interns/quynh_giang.png",
       message: "This internship has been incredible! 🚀" // ← Edit this
     },
     // ... other interns
   ];
   ```

### 🖼️ Changing Intern Photos

1. **Add your photo to:**
   ```
   /public/interns/
   ```

2. **Image requirements:**
   - **Format:** PNG (recommended) or JPG
   - **Size:** 200x200px minimum, square aspect ratio
   - **Naming:** Use the exact filename referenced in `story.ts`

3. **Current filenames:**
   - `duc_hung.png`
   - `mia.png`
   - `minh_tuan.png`
   - `quynh_anh.png`
   - `quynh_giang.png`

> 💡 **Tip:** Keep the same filename to avoid updating code, or update both the file and the `avatar` path in `story.ts`

---

## 📅 Adding/Editing Weekly Content

All weekly content is managed in `/src/data/story.ts`. The structure is highly scalable!

### Adding a New Week

```typescript
export const weeklyContent: WeekContent[] = [
  // ... existing weeks
  {
    week: 4,                    // Week number
    title: "Final Sprint",      // Week theme
    sections: [
      {
        id: "demo-day",          // Unique identifier
        title: "Demo Day Magic ✨", // Section title with emoji
        content: "The day we presented our projects to the entire company...",
        type: "act",             // Always use "act" for regular sections
        order: 10,               // Continue numbering from last section
      }
    ]
  }
];
```

### Editing Existing Content

Find the week/section you want to edit and modify:
- `title`: The heading text
- `sections`: Different sections of the same week
- `content`: The story/description

---

## 🛠️ Development

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd coderpush-graduation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Check code quality |

---

## 🎨 Customization

### Color Scheme
The website uses a color palette similar to CoderPush's:
- cp-primary: #16a34a;
- cp-lime: #9be43a;
- cp-ink: #101212;
- cp-white: #ffffff;
- cp-sky: #38bdf8;
- cp-navy: #0F1E2B;

### Modifying Colors
To change the color scheme, update the Tailwind classes in /src/app/globals.css or in the components' styling.

### Adding Animations
The website uses **Framer Motion** for animations. Common patterns:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>
```

---

## 📦 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 14+ |
| **React** | UI library | 18+ |
| **TypeScript** | Type safety | 5+ |
| **TailwindCSS** | Styling | 3+ |
| **Framer Motion** | Animations | 10+ |
| **Lucide React** | Icons | Latest |

---

## 📖 Content Guidelines

### Writing Style
- **Be authentic**: Share real experiences
- **Stay positive**: Focus on growth and achievements
- **Be specific**: Mention names of projects, tools, or moments
- **Keep it concise**: 2-3 sentences per section usually works best

### Technical Mentions
Feel free to mention specific technologies, frameworks, or methodologies you learned:
- Programming languages
- Frameworks and libraries
- Development tools
- Methodologies (Agile, code reviews, etc.)

---

## 📞 Support

If you run into any issues:

1. **Check the console** for error messages
2. **Verify file paths** are correct (especially images)
3. **Restart the dev server** (`Ctrl+C` then `npm run dev`)
4. **Ask a teammate** - collaboration is key! 

---

**Built with ❤️ by the CoderPush Summer 2025 Interns**