<script>
    import {ref} from "vue";
import useActivities from "../composables/useActivities";
    import useActivity from "../composables/useActivities";

    const useActivity = useActivities();

    const { activities, search } = useActivities();

    const searchItem = ref("");
</script>
<template>
    <div>
        <input
        v-model="searchItem"
        @change="search(searchItem)"
        type="text"
        placeholder="Search an Activity..."
        class="w-full py-4 mt-16 text-xl text-center rounded-full"
        />
        <div class="grid grid-cols-2 gap-16 pt-16">
            <div v-for="(activity, index) in activities" :key="index">
                <p>
                    {{ activity.activity }}
                </p>
            </div>
        </div>
    </div>
</template>