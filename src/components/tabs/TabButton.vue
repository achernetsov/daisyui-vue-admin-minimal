<script setup lang="ts">
import { ref } from 'vue'
defineProps({
    title: { type: String, required: true },
    link: { type: String, required: true },
    active: { type: Boolean, required: true }
})

const activeClass = ref('inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active')
const inactiveClass = ref('inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300')
</script>

<template>
    <li>
        <RouterLink :to="{ name: link }" :class="active ? activeClass : inactiveClass">
            {{ title }}
        </RouterLink>
    </li>
</template>