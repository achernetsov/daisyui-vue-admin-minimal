<script setup lang="ts">
import PageContentLayout from '@/containers/PageContentLayout.vue'
import ItemForm from '@/components/ItemForm.vue'
</script>

<template>
    <PageContentLayout>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Confirm logout</h2>
                <p>Are you sure?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Logout</button>
                </div>
            </div>
        </div>
    </PageContentLayout>
</template>