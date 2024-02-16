<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import { useAppStore } from '@/stores/appStore';

const { changeMessage } = useAppStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <title-component  
      :text="'About'"
      @on-mounted="($event: string) => changeMessage($event)"></title-component>
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
