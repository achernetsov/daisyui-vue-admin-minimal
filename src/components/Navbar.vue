<script setup lang="ts">
import LogoBtn from '@/components/logo/LogoBtn.vue'
import ThemeToggle from '@/components/theme/ThemeToggle.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
</script>

 <!-- https://daisyui.com/components/navbar/ -->
<template>
    <header>
        <div class="navbar bg-base-100">
            <div class="flex-1 gap-1">
                <LogoBtn />
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <XMarkIcon class="flex-1 w-14"></XMarkIcon>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>