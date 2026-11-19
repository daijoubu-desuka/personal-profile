<!-- app/layouts/default.vue
     Editorial layout wrapper with Anthropic-inspired dark canvas.
-->

<template>
  <div class="min-h-screen bg-canvas font-sans text-parchment-200 selection:bg-emerald-dim selection:text-white antialiased flex flex-col">
    <!-- Top editorial navigation -->
    <AppNavbar />

    <!-- Injected page content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Refined colophon footer -->
    <AppFooter />
  </div>
</template>
