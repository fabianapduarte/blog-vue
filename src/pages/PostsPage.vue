<script setup lang="ts">
import BlogFooter from '@/components/BlogFooter.vue'
import BlogHeader from '@/components/BlogHeader.vue'
import CardPost from '@/components/CardPost.vue'
import { allPosts } from '@/data'
</script>

<template>
  <BlogHeader />

  <main class="bg-neutral-100 text-neutral-900 py-10 px-10 md:px-20 lg:px-40">
    <h2 class="text-3xl font-serif font-bold mb-7 text-center">Todos os posts</h2>
    <div class="mb-8 content">
      <v-col v-for="(item, index) in allPosts" v-bind:key="index">
        <CardPost
          :key="index"
          :title="item.title"
          :summary="item.summary"
          :date="item.date"
          :image-url="item.image"
        />
      </v-col>
    </div>
  </main>

  <BlogFooter />
</template>

<style scoped>
.content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

@media screen and (max-width: 1200px) {
  .content {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
