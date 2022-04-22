<template>
  <client-only>
    <main role="main">
      <section class="flex items-center justify-center min-h-screen">
        <div class="container">
          <div class="grid grid-cols-1">
            <div class="card w-full max-w-[550px] mx-auto">
              <div class="card-header text-center shadow-sm drop-shadow-sm">
                <LazyCommonLogo />
              </div>
              <div class="card-body">
                <Nuxt />
              </div>
            </div>
            <div class="w-full max-w-[550px] mx-auto">
              <div class="mt-10 text-center" v-if="isLogin">
                <h6 class="font-bold">Don't have account yet?</h6>
                <NuxtLink to="/register" class="text-sm text-green-800 font-bold">Create new account</NuxtLink>
              </div>
              <div class="mt-10 text-center" v-else>
                <h6 class="font-bold">Already have account yet?</h6>
                <NuxtLink to="/login" class="text-sm text-green-800 font-bold">Sign into account</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </client-only>
</template>

<script>
export default {
  name: 'AuthLayout',
  data() {
    return {
      isLogin: false
    }
  },
  mounted() {
    const currentPath = this.$router.currentRoute.fullPath;
    if (currentPath === '/login') {
      return this.isLogin = true;
    } else {
      return this.isLogin = false;
    }
  },
  watch: {
    '$route.path': function() {
      const currentPath = this.$router.currentRoute.fullPath;
      if (currentPath === '/login') {
        console.log('true')
        return this.isLogin = true;
      } else {
        return this.isLogin = false;
      }
    }
  }
}
</script>
