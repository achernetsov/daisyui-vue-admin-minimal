<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { SunIcon } from '@heroicons/vue/24/solid'
import { MoonIcon } from '@heroicons/vue/24/solid'

function logout(){
    console.info("Logout...")
}
</script>

<!-- https://github.com/srobbin01/daisyui-admin-dashboard-template -->
<!-- src/containers/Header.js -->
<template>
    <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">
        <!-- Menu toogle for mobile view or small screen -->
        <div className="">
            <!-- <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                <Bars3Icon className="h-5 inline-block w-5" />
            </label> -->
            <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
        </div>



        <div className="order-last">
            <!-- Light and dark theme selection toogle -->
            <label className="swap ">
                <input type="checkbox" />
                <!-- <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6
                    h-6 "+(currentTheme === " dark" ? "swap-on" : "swap-off" )} />
                <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6
                    h-6 "+(currentTheme === " light" ? "swap-on" : "swap-off" )} /> -->
                <!-- <SunIcon class="fill-current w-6 h-6"></SunIcon> -->
                <MoonIcon class="fill-current w-6 h-6"></MoonIcon>
            </label>


            <!-- Notification icon -->
            <!-- <button className="btn btn-ghost ml-4  btn-circle" onClick={()=> openNotification()}>
                <div className="indicator">
                    <BellIcon className="h-6 w-6" />
                    {noOfNotifications > 0 ? <span
                        className="indicator-item3 badge badge-secondary badge-sm">{noOfNotifications}</span> : null }
                </div>
            </button> -->


            <!-- Profile icon, opening menu on click -->
            <div className="dropdown dropdown-end ml-4">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="profile" />
                    </div>
                </label>
                <ul tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <!-- <li className="justify-between">
                        <RouterLink to='/'>
                        Profile Settings
                        <span className="badge">New</span>
                        </RouterLink>
                    </li>
                    <li className=''>
                        <RouterLink to='/'>Bill History</RouterLink>
                    </li>
                    <div className="divider mt-0 mb-0"></div> -->
                    <li><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>