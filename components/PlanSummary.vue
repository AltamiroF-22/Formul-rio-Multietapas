<template>
  <div class="w-full p-4 bg-[#adbeff]/10 rounded-md mt-8">
    <div class="border-b flex items-center justify-between">
      <div class="">
        <h4 class="text-[#02295a] font-semibold">
          {{ formData.planSelected }} ({{
            getPeriodLabel(formData.isYearly, undefined, true)
          }})
        </h4>
        <button
          @click="emit('handleGoBackToSelectPlan')"
          class="text-[#735bc7] text-sm mb-4 font-semibold transition hover:underline"
        >
          Mudar
        </button>
      </div>
      <small class="text-[#02295a] font-semibold"
        >${{ formData.planPrice }}/{{
          getPeriodLabel(formData.isYearly)
        }}</small
      >
    </div>

    <div
      v-for="on in formData.ons"
      :class="[
        'items-center justify-between my-2',
        on.selected ? 'flex' : 'hidden',
      ]"
    >
      <p class="text-xs text-gray-400">{{ on.description }}</p>
      <small class="text-[#02295a]"
        >+${{ on.price }}/{{ getPeriodLabel(formData.isYearly) }}</small
      >
    </div>
  </div>

  <div class="flex items-center justify-between p-4">
    <p class="text-xs text-gray-400">
      Total ({{ getPeriodLabel(formData.isYearly, true) }})
    </p>
    <small class="text-[#735bc7] text-base font-bold"
      >+${{ formData.total }}/ {{ getPeriodLabel(formData.isYearly) }}</small
    >
  </div>
</template>

<script setup>
import getPeriodLabel from "@/utils/getPeriodLabel";

defineProps({
  formData: Object,
});

const emit = defineEmits(["handleGoBackToSelectPlan"]);
</script>
