<template>
  <div
    class="absolute bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:hidden w-[100vw] h-[25dvh] top-0 bg-no-repeat bg-cover bg-center z-[-1]"
  ></div>
  <Container>
    <div class="md:grid md:grid-cols-3">
      <div
        class="hidden md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-center bg-cover rounded-xl md:flex flex-col"
      >
        <Step
          stepName="SUAS INFORMAÇÕES"
          stepNumber="1"
          :active="isYourInfoActive"
        />
        <Step
          stepName="SELECIONE UM PLANO"
          stepNumber="2"
          :active="isSelectPlanActive"
        />
        <Step stepName="COMPLEMENTOS" stepNumber="3" :active="isAddOnsActive" />
        <Step stepName="RESUMO" stepNumber="4" :active="isSummaryActive" />
      </div>
      <div class="col-span-2 flex items-center justify-center flex-col">
        <div class="min-h-[50vh]"></div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

enum STEPS {
  YOUR_INFO = 0,
  SELECT_PLAN = 1,
  ADD_ONS = 2,
  SUMMARY = 3,
}

const step = ref<STEPS>(STEPS.YOUR_INFO);

// ver uma maneira melhor dps
const isYourInfoActive = computed(() => step.value === STEPS.YOUR_INFO);
const isSelectPlanActive = computed(() => step.value === STEPS.SELECT_PLAN);
const isAddOnsActive = computed(() => step.value === STEPS.ADD_ONS);
const isSummaryActive = computed(() => step.value === STEPS.SUMMARY);

const onBack = () => {
  step.value = (step.value - 1) as STEPS;
};

const onNext = () => {
   step.value = (step.value + 1) as STEPS;
};
</script>
