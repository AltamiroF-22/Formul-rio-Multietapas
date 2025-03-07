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
                v-model="name"
                inputName="name"
                inputType="text"
                placeholder="e.g. Stephen king"
                label="Nome"
                :error="!!nameError"
                :errorMsg="nameError"
              />
              <!-- Input E-mail -->
              <Input
                v-model="email"
                inputName="email"
                inputType="email"
                placeholder="e.g. stephenking@gmail.com"
                label="Endereço de E-mail"
                :error="!!emailError"
                :errorMsg="emailError"
              />
              <!-- Input Text => phone number -->
              <Input
                v-model="phoneNumber"
                inputName="phonenumber"
                inputType="text"
                placeholder="e.g. +1 234 567 890"
                label="Número de Telefone"
                :error="!!phoneNumberError"
                :errorMsg="phoneNumberError"
              />
            </div>
          </div>

          <!-- STEP 2 -->
          <div v-if="step.valueOf() === 2">
            <FormHeader
              title="Selecione seu plano"
              subTitle="Você tem opção de contas mensais ou anuais."
            />
          </div>
          <!-- STEP 3 -->
          <div v-if="step.valueOf() === 3">
            <FormHeader
              title="Complementos"
              subTitle="Complementos ajudam a você a ganhar mais experiência."
            />
          </div>
          <!-- STEP 4 -->
          <div v-if="step.valueOf() === 4">
            <FormHeader
              title="Finalizando"
              subTitle="Verifique se tudo está OK antes de confirmar."
            />
          </div>

          <!-- -------------------------------------- -->

          <div class="relative mb-8">
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
import { ref } from "vue";

// Definição dos passos
const stepsData = [
  { stepName: "SUAS INFORMAÇÕES", stepNumber: 1 },
  { stepName: "SELECIONE UM PLANO", stepNumber: 2 },
  { stepName: "COMPLEMENTOS", stepNumber: 3 },
  { stepName: "RESUMO", stepNumber: 4 },
];
const bodyContent = ref();

// Enum com os passos começando em 1
enum STEPS {
  YOUR_INFO = 1,
  SELECT_PLAN = 2,
  ADD_ONS = 3,
  SUMMARY = 4,
}

// Estado do passo atual
const step = ref<STEPS>(STEPS.YOUR_INFO);

// Estado dos inputs
const name = ref("");
const email = ref("");
const phoneNumber = ref("");

// Erros dos inputs
const nameError = ref("");
const emailError = ref("");
const phoneNumberError = ref("");

const validation = () => {
  if (step.value === 1) {
    emailValidation();
    nameValidation();
    phoneNumberValidation();

    if (
      nameError.value.length ||
      emailError.value.length ||
      phoneNumberError.value.length > 0
    )
      return;

    onNext();
  } else if (step.value === 2) {
    onNext();
  } else if (step.value === 3) {
    onNext();
  } else if (step.value === 4) {
    alert("confirmou");
  }
};

// Função de validação do e-mail
const emailValidation = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    emailError.value = "O e-mail é obrigatório.";
  } else if (!emailPattern.test(email.value)) {
    emailError.value = "E-mail inválido.";
  } else {
    emailError.value = "";
  }
};

const nameValidation = () => {
  name.value.trim() === ""
    ? (nameError.value = "O nome é obrigatório.")
    : (nameError.value = "");
};

const phoneNumberValidation = () => {
  phoneNumber.value.trim() === ""
    ? (phoneNumberError.value = "O número de telefone é obrigatório.")
    : (phoneNumberError.value = "");
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
</script>
