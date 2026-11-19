<!-- app/pages/profile.vue
     Editorial student profile & academic ledger inspired by Anthropic's typographic brand language.
     Typography: Newsreader (editorial serif), JetBrains Mono (monospace metadata).
-->

<script setup lang="ts">
useHead({
  title: 'Profile & Background — Anthony Namog Adlawon',
})

// Dynamic avatar path: points to uploaded profile image
const avatarPath = ref('/images/profile.jpg?v=2')
const imageLoaded = ref(true)

const onAvatarError = () => {
  if (!avatarPath.value.includes('profile.svg')) {
    avatarPath.value = '/images/profile.svg'
  } else {
    imageLoaded.value = false
  }
}

// ── Personal Dossier ────────────────────────────────────────────────
const personalDossier = [
  { label: 'Full Legal Name',    value: 'Anthony Namog Adlawon' },
  { label: 'Degree Program',     value: 'Bachelor of Science in Information Technology (BSIT)' },
  { label: 'Academic Standing',  value: '3rd Year Undergraduate' },
  { label: 'Institution',        value: 'Caraga State University Main Campus' },
  { label: 'Primary Focus',      value: 'Web Development, Database Management & Vibe Coding' },
  { label: 'Geographic Base',    value: 'Bayugan City, Agusan Del Sur, Philippines (UTC+8)' },
  { label: 'GitHub Repository',  value: 'github.com/daijoubu-desuka', link: 'https://github.com/daijoubu-desuka' },
  { label: 'Facebook Contact',   value: 'facebook.com/daijoubu.deskaa', link: 'https://www.facebook.com/daijoubu.deskaa' },
  { label: 'Availability',       value: 'Academic Collaborations, Internships & Software Projects' },
  { label: 'Electronic Mail',    value: 'anthony.adlawon@carsu.edu.ph', link: 'mailto:anthony.adlawon@carsu.edu.ph' },
]

// ── Educational Trajectory ──────────────────────────────────────────
const education = [
  {
    institution: 'Caraga State University Main Campus',
    credential: 'B.S. in Information Technology',
    period: '2022 — Present',
    status: 'In Progress (Undergraduate)',
    highlights: [
      'Pursuing core IT disciplines including Data Structures & Algorithms, Web Systems Technologies, Database Management Systems, Systems Analysis & Design, and Object-Oriented Programming.',
      'Active immersion in modern web architecture, responsive interface engineering, and exploring AI-assisted developer workflows.',
      'Dedicated to high academic standards, continuous laboratory hands-on experimentation, and collaborative team computing projects.',
    ],
  },
  {
    institution: 'Agusan del Sur College (ADSCO)',
    credential: 'Senior High School — Humanities and Social Sciences (HUMSS)',
    period: '2020 — 2022',
    status: 'Graduated with High Honors',
    highlights: [
      'Graduated with High Honors, distinguishing academic tenure with exemplary scholastic dedication, articulate critical rhetoric, and intellectual curiosity.',
      'Cultivated an eloquent command of human communication, social dynamics, and empathetic inquiry—establishing a rich, human-centered philosophical foundation that enriches technical interface design and software usability.',
      'Actively participated in scholastic discourse, inter-strand colloquiums, and school leadership, bridging humanist insight with digital literacy.',
    ],
  },
  {
    institution: 'Agusan del Sur College (ADSCO)',
    credential: 'Junior High School Curriculum',
    period: '2016 — 2020',
    status: 'Completed with Academic Honors',
    highlights: [
      'Completed junior high school with Academic Honors, demonstrating consistent scholastic excellence across mathematics, scientific inquiry, and communicative arts.',
      'Fostered foundational problem-solving discipline, collaborative group study ethics, and an enthusiastic early fascination with computer systems and technology.',
    ],
  },
]

