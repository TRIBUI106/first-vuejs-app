<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -- header -->
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
        <!-- <div class="dropdown">
          <div tabindex="0" role="button" class="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              class="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path
                d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
              ></path>
            </svg>
          </div>
          <ul
            tabindex="0"
            class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </div> -->
        <div class="avatar ml-2">
          <div class="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Main -->
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer
      class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4"
    >
      <aside>
        <p>Copyright © {{ currentYear }} - All rights reserved by yeumeent</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
