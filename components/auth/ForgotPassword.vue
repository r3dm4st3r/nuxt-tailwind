<template>
  <form>
    <div class="grid grid-cols-1">
      <div class="form-group mb-3">
        <label for="email" class="col-form-label">Your Email</label>
        <input type="email" id="email" class="form-control">
      </div>
      <div class="mt-3 flex flex-col sm:flex-row items-center justify-between">
        <button type="reset" class="btn block w-full sm:w-auto bg-theme text-white">Send Password</button>
        <NuxtLink to="/login" class="mt-6 sm:mt-0 text-sm font-bold">Back to Login</NuxtLink>
      </div>
    </div>
  </form>
</template>
