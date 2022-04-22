<template>
  <section class="min-h-[calc(100vh-92px)] flex items-center">
    <div class="container">
      <div class="grid grid-cols-1">
        <div class="text-center">
          <h1 v-if="error.statusCode === 404" class="mb-5">Page not found</h1>
          <h1 v-else class="mb-5">An error occurred</h1>
          <NuxtLink to="/" class="btn bg-theme text-white inline-block">Back To Home</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blank',
  props: ['error'],
}
</script>

