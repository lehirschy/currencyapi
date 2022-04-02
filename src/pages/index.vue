<script setup>
    import useDogs from '../composables/useExchange';

    const {dogs} = useDogs;
</script>
<template>
    <div>
        <button class="text-2xl text-center text-white fill-emerald-800 rounded-3xl "> Random Dog Picture</button>
        <div>
            <div
                v-for="(index) in dogs" 
                :key="index">>
                <p class="w-full pt-16 text-2xl text-center">
                
                    {{dogs.dogs}}
                </p>
            </div>
        </div>
    </div>
</template>