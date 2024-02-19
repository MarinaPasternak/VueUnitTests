<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/appStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const router = useRouter();
const store = useAppStore();

const { fullMessage } = storeToRefs(store);

const goToAbout = () => {
  router.push('/about');
};

watch(fullMessage, () => {
  store.changeMessage('Test');
})
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <TitleComponent :text="store.message">Fill the default slot</TitleComponent>
    <button @click="goToAbout">Go to About</button>
  </main>
</template>
