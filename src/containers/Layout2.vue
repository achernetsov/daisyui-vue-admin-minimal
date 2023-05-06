<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/24/solid'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import LogoBtn from '@/components/logo/LogoBtn.vue'
import ThemeToggle from '@/components/theme/ThemeToggle.vue'
</script>

<template>
  <!-- https://daisyui.com/components/drawer/ -->
      <!-- Navbar -->
      <header>
        <!-- https://daisyui.com/components/navbar/ -->
        <div class="navbar bg-base-100 mb-8">
          <div class="flex-1 gap-1">
            <!-- https://daisyui.com/components/avatar/ -->
            <LogoBtn/>
            <!-- text instead of logo -->
            <!-- <a class="btn btn-ghost normal-case text-xl">
              <span>Chipa bots</span>
            </a> -->
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li>
                <ThemeToggle/>
              </li>
              <li>
                <XMarkIcon class="flex-1 w-14"></XMarkIcon>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!-- Page content here -->
      <main>
        content
      </main>
</template>