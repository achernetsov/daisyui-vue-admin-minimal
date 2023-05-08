<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<!-- https://daisyui.com/components/hero/ -->
<template>
    <div class="hero h-[75vh]">
        <div class="hero-content  text-center">
            <div class="max-w-md ">
                <h1 class="text-5xl font-bold">Hello there</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                <div id="button">
                    <RouterLink :to="{ name: 'newItemHome' }">
                        <button class="btn btn-primary">Create item</button>
                    </RouterLink>
                </div>

            </div>
        </div>
    </div>
</template>