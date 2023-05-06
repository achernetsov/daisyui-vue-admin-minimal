<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/24/solid'
import { MoonIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <!-- https://daisyui.com/components/drawer/ -->
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <header>
        <div class="w-full navbar bg-base-300">
          <div class="flex-none lg:hidden md:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">Navbar Title</div>
          <div class="flex-none hidden lg:block md:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li>
                <MoonIcon class="flex-1 w-14" />
              </li>
              <li><a>Navbar Item 2</a></li>
            </ul>
          </div>
        </div>
      </header>
      <!-- Page content here -->
      <main>
        content
      </main>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <!-- <ul class="menu p-4 w-80 bg-base-100"> -->
      <ul class="menu p-4 w-4/5 bg-base-100">
        <!-- Sidebar content here -->
        <li><a>Darkmode</a></li>
        <li><a>Logout</a></li>

      </ul>

    </div>
  </div>
</template>