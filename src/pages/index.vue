<script setup>
  import useActivities from '../composables/useActivities'
  const { activity } = useActivities()
</script>
<template>
  <div class="mt-16">
    <ul class="grid grid-cols-1 gap-12">
      <div
        class="p-4 shadow-2xl py-8 mx-auto mt-16 text-center bg-white rounded-lg flex flex-col items-center gap-4"
      >
        <h3 class="text-xl font-semibold tracking-tight">
          {{ activity.activity }}
        </h3>
        <p>Type: {{ activity.type }}</p>
        <p>Participants: {{ activity.participants }}</p>
        <p>Price: {{ activity.price }}</p>
      </div>
    </ul>
  </div>
</template>
