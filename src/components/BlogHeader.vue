<template>
  <header
    class="flex flex-col sm:flex-row items-center justify-between px-10 md:px-20 lg:px-40 py-6 bg-neutral-100 text-neutral-900"
  >
    <h1 class="text-3xl font-bold font-serif text-primary">Por Entre Linhas</h1>
    <nav class="flex items-center gap-6 mt-4 sm:mt-0">
      <RouterLink
        to="/"
        class="font-semibold hover:text-primary transition-colors"
        active-class="text-primary border-b-2 border-b-primary"
        >Início</RouterLink
      >
      <RouterLink
        to="/posts"
        class="font-semibold hover:text-primary transition-colors"
        active-class="text-primary border-b-2 border-b-primary"
        >Posts</RouterLink
      >
    </nav>
    <div class="flex items-center gap-6 mt-4 sm:mt-0">
      <a href="#">
        <img src="../assets/icon-ig.svg" alt="Instagram" class="w-5 h-5" />
      </a>
      <a href="#">
        <img src="../assets/icon-yt.svg" alt="YouTube" class="w-5 h-5" />
      </a>
      <a href="#">
        <img src="../assets/icon-twt.svg" alt="Twitter" class="w-5 h-5" />
      </a>
    </div>
  </header>
</template>
