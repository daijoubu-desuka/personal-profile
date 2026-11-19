<!-- app/pages/index.vue
     Editorial portfolio homepage inspired by Anthropic's typographic brand language.
     Typography: Newsreader (editorial serif), JetBrains Mono (monospace metadata), Plus Jakarta Sans.
-->

<script setup lang="ts">
useHead({
  title: 'Anthony Namog Adlawon — Home | CSU Main Campus',
})

// Dynamic avatar path: points to uploaded student profile image
const avatarPath = ref('/images/profile.jpg?v=2')
const imageLoaded = ref(true)

const onAvatarError = () => {
  // Graceful fallback to SVG if JPG fails to load
  if (!avatarPath.value.includes('profile.svg')) {
    avatarPath.value = '/images/profile.svg'
  } else {
    imageLoaded.value = false
  }
}

// Case studies / technical highlights (user's published GitHub projects)
const selectedWork = [
  {
    index: '01',
    title: 'Vision Guard',
    role: 'Lead Developer',
    year: '2024',
    category: 'Security & Intelligent Monitoring System',
    description:
      'An intelligent safety and vision-oriented monitoring application built for active surveillance, threat detection, and real-time interface management.',
    stack: ['TypeScript', 'Vue 3', 'Python', 'Tailwind CSS', 'API Integration'],
    repoUrl: 'https://github.com/daijoubu-desuka/vision-guard',
  },
  {
    index: '02',
    title: 'Balay Hub',
    role: 'Full-Stack Developer',
    year: '2024',
    category: 'Student Housing & Accommodation Platform',
    description:
      'A community-driven boarding house and residential rental management platform designed to help students discover, browse, and book accommodations effortlessly.',
    stack: ['Nuxt.js', 'Vue 3', 'TypeScript', 'Node.js', 'Prisma ORM'],
    repoUrl: 'https://github.com/daijoubu-desuka/balay-hub',
  },
]

// Working principles
const principles = [
  {
    number: '01',
    title: 'Clarity over Cleverness',
    detail: 'Prefer transparent, readable code and clear structures over opaque abstractions. Code is read ten times more often than it is written.',
  },
  {
    number: '02',
    title: 'Human-Centered Perspective',
    detail: 'Rooted in a HUMSS background, software should be empathetic, intuitive, and accessible. Technology exists to serve people and community needs.',
  },
  {
    number: '03',
    title: 'Curiosity & Continuous Iteration',
    detail: 'Embracing modern developer tools and AI-assisted workflows (vibe coding) to learn faster, test assumptions, and build solid student projects.',
  },
]
</script>

