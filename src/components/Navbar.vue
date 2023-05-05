<script setup lang="ts">
import Avatar1 from '@/components/icons/Avatar1.vue'
</script>
<template>
    <!-- https://daisyui.com/components/navbar/ -->
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none gap-2">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <!-- <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> -->
                        <Avatar1/>
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>