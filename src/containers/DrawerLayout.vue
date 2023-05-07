<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router'
</script>

<!-- https://daisyui.com/components/drawer/ -->
<template>
    <div class="drawer">
        <div class="drawer-content flex flex-col">
            <Navbar />
            <!-- Page content here -->
            <RouterView />
        </div>

    </div>
</template>