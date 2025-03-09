<template>
  <div
    :class="[
      'border-2 flex p-5 rounded-lg justify-between items-center cursor-pointer transition hover:border-[#adbeff]',
      selected ? 'border-[#adbeff] bg-[#f0f6ff]/80' : '',
    ]"
  >
    <div class="flex gap-5 items-center">
      <div
        :class="[
          'w-6 h-6 p-1 rounded-md border flex items-center justify-center',
          selected ? 'bg-blue-600' : '',
        ]"
      >
        <img
          v-if="selected"
          :src="CheckMark"
          alt="check icon"
          class="w-4 h-4"
        />
      </div>
      <div class="flex flex-col">
        <p class="text-[#02295a] font-semibold">{{ title }}</p>
        <small class="text-gray-400">{{ subtitle }}</small>
      </div>
    </div>
    <span class="text-[#735bc7] font-semibold text-sm">
      +{{ isYearly ? price * 10 : price }}/{{ isYearly ? "ano" : "mês" }}</span
    >
  </div>
</template>

<script setup>
import CheckMark from "@/assets/images/icon-checkmark.svg";

defineProps({
  title: String,
  subtitle: String,
  price: String,
  isYearly: { type: Boolean, default: false },
  selected: { type: Boolean, default: false },
});
</script>
