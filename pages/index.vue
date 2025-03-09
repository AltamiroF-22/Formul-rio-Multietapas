<template>
  <!-- Mobile -->
  <div
    class="absolute bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:hidden w-[100vw] h-[25dvh] top-0 bg-no-repeat bg-cover bg-center z-[-1] flex items-center justify-center gap-5 overflow-x-auto"
  >
    <div v-for="step in stepsData" :key="step.stepNumber" class="mb-16">
      <Step
        :stepName="step.stepName"
        :stepNumber="step.stepNumber"
        :active="isActiveStep(step.stepNumber)"
      />
    </div>
  </div>

  <Container>
    <div class="md:grid md:grid-cols-3">
      <!-- Sidebar Desktop -->
      <div
        class="hidden md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-center bg-cover rounded-xl md:flex flex-col"
      >
        <div v-for="step in stepsData" :key="step.stepNumber">
          <Step
            :stepName="step.stepName"
            :stepNumber="step.stepNumber"
            :active="isActiveStep(step.stepNumber)"
          />
        </div>
      </div>

      <!-- Conteúdo -->
      <div class="col-span-2 flex items-center flex-col p-7">
        <div class="flex flex-col justify-between min-h-[45vh] w-full md:px-9">
          <!-- STEP 1 -->
          <div v-if="step.valueOf() === 1">
            <FormHeader
              title="Informações pessoais"
              subTitle=" Por favor, adicione seu nome, endereço de e-mail e número de
              telefone."
            />
            <div class="flex flex-col gap-5 mt-7">
              <!-- Input text => name -->
              <Input
                v-model="formData.name"
                inputName="name"
                inputType="text"
                placeholder="e.g. Stephen king"
                label="Nome"
                :error="!!errors.name"
                :errorMsg="errors.name"
              />
              <!-- Input E-mail -->
              <Input
                v-model="formData.email"
                inputName="email"
                inputType="email"
                placeholder="e.g. stephenking@gmail.com"
                label="Endereço de E-mail"
                :error="!!errors.email"
                :errorMsg="errors.email"
              />
              <!-- Input Text => phone number -->
              <Input
                v-model="formData.phoneNumber"
                inputName="phonenumber"
                inputType="text"
                placeholder="e.g. +1 234 567 890"
                label="Número de Telefone"
                :error="!!errors.phoneNumber"
                :errorMsg="errors.phoneNumber"
              />
            </div>
          </div>

          <!-- STEP 2 -->
          <div v-if="step.valueOf() === 2">
            <FormHeader
              title="Selecione seu plano"
              subTitle="Você tem opção de contas mensais ou anuais."
            />
            <div class="flex gap-4 justify-between mt-9 w-[94%]">
              <PlanCard
                title="Arcade"
                price="9"
                :selected="formData.planSelected.valueOf() === 'Arcade'"
                @handleSelect="handleSelectPlan('Arcade', 9)"
                :isYearly="formData.isYearly"
              />
              <PlanCard
                :icon="advancedIcon"
                title="Avançado"
                price="12"
                :selected="formData.planSelected.valueOf() === 'Avançado'"
                @handleSelect="handleSelectPlan('Avançado', 12)"
                :isYearly="formData.isYearly"
              />
              <PlanCard
                :icon="proIcon"
                title="Pro"
                price="15"
                :selected="formData.planSelected.valueOf() === 'Pro'"
                @handleSelect="handleSelectPlan('Pro', 15)"
                :isYearly="formData.isYearly"
              />
            </div>
            <div
              class="w-full p-3 bg-[#f0f6ff]/80 mt-7 gap-5 flex items-center justify-center"
            >
              <span
                :class="[
                  'text-sm font-medium',
                  !formData.isYearly ? 'text-[#02295a]' : ' text-gray-400',
                ]"
                >Mensal</span
              >
              <label class="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="formData.isYearly"
                  class="sr-only peer"
                />
                <div class="w-12 h-6 bg-[#02295a] rounded-full"></div>
                <div
                  class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-6"
                ></div>
              </label>
              <span
                :class="[
                  'text-sm font-medium',
                  formData.isYearly ? 'text-[#02295a]' : ' text-gray-400',
                ]"
                >Anual</span
              >
            </div>
          </div>
          <!-- STEP 3 -->
          <div v-if="step.valueOf() === 3">
            <FormHeader
              title="Complementos"
              subTitle="Complementos ajudam a você a ganhar mais experiência."
            />
            <div class="flex flex-col w-full gap-4 mt-9">
              <Ons
                v-for="on in formData.ons"
                :key="on.id"
                :title="on.description"
                :subtitle="on.subtitle"
                :isYearly="formData.isYearly"
                :price="on.price"
                v-model:selected="on.selected"
                @click="toggleSelection(on)"
              />
            </div>
          </div>
          <!-- STEP 4 -->
          <div v-if="step.valueOf() === 4">
            <FormHeader
              title="Finalizando"
              subTitle="Verifique se tudo está OK antes de confirmar."
            />
          </div>

          <!-- -------------------------------------- -->

          <div class="relative mb-8 mt-24">
            <Button
              v-if="step.valueOf() > 1"
              class="absolute left-0"
              placeholder="Voltar"
              :primary="false"
              @action="onBack"
            />
            <Button
              v-if="step.valueOf() !== 4"
              class="absolute right-0"
              placeholder="Próximo Passo"
              @action="validation"
            />
            <Button
              v-if="step.valueOf() === 4"
              class="absolute right-0"
              placeholder="Confirmar"
              :confirmBtn="true"
              @action="validation"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";

