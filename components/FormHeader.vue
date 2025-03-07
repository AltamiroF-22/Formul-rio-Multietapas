<template>
  <div class="text-start">
    <h1 class="text-[#02295a] font-bold text-3xl">
      {{ title }}
    </h1>
    <p class="text-gray-400 text-sm mt-2">
      {{ subTitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>
