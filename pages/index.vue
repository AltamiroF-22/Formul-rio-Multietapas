<template>
 <h1 class="text-orange-500 text-2xl font-semibold">olá</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

 enum STEPS {
    YOUR_INFO = 0,
    SELECT_PLAN = 1,
    ADD_ONS = 2,
    SUMMARY = 3
 }

 const step = ref<STEPS>(STEPS.YOUR_INFO);

 const onBack = () => {
    step.value = step.value - 1 as STEPS
 }

 const onNext = () => {
    step.value = step.value + 1 as STEPS
 }

</script>