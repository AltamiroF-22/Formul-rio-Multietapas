<template>
  <div class="flex items-center gap-3 text-white md:ml-8 md:mt-8">
    <div
      class="w-9 h-9 rounded-full flex items-center justify-center text-md font-bold"
      :class="{
        'bg-transparent border': !active,
        'bg-[#bfe2fd] border-0 text-[#02295a]': active,
        'text-md font-semibold border': true,
      }"
    >
      {{ stepNumber }}
    </div>
    <div class=" hidden md:block">
      <p class="font-extralight text-white/50 text-xs">
        PASSO {{ stepNumber }}
      </p>
      <h3 class="font-semibold tracking-wider text-sm">{{ stepName }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stepNumber: {
    type: Number,
  },
  stepName: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});
</script>
