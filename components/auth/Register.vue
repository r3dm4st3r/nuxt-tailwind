<template>
  <form class="sm:p-5">
    <div class="grid grid-cols-1">
      <div class="form-group mb-4">
        <label for="name" class="col-form-label">Your Name</label>
        <input type="text" id="name" name="name" class="form-control">
      </div>
      <div class="form-group mb-4">
        <label for="email" class="col-form-label">Email Address</label>
        <input type="email" id="email" name="email" class="form-control">
      </div>
      <div class="form-group mb-4">
        <label for="password" class="col-form-label">Password</label>
        <input type="password" id="password" name="password" class="form-control">
      </div>
      <div class="form-group mb-4">
        <label for="cPassword" class="col-form-label">Confirm Password</label>
        <input type="password" id="cPassword" name="password-confirmation" class="form-control">
      </div>
      <div class="mt-7 flex flex-col sm:flex-row items-center justify-between">
        <button type="reset" class="btn block w-full sm:w-auto bg-theme text-white">Register</button>
      </div>
    </div>
  </form>
</template>
