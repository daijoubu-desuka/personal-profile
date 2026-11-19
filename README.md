# Alex Rivera — Personal Portfolio (Nuxt 3 & Tailwind CSS)

An editorial developer portfolio and academic dossier crafted with **Nuxt 3**, **Vue 3 Composition API**, and **Tailwind CSS**, designed with an **Anthropic Serif editorial aesthetic** (Newsreader typography, JetBrains Mono metadata, warm obsidian background, and subtle emerald green accents).

---

## 🏛️ Design Identity & Aesthetic

- **Editorial Serif Typography**: Powered by **Newsreader** (the screen-optimized editorial serif mirroring Anthropic's custom corporate typeface / Tiempos Headline).
- **Monospace Metadata & Code Accents**: Paired with **JetBrains Mono** for indexes (`01. Index`, `02. Profile`), academic coordinates, and capability tiers.
- **Color Palette**:
  - `Canvas`: Warm obsidian `#0b0d0f`
  - `Surface`: Elevated panels `#121519`
  - `Hairline Edges`: Architectural borders `#222730`
  - `Parchment`: Reading-optimized warm off-white `#eceae3`
  - `Emerald`: Tasteful, intentional green touches `#10b981` / `#34d399`

---

## 📁 Project Architecture

```
personal-profile/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css         ← Tailwind directives & typography layers
│   ├── components/
│   │   ├── AppNavbar.vue        ← Sticky editorial navbar & mobile drawer
│   │   └── AppFooter.vue        ← Colophon footer with UTC timestamp & links
│   ├── layouts/
│   │   └── default.vue          ← Editorial canvas wrapper (Navbar + <slot> + Footer)
│   ├── pages/
│   │   ├── index.vue            ← Homepage (Hero, Selected Projects, Principles)
│   │   └── profile.vue          ← Academic Dossier (Education, Tech Matrix, Interests)
│   └── app.vue                  ← Root entry point (<NuxtLayout> + <NuxtPage>)
├── public/
│   └── images/
│       ├── profile.svg          ← High-contrast vector monogram portrait
│       └── profile.jpg          ← Photo placeholder (replace with your photo)
├── nuxt.config.ts               ← Nuxt 3 & Google Fonts configuration
├── tailwind.config.ts           ← Anthropic-inspired colors & font families
├── package.json                 ← Scripts & dependencies
└── README.md                    ← Documentation
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Development Server
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## ✏️ Customization & Personal Information

| Target | Location | What to Edit |
|---|---|---|
| **Full Name & Bio** | `app/pages/index.vue` | Header text, intro paragraphs |
| **Selected Works** | `app/pages/index.vue` | `selectedWork` array |
| **Personal Dossier** | `app/pages/profile.vue` | `personalDossier` spec ledger |
| **Academic History** | `app/pages/profile.vue` | `education` timeline array |
| **Technical Competencies**| `app/pages/profile.vue` | `skillCategories` matrix |
| **Portrait Photo** | `public/images/profile.jpg` | Drop your square photo here |
| **Social Links & Email** | `app/components/AppFooter.vue` | `links` array |

---

## 🧪 Testing Routes & Functionality

- **Home (`/`)**: Displays the editorial hero statement, portrait plate, selected software case studies, and working philosophy.
- **Profile (`/profile`)**: Displays full academic spec sheet, detailed educational trajectory, structured technical competency matrix, personal methodologies, and pursuits.
- **Routing**: Seamless client-side navigation using `<NuxtLink>` with active route styling.