<template>
  <div class="space-y-24 py-12 md:py-20">

    <!-- ══════════════════════════════════════════════════════════════
         HERO SECTION: Student Profile & Welcome
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <!-- Top Eyebrow / Metadata Ledger -->
      <div class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-edge pb-4 font-mono text-xs text-muted">
        <div class="flex items-center gap-2">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span class="tracking-widest text-parchment-200">PORTFOLIO // CARAGA STATE UNIVERSITY</span>
        </div>
        <div class="tracking-widest text-faint">
          BAYUGAN CITY, AGUSAN DEL SUR, PH · 8.7126° N, 125.7483° E
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        
        <!-- Left Column: Typographic Narrative -->
        <div class="space-y-8 lg:col-span-7">
          
          <div class="space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Welcome · Student Portfolio &amp; Projects
            </span>
            
            <h1 class="font-serif text-4xl font-normal tracking-editorial text-parchment-100 sm:text-5xl md:text-6xl">
              Anthony Namog Adlawon
            </h1>
            
            <p class="font-serif text-2xl font-light italic leading-snug text-parchment-300 sm:text-3xl">
              BSIT Student at Caraga State University Main Campus crafting responsive web interfaces, exploring full-stack engineering, and AI-assisted workflows.
            </p>
          </div>

          <!-- Body introduction -->
          <div class="max-w-2xl space-y-4 font-serif text-lg leading-relaxed text-parchment-300">
            <p>
              I am an Information Technology student at Caraga State University Main Campus, residing in Bayugan City, Agusan Del Sur. 
              My academic pursuits focus on web development, relational database systems, and practical software design.
            </p>
            <p class="font-sans text-sm leading-relaxed text-muted">
              Blending analytical foundation with modern tech—from Vue 3, Nuxt, and TypeScript to hands-on experimentation with Next.js, Node.js, and vibe coding tools like VS Code, Antigravity, and Claude Code.
            </p>
          </div>

          <!-- Primary Actions -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <NuxtLink
              to="/profile"
              class="group inline-flex items-center gap-2 rounded-lg bg-parchment-100 px-6 py-3 font-mono text-xs font-semibold tracking-wider text-canvas transition-all hover:bg-emerald-400 hover:text-canvas"
            >
              <span>Explore Full Profile &amp; Background</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </NuxtLink>

            <a
              href="mailto:anthony.adlawon@carsu.edu.ph"
              class="inline-flex items-center gap-2 rounded-lg border border-edge bg-surface px-5 py-3 font-mono text-xs tracking-wider text-parchment-200 transition-colors hover:border-emerald-500/50 hover:bg-surface-hover hover:text-emerald-400"
            >
              <span>Send Message</span>
              <span>↗</span>
            </a>
          </div>

        </div>

        <!-- Right Column: Big Round Radius Editorial Portrait -->
        <div class="flex justify-center lg:col-span-5 lg:justify-end">
          <div class="relative mx-auto w-72 sm:w-80 md:w-96 lg:w-[380px] xl:w-[420px] max-w-[420px]">
            
            <!-- Big circular portrait ring -->
            <div class="relative aspect-square w-full overflow-hidden rounded-full border-2 border-emerald-500/40 bg-surface p-3 shadow-2xl shadow-emerald-500/15 transition-all duration-500 hover:border-emerald-400/70 hover:shadow-emerald-500/30">
              
              <!-- Inner rounded-full image frame -->
              <div class="relative h-full w-full overflow-hidden rounded-full border border-edge-bright bg-canvas">
                <img
                  v-if="imageLoaded"
                  :src="avatarPath"
                  alt="Portrait of Anthony Namog Adlawon"
                  class="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  @error="onAvatarError"
                />
                
                <!-- Fallback monogram if image fails -->
                <div
                  v-else
                  class="flex h-full w-full flex-col items-center justify-center bg-surface p-6 text-center"
                >
                  <span class="font-serif text-6xl font-light italic text-parchment-200">AA</span>
                  <span class="mt-2 font-mono text-xs uppercase tracking-widest text-emerald-400">Anthony N. Adlawon</span>
                </div>
              </div>

            </div>

            <!-- Subtle emerald glow footprint -->
            <div class="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
        </div>

      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 01: Selected Engineering Works & Case Studies
    ══════════════════════════════════════════════════════════════ -->
    <section class="border-t border-edge bg-surface/40 py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        
        <div class="mb-12 flex flex-col justify-between gap-6 border-b border-edge pb-6 sm:flex-row sm:items-end">
          <div>
            <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
              01 // Selected Focus
            </span>
            <h2 class="mt-1 font-serif text-3xl font-normal tracking-editorial text-parchment-100 sm:text-4xl">
              Systems &amp; Interface Projects
            </h2>
          </div>
          <div class="flex flex-col gap-3 sm:items-end">
            <p class="max-w-md font-sans text-xs text-muted sm:text-right">
              Coursework, software prototypes, and repositories published so far. Visit my GitHub to explore all active projects and source code.
            </p>
            <a
              href="https://github.com/daijoubu-desuka?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-1.5 rounded-lg border border-edge bg-surface px-4 py-2 font-mono text-xs text-parchment-200 transition-all hover:border-emerald-500/50 hover:bg-surface-hover hover:text-emerald-400"
            >
              <span>Visit GitHub Repositories</span>
              <span class="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>

        <!-- Project Entries -->
        <div class="divide-y divide-edge">
          <article
            v-for="work in selectedWork"
            :key="work.index"
            class="group py-8 transition-colors hover:bg-surface/50"
          >
            <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
              
              <!-- Number & Role -->
              <div class="space-y-1 md:col-span-3">
                <span class="font-mono text-xs text-emerald-400">
                  {{ work.index }} / {{ work.year }}
                </span>
                <div class="font-mono text-xs text-faint">
                  {{ work.category }}
                </div>
              </div>

              <!-- Title & Abstract -->
              <div class="space-y-3 md:col-span-6">
                <h3 class="font-serif text-2xl font-normal text-parchment-100 transition-colors group-hover:text-emerald-400">
                  {{ work.title }}
                </h3>
                <p class="font-serif text-base leading-relaxed text-parchment-300">
                  {{ work.description }}
                </p>
                <div class="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-muted">
                  <span
                    v-for="tech in work.stack"
                    :key="tech"
                    class="rounded border border-edge bg-surface px-2 py-0.5 text-faint"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Status / Action -->
              <div class="flex items-center justify-start md:col-span-3 md:justify-end">
                <a
                  :href="work.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/btn inline-flex items-center gap-1.5 rounded-lg border border-edge bg-surface px-3.5 py-1.5 font-mono text-xs text-muted transition-all hover:border-emerald-500/50 hover:bg-surface-hover hover:text-emerald-400"
                >
                  <span>View Repository</span>
                  <span class="transition-transform group-hover/btn:translate-x-0.5">↗</span>
                </a>
              </div>

            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 02: Core Engineering Principles
    ══════════════════════════════════════════════════════════════ -->
    <section class="mx-auto max-w-5xl px-6 lg:px-8">
      
      <div class="mb-12 border-b border-edge pb-6">
        <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
          02 // Principles
        </span>
        <h2 class="mt-1 font-serif text-3xl font-normal tracking-editorial text-parchment-100 sm:text-4xl">
          Working Philosophy
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="p in principles"
          :key="p.number"
          class="space-y-3 rounded-2xl border border-edge bg-surface/50 p-6 transition-all hover:border-emerald-500/30 hover:bg-surface"
        >
          <span class="font-mono text-xs text-emerald-400">
            {{ p.number }}
          </span>
          <h3 class="font-serif text-xl font-normal text-parchment-100">
            {{ p.title }}
          </h3>
          <p class="font-serif text-sm leading-relaxed text-parchment-400">
            {{ p.detail }}
          </p>
        </div>
      </div>

    </section>

    <!-- ══════════════════════════════════════════════════════════════
         SECTION 03: Editorial Call to Action (Next Step)
    ══════════════════════════════════════════════════════════════ -->
    <section class="border-t border-edge bg-gradient-to-b from-surface/20 to-canvas py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div class="rounded-3xl border border-edge bg-surface/80 p-8 md:p-12">
          
          <div class="max-w-2xl space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-emerald-400">
              03 // Academic Dossier
            </span>
            <h2 class="font-serif text-3xl font-normal tracking-editorial text-parchment-100 sm:text-4xl">
              Curious about academic history, skills, or student background?
            </h2>
            <p class="font-serif text-lg leading-relaxed text-parchment-300">
              Explore the dedicated profile page featuring my educational journey from ADSCO to Caraga State University, detailed skills matrix, student methodologies, and interests.
            </p>
            
            <div class="pt-4">
              <NuxtLink
                to="/profile"
                class="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-canvas shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/20"
              >
                <span>Navigate to Profile Page</span>
                <span class="transition-transform group-hover:translate-x-1">→</span>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
