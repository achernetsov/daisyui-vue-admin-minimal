<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
</script>

<!-- https://daisyui.com/components/drawer/ -->
<template>
    <div class="drawer">
        <div class="drawer-content flex flex-col">
            <Navbar />
            <!-- Page content here -->
            <Hero />
        </div>

    </div>
</template>