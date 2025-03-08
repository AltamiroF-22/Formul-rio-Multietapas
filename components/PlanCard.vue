<template>
  <button
    @click="emit('handleSelect')"
    class="p-4 w-full border-2 rounded-lg transition hover:border-[#adbeff] text-start"
    :class="[selected ? 'border-[#adbeff] bg-[#f0f6ff]/80' : '']"
  >
    <p class="sr-only">Selecione o seu plano</p>

    <img :src="icon" alt="icon" class="w-9 h-9 mb-9" />

    <h4 class="text-md font-semibold text-[#02295a]">{{ title }}</h4>
    <p class="text-gray-400 text-xs font-medium">
      ${{ isYearly ? price * 10 : price }}/{{ isYearly ? "ano" : "mês" }}
    </p>
    <small v-if="isYearly" class="text-xs text-[#02295a] font-medium">
      2 months free
    </small>
  </button>
</template>

<script setup>
import arcadeIcon from "@/assets/images/icon-arcade.svg";

defineProps({
  title: String,
  price: String,
  icon: { type: String, default: arcadeIcon },
  isYearly: { type: Boolean, default: false },
  selected: { type: Boolean, default: false },
});

const emit = defineEmits(["handleSelect"]);
</script>
