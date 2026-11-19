<!-- app/components/AppNavbar.vue
     Editorial navigation bar inspired by Anthropic and bespoke developer portfolios.
-->

<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-edge/80 bg-canvas/85 backdrop-blur-md">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <nav class="flex h-16 items-center justify-between">

        <!-- ── Wordmark / Monogram ── -->
        <NuxtLink
          to="/"
          class="group flex items-center gap-3 text-parchment-100 transition-colors"
          @click="closeMenu"
        >
          <span class="font-serif text-xl tracking-tight text-parchment-100 transition-colors group-hover:text-emerald-400">
            Anthony N. Adlawon
          </span>
          <span class="hidden font-mono text-[11px] tracking-widest text-faint sm:inline-block">
            / BSIT · CSU
          </span>
        </NuxtLink>

        <!-- ── Desktop Navigation ── -->
        <div class="hidden items-center gap-8 sm:flex">
          <ul class="flex items-center gap-6 font-mono text-xs tracking-wider">
            <li>
              <NuxtLink
                to="/"
                class="transition-colors hover:text-parchment-100"
                exact-active-class="text-emerald-400"
              >
                01. Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/profile"
                class="transition-colors hover:text-parchment-100"
                active-class="text-emerald-400"
              >
                02. Profile
              </NuxtLink>
            </li>
          </ul>

          <div class="h-3.5 w-px bg-edge" />

          <!-- Live status dot -->
          <div class="flex items-center gap-2 font-mono text-[11px] text-muted">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>CSU Student</span>
          </div>

          <!-- Direct mail action -->
          <a
            href="mailto:anthony.adlawon@carsu.edu.ph"
            class="group inline-flex items-center gap-1.5 rounded-full border border-edge bg-surface px-3.5 py-1.5 font-mono text-xs text-parchment-200 transition-all hover:border-emerald-500/50 hover:bg-surface-hover hover:text-emerald-400"
          >
            <span>Contact</span>
            <span class="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>

        <!-- ── Mobile Menu Trigger ── -->
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-surface text-muted transition-colors hover:text-parchment-100 sm:hidden"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <svg v-if="isMenuOpen" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 8h16M4 16h16" />
          </svg>
        </button>

      </nav>

      <!-- ── Mobile Drawer ── -->
      <div v-show="isMenuOpen" class="border-t border-edge py-4 sm:hidden">
        <ul class="flex flex-col gap-2 font-mono text-xs tracking-wider">
          <li>
            <NuxtLink
              to="/"
              class="block rounded-md px-3 py-2 text-muted transition-colors hover:bg-surface hover:text-parchment-100"
              exact-active-class="text-emerald-400 bg-surface"
              @click="closeMenu"
            >
              01. Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/profile"
              class="block rounded-md px-3 py-2 text-muted transition-colors hover:bg-surface hover:text-parchment-100"
              active-class="text-emerald-400 bg-surface"
              @click="closeMenu"
            >
              02. Profile
            </NuxtLink>
          </li>
          <li class="pt-2">
            <a
              href="mailto:anthony.adlawon@carsu.edu.ph"
              class="flex items-center justify-between rounded-md border border-edge bg-surface px-3 py-2 text-parchment-200"
              @click="closeMenu"
            >
              <span>anthony.adlawon@carsu.edu.ph</span>
              <span class="text-emerald-400">↗</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </header>
</template>