// ── Categorized Skills & Technical Proficiencies (3-Card Layout) ─────
const skillCategories = [
  {
    domain: 'Core Languages & Web Fundamentals',
    summary: 'Foundational programming languages and core web building blocks honed through coursework and continuous practice.',
    technologies: [
      { name: 'HTML5 & CSS3', tier: 'Foundational' },
      { name: 'JavaScript', tier: 'Primary' },
      { name: 'TypeScript', tier: 'Proficient' },
      { name: 'Python', tier: 'Proficient' },
      { name: 'Java', tier: 'Academic' },
      { name: 'C', tier: 'Academic' },
      { name: 'PHP', tier: 'Academic' },
    ],
  },
  {
    domain: 'Frameworks, Backend & Database',
    summary: 'Modern frontend frameworks, server runtimes, and database manipulation tools for building connected web systems.',
    technologies: [
      { name: 'Vue 3', tier: 'Primary' },
      { name: 'Nuxt.js', tier: 'Primary' },
      { name: 'Next.js', tier: 'Proficient' },
      { name: 'Node.js', tier: 'Proficient' },
      { name: 'Prisma ORM', tier: 'Proficient' },
      { name: 'phpMyAdmin', tier: 'Practical' },
    ],
  },
  {
    domain: 'Design, API Tools & Vibe Coding',
    summary: 'Interface prototyping, API validation, and cutting-edge agentic workflows utilizing modern AI coding environments.',
    technologies: [
      { name: 'Figma', tier: 'Design' },
      { name: 'Postman', tier: 'API Testing' },
      { name: 'Thunder Client', tier: 'API Testing' },
      { name: 'VS Code', tier: 'Primary IDE' },
      { name: 'Antigravity', tier: 'Vibe Coding' },
      { name: 'Claude Code', tier: 'Vibe Coding' },
    ],
  },
]

// ── Student Skills & Methodologies (incorporating grit from prior part-time experience) ──
const workingAttributes = [
  {
    title: 'Disciplined Time & Workload Balance',
    description: 'Forged through the balancing act of prior part-time work alongside demanding studies. Expertly handles tight academic deadlines, lab submissions, and semester deliverables through disciplined time-blocking and accountability.',
  },
  {
    title: 'Human-Centered Thinking (HUMSS to Tech)',
    description: 'Leverages a solid HUMSS humanities background to build software through a user-first lens—prioritizing clarity, empathy, accessibility, and intuitive communication in every UI component and team discussion.',
  },
  {
    title: 'Adaptive Learning & Modern Vibe Coding',
    description: 'Rapidly absorbs new frameworks and syntaxes by blending disciplined self-study with modern AI-assisted developer workflows (Antigravity, Claude Code, VS Code), accelerating the prototyping of complex course requirements.',
  },
  {
    title: 'Collaborative Teamwork & Communication',
    description: 'Thrives in collaborative laboratory groups and team capstone sprints. Communicates ideas clearly, values constructive peer code reviews, and takes shared ownership of project milestones.',
  },
]

// ── Interests & Pursuits ─────────────────────────────────────────────
const pursuits = [
  {
    title: 'Online Gaming',
    notes: 'Competitive and cooperative online games that develop strategic thinking, rapid real-time decision making, and team coordination.',
  },
  {
    title: 'Badminton',
    notes: 'Playing badminton for physical agility, swift court reflexes, stamina, and a great way to unplug and reset after hours of screen time.',
  },
  {
    title: 'Sci-Fi Cinema',
    notes: 'Passionate about science fiction cinema exploring speculative futures, space travel, synthetic intelligence, and cybernetic philosophy.',
  },
  {
    title: 'Rom-Com Anime Films',
    notes: 'Enthusiast of heartwarming romantic comedy anime films that combine expressive visual artistry with heartfelt, witty character narratives.',
  },
  {
    title: 'Slice of Life Anime',
    notes: 'Appreciating the peaceful rhythm, warmth, emotional resonance, and everyday human moments captured in slice-of-life storytelling.',
  },
  {
    title: 'Manga Reading',
    notes: 'An avid reader of serialized manga across diverse genres, enjoying detailed panel compositions, visual pacing, and deep worldbuilding.',
  },
]
</script>

