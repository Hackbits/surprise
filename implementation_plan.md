# Surprise Valentine's Website Implementation Plan

## 1. Project Setup

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, PostCSS
- **State/Logic**: React Hooks (`useState`, `useEffect`)
- **Animation**: `framer-motion`, `canvas-confetti`
- **Icons**: `lucide-react`
- **Structure**:
  - `app/layout.tsx`: Root layout with fonts (Playfair Display, Inter) & global styles.
  - `app/page.tsx`: Single page application with distinct sections.
  - `components/`: Modular components.
  - `public/`: Assets (images/icons).

## 2. Global Styles & Theme (`globals.css`)

- **Colors**:
  - Background: Creamy White (`#FDFBF7`)
  - Primary: Deep Rose Gold (`#E6BE8A` or `#D4AF37`)
  - Text: Dark Charcoal (`#1a1a1a`)
  - Accent: Soft Blush Pink (`#FFD1DC`)
- **Fonts**:
  - Headings: `Playfair Display` (Serif, Elegant)
  - Body: `Inter` or `Geist` (Clean Sans-Serif)

## 3. Component Architecture

### A. Hero Section (`components/Hero.tsx`)

- **Objective**: Initial "Surprise" reveal.
- **UI**: Full-screen overlay with `AnimatePresence`.
- **Interaction**:
  - Floating "Unlock My Heart" button.
  - Click triggers `confetti()` explosion.
  - Overlay fades out to reveal main content.

### B. Memory Gallery (`components/Gallery.tsx`)

- **Objective**: Showcase photos of memories.
- **UI**: Masonry or Grid layout.
- **Content**: 6-8 images (placeholders `https://placehold.co/600x400`).
- **Interaction**:
  - Hover: Lift up card, soft shadow.
  - Click: Expand to lightbox (modal).

### C. Love Timeline (`components/Timeline.tsx`)

- **Objective**: Show relationship milestones.
- **UI**: Vertical line with alternating left/right cards.
- **Animation**: Cards slide in (`initial={{ opacity: 0, x: -50 }}` -> `whileInView={{ opacity: 1, x: 0 }}`).

### D. The Proposal (`components/Proposal.tsx`)

- **Objective**: "Will you be my Valentine?"
- **UI**: Centered question with Yes/No buttons.
- **Interaction**:
  - "No" button: Moves randomly on hover or shrinks.
  - "Yes" button: Confetti triggers "YAY!" modal.

## 4. Implementation Steps

1.  **Initialize Project**: Running `create-next-app` (Done).
2.  **Move Files**: Ensuring strictly correct directory structure (In Progress).
3.  **Install Dependencies**: `framer-motion`, `lucide-react`, `canvas-confetti`.
4.  **Configure Tailwind**: Add theme extensions in `tailwind.config.ts`.
5.  **Build Components**: `Hero`, `Gallery`, `Timeline`, `Proposal`.
6.  **Assemble Page**: Combine in `page.tsx`.
7.  **Final Polish**: Check responsiveness and animations.
