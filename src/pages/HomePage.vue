<script setup lang="ts">
import BlogFooter from '@/components/BlogFooter.vue'
import BlogHeader from '@/components/BlogHeader.vue'
import CardPost from '@/components/CardPost.vue'
import { recentPosts } from '@/data'
</script>

<template>
  <BlogHeader />

  <main class="bg-neutral-100 text-neutral-900">
    <section class="flex flex-col justify-end py-20 px-6 items-center home-img">
      <h2 class="text-5xl text-neutral-50 font-serif font-bold italic text-center mb-7">
        Descobrindo histórias e inspirações nas entrelinhas da literatura
      </h2>
      <RouterLink to="/posts" class="bg-primary text-neutral-50 py-3 px-6">Ver posts</RouterLink>
    </section>
    <section class="py-10 px-10 md:px-20 lg:px-40 content">
      <div id="recent-posts" class="bg-neutral-50 p-6 flex flex-col items-center h-fit">
        <h3 class="text-3xl font-serif font-bold mb-7">Posts recentes</h3>
        <div class="flex flex-col gap-12 sm:gap-5 mb-8">
          <v-col v-for="(item, index) in recentPosts" v-bind:key="index">
            <CardPost
              :key="index"
              :title="item.title"
              :summary="item.summary"
              :date="item.date"
              :image-url="item.image"
            />
          </v-col>
        </div>
        <RouterLink to="/posts" class="bg-primary text-neutral-50 py-3 px-6"
          >Ver todos os posts</RouterLink
        >
      </div>
      <aside class="flex flex-col gap-7">
        <div class="flex flex-col items-center bg-neutral-50 p-6 h-fit">
          <h3 class="text-3xl font-serif font-bold mb-7">Sobre</h3>
          <img src="../assets/about.avif" class="h-60 w-60 object-cover mb-5" />
          <p class="text-center">
            Bem-vindo(a) ao Por Entre Linhas! Nossa paixão por livros se transforma em palavras.
            Seja você uma pessoa leitora ávida, entusiasta de romances, curiosa por histórias reais
            ou investigadora de clássicos, nosso blog é o lugar ideal para encontrar recomendações e
            conversas profundas sobre literatura.
          </p>
        </div>
        <div class="flex flex-col items-center bg-neutral-50 p-6 h-fit">
          <h3 class="text-3xl font-serif font-bold mb-7">Newsletter</h3>
          <p class="text-center">
            Não perca nenhuma novidade do mundo literário! Assine nossa newsletter e receba
            atualizações semanais do blog.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            class="my-3 p-3 w-full border border-primary-light bg-neutral-50"
          />
          <a href="#" class="bg-primary text-neutral-50 py-3 px-6">Assinar</a>
        </div>
      </aside>
    </section>
  </main>

  <BlogFooter />
</template>

<style scoped>
.home-img {
  background-image: url(../assets/home-img.jpg);
  background-position: center;
  background-size: cover;
  height: 80vh;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
}

@media screen and (max-width: 1200px) {
  .content {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media screen and (max-width: 400px) {
  .home-img {
    height: auto;
  }
}
</style>
