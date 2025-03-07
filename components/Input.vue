<template>
  <div>
    <div class="flex justify-between">
      <label :for="inputName" class="text-sm font-medium text-[#02295a]">
        {{ label }}
      </label>
      <span v-if="error" class="text-red-500 text-xs font-semibold">
        {{ errorMsg }}
      </span>
    </div>
    <input
      :id="inputName"
      :type="inputType"
      :name="inputName"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      :class="[
        'w-full text-sm p-3 border font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2',
        error ? 'border-red-500' : 'border-gray-300',
      ]"
    />
  </div>
</template>

<script setup>
defineProps({
  placeholder: String,
  inputName: String,
  inputType: { type: String, default: 'text' },
  modelValue: String, 
  label: String,
  errorMsg: String,
  error: Boolean,
});

const emit = defineEmits();

// Função para emitir o valor atualizado para o v-model
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
