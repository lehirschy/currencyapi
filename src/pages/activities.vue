<script setup>
import { useRoute } from 'vue-router';
import useActivities from '../composables/useActivities';
const route = useRoute();
const { id } = route.params;
const {activity, getRandomActivities, participants, getParticipants} = useActivities();


</script>

<template>
    <div
    v-if="activity"
    class="max-w-md py-8 mx-auto mt-16 text-center bg-white rounded-lg">
        <h3 class="text-xl font-semibold tracking-tight">{{ act.name }}</h3>
        <p>activity:{{act.activity}} </p> 
	    <p>accessibility:{{act.accessibility}} </p>
	    <p>type:{{act.type}} </p>
	    <p>participants:{{act.participants}} </p>
	    <p>price:{{act.price}} </p>
	    <p>key:{{act.key}} </p>
    </div>

    <div v-else>Loading...</div>
    
    <div class="mt-8">
        <p
        class="px-4 py-6 my-4 text-xl italic text-center bg-white rounded-lg"
        v-for="paticipant in participants"
        :key="participant"
        :to="'/api/activity?participants=:participants'"
        >
        {{ participants.number }}
        </p>
    </div> 
        
</template>