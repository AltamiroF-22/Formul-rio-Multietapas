<template>
  <button
    @click="emit('action')"
    :class="[
      'py-3 px-5 rounded-md transition',
      primary ? 'bg-[#02295a] hover:bg-[#02295a]/90 text-white ' : 'text-gray-400 hover:text-[#02295a]',
      confirmBtn ? 'bg-[#473dff] hover:bg-[#adbeff]' : '',
    ]"
  >
    {{ placeholder }}
  </button>
</template>

<script setup>
defineProps({
  placeholder: String,
  primary: { type: Boolean, default: true },
  confirmBtn: { type: Boolean, default: false },
});

const emit = defineEmits(['action']);
</script>
