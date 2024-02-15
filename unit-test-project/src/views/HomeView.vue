<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAbout = () => {
  router.push('/about');
};
</script>

<template>
  <main>
    <TheWelcome />
    <TitleComponent :text="'Home'"></TitleComponent>
    <button @click="goToAbout">Go to About</button>
  </main>
</template>
