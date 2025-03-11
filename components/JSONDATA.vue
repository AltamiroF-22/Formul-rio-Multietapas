<template>
    <div class="w-[100vw] h-[100dvh] absolute z-20 bg-black/20 backdrop-blur flex items-center justify-center top-0 ">
      <div class="bg-gray-900 text-gray-100 p-1 md:p-4 rounded-md md:w-[90%] max-w-3xl">
        <div class="flex items-center justify-between px-2 my-3">
          <h3 class="text-lg font-bold">Dados em JSON:</h3>
          <button
            class="px-7 py-3 text-white transition rounded-xl bg-[#02295a] hover:bg-[#02295a]/90"
            @click="$emit('close')"
          >
            Fechar
          </button>
        </div>
        <pre 
          class="bg-gray-800 p-3 rounded text-xs md:text-sm overflow-auto whitespace-pre-wrap"
          v-html="formattedJsonString"
        ></pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    formattedJson: Object, // Recebe o objeto JSON
  });
  
  // Função para formatar JSON e aplicar cores com HTML para o modo escuro
  const syntaxHighlight = (json) => {
    if (typeof json !== "string") {
      json = JSON.stringify(json, null, 2);
    }
    json = json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\b\d+\b)/g,
      (match) => {
        let cls = "text-gray-400"; // Cor padrão no dark mode
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-yellow-400 font-bold"; // Chaves (keys)
          } else {
            cls = "text-green-400"; // Strings
          }
        } else if (/true|false/.test(match)) {
          cls = "text-blue-400 font-semibold"; // Booleanos
        } else if (/null/.test(match)) {
          cls = "text-red-400"; // Null
        } else {
          cls = "text-purple-400"; // Números
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
    return json;
  };
  
  // Computed que aplica a formatação e cores
  const formattedJsonString = computed(() => syntaxHighlight(props.formattedJson));
  </script>
  