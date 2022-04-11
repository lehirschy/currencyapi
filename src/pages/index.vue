<script setup>
    import useActivities from "../composables/useActivities";
    const {  activity } = useActivities();


</script>
<template>
    <div class="mt-16">
        <ul class="grid grid-cols-3 gap-12">
            <router-link
                class="p-4 bg-white rounded-lg shadow-2xl cursor-pointer hover:scale-105"
                v-for="act in activity"
                :key="act"
                to="'/api/activity/'"
            >
            <div
                class="max-w-md py-8 mx-auto mt-16 text-center bg-white rounded-lg">

                    <h3 class="text-xl font-semibold tracking-tight">{{ act.activity }} </h3>
            
                </div>
                </router-link>
        </ul>
    </div>
</template>