import { ref, watch } from "vue";
import Ons from "~/components/Ons.vue";

// Definição dos passos
const stepsData = [
  { stepName: "SUAS INFORMAÇÕES", stepNumber: 1 },
  { stepName: "SELECIONE UM PLANO", stepNumber: 2 },
  { stepName: "COMPLEMENTOS", stepNumber: 3 },
  { stepName: "RESUMO", stepNumber: 4 },
];

// Enum com os passos começando em 1
enum STEPS {
  YOUR_INFO = 1,
  SELECT_PLAN = 2,
  ADD_ONS = 3,
  SUMMARY = 4,
}

// Estado do passo atual
const step = ref<STEPS>(STEPS.YOUR_INFO);

// Json Data
const formData = ref({
  name: "",
  email: "",
  phoneNumber: "",
  planSelected: "Arcade",
  planPrice: 9,
  isYearly: false,
  ons: [
    {
      id: 1,
      description: "Serviços online",
      subtitle: "Acesse múltiplos jogos",
      price: 1,
      selected: true,
    },
    {
      id: 2,
      description: "Armazenamento maior",
      subtitle: "1TB extra em salvamentos na nuvem",
      price: 2,
      selected: true,
    },
    {
      id: 3,
      description: "Perfil customizável",
      subtitle: "Customize temas no seu perfil",
      price: 2,
      selected: false,
    },
  ],
});

// Erros dos inputs
const errors = ref({
  name: "",
  email: "",
  phoneNumber: "",
});
const validation = () => {
  if (step.value === 1) {
    emailValidation();
    nameValidation();
    phoneNumberValidation();

    if (
      errors.value.name.length ||
      errors.value.email.length ||
      errors.value.phoneNumber.length > 0
    )
      return;

    onNext();
  } else if (step.value === 2) {
    onNext();
  } else if (step.value === 3) {
    //para fazer
    onNext();
  } else if (step.value === 4) {
    //para fazer
    console.log({ confirmou: true, JSON: formData.value });
  }
};
//STEP 1   VALIDATION
const emailValidation = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (formData.value.email === "") {
    errors.value.email = "O e-mail é obrigatório.";
  } else if (!emailPattern.test(formData.value.email)) {
    errors.value.email = "E-mail inválido.";
  } else {
    errors.value.email = "";
  }
};

const nameValidation = () => {
  formData.value.name.trim() === ""
    ? (errors.value.name = "O nome é obrigatório.")
    : (errors.value.name = "");
};

const phoneNumberValidation = () => {
  formData.value.phoneNumber.trim() === ""
    ? (errors.value.phoneNumber = "O número de telefone é obrigatório.")
    : (errors.value.phoneNumber = "");
};

const handleSelectPlan = (plan: string, price: number) => {
  formData.value.planSelected = plan;
  formData.value.planPrice = price;
  if (formData.value.isYearly) formData.value.planPrice = price * 10;
};

// Watcher para monitorar mudanças na variável "isYearly" e recalcular o preço do plano
watch(
  () => formData.value.isYearly, // Observa se o valor de "isYearly" mudou
  (newIsYearly) => {
    const basePrices: Record<string, number> = {
      // Preços base dos planos
      Arcade: 9,
      Avançado: 12,
      Pro: 15,
    };

    const selectedPlan = formData.value.planSelected; // Obtém o plano selecionado
    const basePrice = basePrices[selectedPlan]; // Obtém o preço base do plano selecionado

    // Atualiza o preço com base se o plano é anual ou mensal
    formData.value.planPrice = newIsYearly ? basePrice * 10 : basePrice;
    formData.value.ons.forEach((on) => {
      on.price = newIsYearly ? on.price * 10 : on.price / 10;
    });
  }
);

//STEP 3
const toggleSelection = (on: any) => {
  on.selected = !on.selected;
};

// Verifica se o passo está ativo
const isActiveStep = (stepNumber: number) => step.value === stepNumber;

// Funções de navegação entre os passos
const onBack = () => {
  if (step.value > 1) step.value = (step.value - 1) as STEPS;
};

const onNext = () => {
  if (step.value < 4) step.value = (step.value + 1) as STEPS;
};
onNext();
onNext();
</script>
