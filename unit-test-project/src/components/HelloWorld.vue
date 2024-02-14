<script setup lang="ts">
import { computed, watch } from 'vue';
import axios from 'axios';
//import { useAppStore } from '@/stores/appStore.ts';
import TitleComponent from './TitleComponent.vue';

const props = defineProps({
  msg: String
});

const prefixMessage = computed(() => {
    return `My Title: ${props.msg}`;
});

//const { changeMessage } = useAppStore();

// watch(() => props.msg, (value) => {
//   fetch(`https://example.com/${value}`);
// })

watch(() => props.msg, () => {
  axios.get('https://httpbin.org/get');
});

// watch(() => props.msg, (value) => {
//   changeMessage(value);
// });

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <title-component :text="prefixMessage"></title-component>

    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
