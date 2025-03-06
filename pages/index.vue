<template>
    <div class="absolute bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:hidden w-[100vw] h-[25dvh] top-0 bg-no-repeat bg-cover bg-center z-[-1]"></div>
 <Container>
    <div class="md:grid md:grid-cols-3">
        <div class="md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-center bg-cover rounded-xl">

        </div>
        <div class="col-span-2">
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
            <div class="my-3">para remover</div>
        </div>
    </div>
 </Container>
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