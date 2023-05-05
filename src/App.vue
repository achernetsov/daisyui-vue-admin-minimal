<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <!-- <main class="hero min-h-screen bg-base-200"> -->
  <main>
    <RouterView />
  </main>
</template>
