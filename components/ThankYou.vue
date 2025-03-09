<template>
  <div
    class="flex items-center justify-center w-full h-full flex-col text-center gap-4"
  >
    <img :src="thankYouImg" alt="thank you image" class="w-14 h-14" />
    <h2 class="text-2xl font-bold text-[#02295a]">Obrigado!</h2>
    <p class="text-gray-400 text-sm">
      Obrigado por confirmar sua inscrição! Nós esperamos que você se divirta
      usando a nossa plataforma. Se você precisar de suporte, por favor,
      sinta-se livre para nos enviar um e-mail para loremgaming.com
    </p>
  </div>
</template>

<script setup>
import thankYouImg from "@/assets/images/icon-thank-you.svg";
</script>
