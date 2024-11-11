<script setup lang="ts">
import BlogFooter from '@/components/BlogFooter.vue'
import BlogHeader from '@/components/BlogHeader.vue'
</script>

<template>
  <BlogHeader />

  <main class="bg-neutral-100 text-neutral-900 py-6">
    <div class="content">
      <h2 class="text-3xl font-serif font-bold mb-3">Como montar a estante de livros dos sonhos</h2>
      <p class="text-xl font-serif mb-6 font-bold">Por Fabiana Pereira em 11 de novembro de 2024</p>
      <img src="../assets/library-post.jpg" class="w-full object-cover image-post mb-6" />
      <p class="mb-2 text-justify">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend eleifend pharetra sodales
        sollicitudin cubilia proin dolor neque. Tempor pharetra nisi mollis facilisis vehicula justo
        condimentum finibus. Velit malesuada posuere massa quis accumsan tempor auctor ultrices.
        Aliquam porttitor fames maximus, eleifend urna dapibus odio mus ac. Habitasse aliquet
        convallis condimentum convallis habitant laoreet. Potenti tincidunt praesent posuere turpis
        nullam pretium.
      </p>
      <p class="mb-2 text-justify">
        Blandit senectus nostra scelerisque ullamcorper, ultricies justo ad egestas. Penatibus
        pretium aenean ridiculus magnis litora tellus enim. Ad platea habitant porttitor est leo
        ante ac. Nascetur viverra ex auctor ut, est blandit montes. Senectus porta ac sit hendrerit
        ridiculus mollis potenti. Justo posuere nulla aenean hac placerat gravida scelerisque.
        Tellus risus quis vitae tortor interdum. At risus curae curabitur aptent ornare mattis.
        Proin dictum a parturient, lobortis nostra leo.
      </p>
      <p class="mb-2 text-justify">
        Habitasse nullam senectus quis massa cras, quisque netus dolor. Neque eu tellus praesent
        magnis suspendisse. Pretium eros cras nullam quisque; sociosqu quisque. Dignissim erat
        dignissim porta erat senectus habitasse erat arcu. Et proin magnis sem nullam; dictumst ad
        mollis tincidunt. Id urna dis arcu dignissim eros pellentesque scelerisque tristique magna?
      </p>
      <p class="mb-2 text-justify">
        Pulvinar nostra potenti rhoncus; dictum mauris eleifend nec. Dictum in facilisis cras
        efficitur congue rutrum. Erat maximus lacinia volutpat ante metus lorem mollis taciti.
        Eleifend convallis efficitur felis orci pretium bibendum? Orci aliquam lobortis pulvinar
        malesuada elementum dolor auctor. Leo urna ac parturient himenaeos dolor libero ultricies
        sem.
      </p>
      <p class="mb-2 text-justify">
        Lorem cras tempus velit augue auctor tristique odio nibh. Vitae nunc rutrum at pellentesque
        curae malesuada condimentum. Molestie habitant morbi nascetur eu; tellus platea ad
        pellentesque. Aliquam interdum adipiscing hendrerit parturient; consectetur erat. Conubia
        elementum phasellus rhoncus tincidunt euismod. Taciti nunc placerat lacinia ac sodales
        porttitor. Nascetur ultricies venenatis in et aenean augue ultricies erat accumsan. Lectus
        inceptos condimentum ad parturient maximus; luctus nullam vulputate. Cras porttitor mollis
        viverra hendrerit morbi facilisis.
      </p>
    </div>
  </main>

  <BlogFooter />
</template>

<style scoped>
.content {
  max-width: 800px;
  margin: 0 auto;
}

.image-post {
  height: 600px;
}

@media (max-width: 850px) {
  .content {
    width: 100%;
    padding: 32px;
  }
}
</style>
