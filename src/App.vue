<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </div>
      <a class="btn btn-ghost text-xl"
        ><router-link to="/home">cz-learning-vuejs</router-link></a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="avatar">
        <div class="w-12 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
          />
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>

  <div>
    <h1>Cai l nay la footer</h1>
    <!-- <p>This is a simple Vue.js application.</p> -->
  </div>
</template>
