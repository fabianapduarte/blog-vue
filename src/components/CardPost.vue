<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card-grid">
    <img :src="imageUrl" class="h-28 sm:h-60 w-28 sm:w-60 object-cover" />
    <div>
      <h4 class="font-serif font-bold text-2xl truncate-text title">{{ title }}</h4>
      <p class="text-sm my-2">{{ date }}</p>
      <p class="mb-3 truncate-text summary">
        {{ summary }}
      </p>
      <RouterLink to="/post" class="text-primary font-bold pb-1 border-b-2 border-b-primary"
        >Ver post</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 24px;
}

@media (max-width: 640px) {
  .card-grid {
    display: flex;
    flex-direction: column;
  }
}

.truncate-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.5;
  -webkit-box-orient: vertical;
}

.title {
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.summary {
  -webkit-line-clamp: 3;
  line-clamp: 3;
}
</style>
