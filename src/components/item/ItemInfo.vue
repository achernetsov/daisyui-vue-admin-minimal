<script setup lang="ts">
import { useItemStore } from '@/stores/item'

const itemStore = useItemStore()
</script>

<template>
    <div id="item-info-tab" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- <div class="form-control w-full max-w-xs"> -->
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">Name</span>
            </label>
            <input v-model="itemStore.item!.name"  type="text" placeholder="Type name here" class="input input-bordered w-full" />
        </div>
        <div class="form-control w-full">
            <label class="label">
                <span class="label-text">Type</span>
            </label>
            <select class="select select-bordered">
                <option disabled selected>Pick one</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
            </select>
        </div>
        <div class="form-control md:col-span-2">
            <label class="label">
                <span class="label-text">Description</span>
            </label>
            <textarea class="textarea textarea-bordered h-24" placeholder="Item description"></textarea>
        </div>
    </div>

    <div id="form-actions" class="card-actions justify-start">
        <button class="btn btn-primary">Save</button>
    </div>
</template>