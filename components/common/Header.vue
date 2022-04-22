<template>
  <header class="py-2 shadow drop-shadow">
    <div class="container">
      <div class="flex items-center justify-between">
        <LazyCommonLogo />
        <div>
          <NuxtLink to="/login" class="text-fuchsia-700 px-4 last:pr-0 font-bold">Login</NuxtLink>
          <NuxtLink to="/register" class="text-fuchsia-700 px-4 last:pr-0 font-bold">Register</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
