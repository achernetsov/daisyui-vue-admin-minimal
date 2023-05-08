<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="flex flex-col min-h-screen bg-base-200">
        <Navbar/>
        <div class="flex-1">
            <RouterView/>
        </div>
        <!-- <div>Footer</div> -->
    </div>

</template>