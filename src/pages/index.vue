<script setup>
    import useActivities from "../composables/useActivities"
    const {  activity } = useActivities()


</script>
<template>
    <div class="mt-16">
        <ul>
            <div  class="flex flex-col items-center gap-4 p-4 py-8 mx-auto mt-16 text-center bg-white rounded-lg shadow-2xl">

                <h3 class="items-center text-xl font-semibold tracking-tight">
                    {{ activity.activity }} 
                </h3>
                <p>Type: {{ activity.type }} </p>
                <p>Participants: {{ activity.participants }} </p>
                <p>Price: {{ activity.price }} </p>
            </div>            
        </ul>
    </div>
</template>