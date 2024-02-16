<script setup lang="ts">
import { ref } from 'vue';
import TitleComponent from '@/components/TitleComponent.vue';
import { useAppStore } from '@/stores/appStore';

const { changeMessage } = useAppStore();

const title = ref('About');
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <title-component  
      :text="title"
      @on-mounted="($event: string) => changeMessage($event)"
      @click="title = 'About !!!'"></title-component>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