<template>
  <div class="space-y-24 py-12 md:py-20">

    <!-- ══════════════════════════════════════════════════════════════
         PAGE HEADER: Student Dossier & Coordinates
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <!-- Breadcrumb navigation -->
      <nav class="mb-8 flex items-center gap-2 font-mono text-xs text-muted" aria-label="Breadcrumb">
        <NuxtLink to="/" class="transition-colors hover:text-emerald-400">
          01. Home
        </NuxtLink>
        <span class="text-faint">/</span>
        <span class="text-parchment-200">02. Profile &amp; Background</span>
      </nav>

      <div class="grid grid-cols-1 items-center gap-12 border-b border-edge pb-16 lg:grid-cols-12">
        
        <!-- Bio statement -->
        <div class="space-y-6 lg:col-span-7">
          <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
            Dossier // Academic Profile &amp; Student Ledger
          </span>

          <h1 class="font-serif text-4xl font-normal tracking-editorial text-parchment-100 sm:text-5xl">
            Anthony Namog Adlawon
          </h1>

          <p class="font-serif text-xl font-light italic leading-relaxed text-parchment-300">
            BSIT Student at Caraga State University Main Campus. Residing in Bayugan City, Agusan Del Sur.
          </p>

          <p class="font-serif text-base leading-relaxed text-parchment-400">
            This dossier chronicles my academic journey from ADSCO to Caraga State University, detailed technical skills spanning core languages, frameworks, and vibe coding, as well as personal methodologies and recreational pursuits.
          </p>
        </div>

        <!-- Big circular avatar badge -->
        <div class="flex justify-start lg:col-span-5 lg:justify-end">
          <div class="flex items-center gap-5 rounded-full border border-edge bg-surface/80 p-3 pr-8 shadow-xl shadow-black/20">
            <div class="h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full border-2 border-emerald-500/40 bg-canvas shadow-lg">
              <img
                v-if="imageLoaded"
                :src="avatarPath"
                alt="Portrait of Anthony Namog Adlawon"
                class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                @error="onAvatarError"
              />
              <div v-else class="flex h-full w-full items-center justify-center font-serif text-2xl text-parchment-300">
                AA
              </div>
            </div>
            <div class="space-y-1.5 font-mono text-xs">
              <div class="text-parchment-100 font-semibold text-sm">Anthony N. Adlawon</div>
              <div class="text-emerald-400">● 3rd Year BSIT</div>
              <div class="text-faint text-[11px]">CSU Main Campus</div>
            </div>
          </div>
        </div>

      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 01: Personal Specification Ledger
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <div class="mb-8 border-b border-edge pb-4">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
          01 // Identification &amp; Coordinates
        </span>
        <h2 class="mt-1 font-serif text-2xl font-normal tracking-editorial text-parchment-100 sm:text-3xl">
          Personal Information
        </h2>
      </div>

      <!-- Spec sheet grid -->
      <div class="overflow-hidden rounded-2xl border border-edge bg-surface/50">
        <dl class="divide-y divide-edge">
          <div
            v-for="item in personalDossier"
            :key="item.label"
            class="grid grid-cols-1 px-6 py-4 sm:grid-cols-12 sm:gap-4 transition-colors hover:bg-surface"
          >
            <dt class="font-mono text-xs text-muted sm:col-span-4 sm:pt-0.5">
              {{ item.label }}
            </dt>
            <dd class="mt-1 font-serif text-base text-parchment-200 sm:col-span-8 sm:mt-0">
              <a
                v-if="item.link"
                :href="item.link"
                :target="item.link.startsWith('mailto:') ? undefined : '_blank'"
                :rel="item.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
                class="inline-flex items-center gap-1 text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
              >
                <span>{{ item.value }}</span>
                <span class="text-xs">↗</span>
              </a>
              <span v-else>{{ item.value }}</span>
            </dd>
          </div>
        </dl>
      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 02: Educational Trajectory (Academic Timeline)
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <div class="mb-10 border-b border-edge pb-4">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
          02 // Academic History
        </span>
        <h2 class="mt-1 font-serif text-2xl font-normal tracking-editorial text-parchment-100 sm:text-3xl">
          Educational Background
        </h2>
      </div>

      <div class="space-y-12">
        <article
          v-for="item in education"
          :key="item.institution + item.credential"
          class="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-emerald-500 after:absolute after:bottom-0 after:left-[3.5px] after:top-5 after:w-px after:bg-edge last:after:hidden"
        >
          <div class="rounded-2xl border border-edge bg-surface/40 p-6 md:p-8 transition-colors hover:border-edge-bright hover:bg-surface">
            
            <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h3 class="font-serif text-2xl font-normal text-parchment-100">
                  {{ item.credential }}
                </h3>
                <div class="mt-1 font-mono text-xs text-emerald-400">
                  {{ item.institution }}
                </div>
              </div>

              <div class="font-mono text-xs text-muted sm:text-right">
                <div>{{ item.period }}</div>
                <div class="text-faint">{{ item.status }}</div>
              </div>
            </div>

            <ul class="mt-6 space-y-2.5 border-t border-edge/60 pt-6 font-serif text-sm leading-relaxed text-parchment-300">
              <li
                v-for="(point, pIdx) in item.highlights"
                :key="pIdx"
                class="flex items-start gap-2"
              >
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/80" />
                <span>{{ point }}</span>
              </li>
            </ul>

          </div>
        </article>
      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 03: Categorized Skills & Technical Proficiencies
    ══════════════════════════════════════════════════════════════ -->
    <section class="border-t border-edge bg-surface/30 py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        
        <div class="mb-12 border-b border-edge pb-4">
          <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
            03 // Capability Ledger
          </span>
          <h2 class="mt-1 font-serif text-2xl font-normal tracking-editorial text-parchment-100 sm:text-3xl">
            Skills &amp; Technical Proficiencies
          </h2>
          <p class="mt-2 font-sans text-xs text-muted">
            Classified across core programming languages, frameworks and databases, design systems, API clients, and modern vibe coding workflows.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="cat in skillCategories"
            :key="cat.domain"
            class="flex flex-col justify-between rounded-2xl border border-edge bg-surface/70 p-6"
          >
            <div>
              <h3 class="font-serif text-lg font-normal text-parchment-100">
                {{ cat.domain }}
              </h3>
              <p class="mt-2 font-serif text-xs leading-relaxed text-muted">
                {{ cat.summary }}
              </p>

              <!-- Badges -->
              <div class="mt-6 space-y-2 border-t border-edge/60 pt-4">
                <div
                  v-for="tech in cat.technologies"
                  :key="tech.name"
                  class="flex items-center justify-between rounded-lg border border-edge-subtle bg-canvas/40 px-3 py-2 font-mono text-xs"
                >
                  <span class="text-parchment-200">{{ tech.name }}</span>
                  <span class="text-[10px] text-emerald-400">{{ tech.tier }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 04: Personal Skills & Methodologies (Student & Grit)
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <div class="mb-10 border-b border-edge pb-4">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
          04 // Student Traits &amp; Grit
        </span>
        <h2 class="mt-1 font-serif text-2xl font-normal tracking-editorial text-parchment-100 sm:text-3xl">
          Personal Skills &amp; Methodologies
        </h2>
        <p class="mt-2 font-sans text-xs text-muted">
          Rooted in academic commitment, team leadership, and the disciplined time-management shaped by previous part-time work.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div
          v-for="trait in workingAttributes"
          :key="trait.title"
          class="rounded-xl border border-edge bg-surface/40 p-6 transition-colors hover:bg-surface"
        >
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <h3 class="font-serif text-lg text-parchment-100">
              {{ trait.title }}
            </h3>
          </div>
          <p class="mt-2 font-serif text-sm leading-relaxed text-parchment-400">
            {{ trait.description }}
          </p>
        </div>
      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 05: Intellectual Pursuits & Interests
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <div class="mb-10 border-b border-edge pb-4">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
          05 // Personal Pursuits &amp; Hobbies
        </span>
        <h2 class="mt-1 font-serif text-2xl font-normal tracking-editorial text-parchment-100 sm:text-3xl">
          Interests &amp; Pursuits
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="p in pursuits"
          :key="p.title"
          class="rounded-xl border border-edge bg-surface/50 p-5 transition-colors hover:border-emerald-500/30"
        >
          <h3 class="font-serif text-base font-normal text-parchment-100">
            {{ p.title }}
          </h3>
          <p class="mt-2 font-serif text-xs leading-relaxed text-muted">
            {{ p.notes }}
          </p>
        </div>
      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 06: Back to Homepage Navigation Link
    ══════════════════════════════════════════════════════════════ -->
    <section class="border-t border-edge bg-canvas pt-12">
      <div class="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
        
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-2 rounded-lg border border-edge bg-surface px-6 py-3 font-mono text-xs font-semibold tracking-wider text-parchment-200 transition-all hover:border-emerald-500/50 hover:bg-surface-hover hover:text-emerald-400"
        >
          <span class="transition-transform group-hover:-translate-x-1">←</span>
          <span>Return to Home Page</span>
        </NuxtLink>

        <a
          href="mailto:anthony.adlawon@carsu.edu.ph"
          class="font-mono text-xs text-muted transition-colors hover:text-emerald-400"
        >
          Inquire: anthony.adlawon@carsu.edu.ph ↗
        </a>

      </div>
    </section>

  </div>
</template>
