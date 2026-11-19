<!-- app/components/AppFooter.vue
     Editorial Colophon Footer with typographic precision and understated details.
-->

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { label: 'GitHub', href: 'https://github.com/daijoubu-desuka' },
  { label: 'Facebook', href: 'https://www.facebook.com/daijoubu.deskaa' },
  { label: 'Email', href: 'mailto:anthony.adlawon@carsu.edu.ph' },
]
</script>

<template>
  <footer class="border-t border-edge bg-canvas text-muted">
    <div class="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      
      <div class="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        
        <!-- ── Student Portfolio Statement ── -->
        <div class="space-y-4 md:col-span-6">
          <div class="flex items-center gap-2">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span class="font-mono text-xs uppercase tracking-widest text-parchment-200">
              Student Portfolio
            </span>
          </div>
          <p class="font-serif text-base leading-relaxed text-parchment-300">
            Personal portfolio and academic journal of Anthony Namog Adlawon. Curated to document undergraduate computing coursework, web applications, and continuous technical growth.
          </p>
          <p class="font-mono text-xs text-faint">
            Caraga State University Main Campus · Bayugan City, Agusan del Sur
          </p>
        </div>

        <!-- ── Navigation Index ── -->
        <div class="space-y-3 md:col-span-3">
          <span class="font-mono text-xs uppercase tracking-widest text-faint">
            Directory
          </span>
          <ul class="space-y-2 font-mono text-xs">
            <li>
              <NuxtLink to="/" class="transition-colors hover:text-emerald-400">
                01. Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/profile" class="transition-colors hover:text-emerald-400">
                02. Profile &amp; Background
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- ── Signals / Social ── -->
        <div class="space-y-3 md:col-span-3">
          <span class="font-mono text-xs uppercase tracking-widest text-faint">
            Network
          </span>
          <ul class="space-y-2 font-mono text-xs">
            <li v-for="link in links" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-1 transition-colors hover:text-emerald-400"
              >
                <span>{{ link.label }}</span>
                <span class="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400">↗</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- ── Bottom Ledger ── -->
      <div class="mt-16 flex flex-col items-start justify-between gap-4 border-t border-edge/60 pt-8 font-mono text-[11px] text-faint sm:flex-row sm:items-center">
        <div>
          © {{ currentYear }} Anthony Namog Adlawon · Bayugan City, Agusan del Sur, Philippines [UTC+8]
        </div>
        <div class="flex items-center gap-3">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
          <span>CSU Main Campus · BSIT</span>
        </div>
      </div>

    </div>
  </footer>
</template>
