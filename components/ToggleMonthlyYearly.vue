<template>
  <div
    class="w-full p-3 bg-[#f0f6ff]/80 mt-7 gap-5 flex items-center justify-center"
  >
    <span
      :class="[
        'text-sm font-medium',
        !isYearly ? 'text-[#02295a]' : ' text-gray-400',
      ]"
      >Mensal</span
    >
    <label class="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        @input="updateValue"
        class="sr-only peer"
        :checked="isYearly"
      />
      <div class="w-12 h-6 bg-[#02295a] rounded-full"></div>
      <div
        class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-6"
      ></div>
    </label>
    <span
      :class="[
        'text-sm font-medium',
        isYearly ? 'text-[#02295a]' : ' text-gray-400',
      ]"
      >Anual</span
    >
  </div>
</template>

<script setup>
defineProps({
  isYearly: Boolean,
});

const emit = defineEmits();

const updateValue = (event) => {
  emit("update:modelValue", event.target.checked);
};
</script>
