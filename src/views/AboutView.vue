<script setup lang="ts">
import { ref, watch } from 'vue';
import TitleComponent from '@/components/TitleComponent.vue';
import { useAppStore } from '@/stores/appStore';
import { storeToRefs } from 'pinia';
import { pick } from 'lodash';

const store = useAppStore();
const emit = defineEmits<{
  (e: 'new-message', value: string): void
}>();

const user = ref({
  id: 123,
  firstName: 'Maryna',
  lastName: 'Lastname'
});

const { changeMessage } = useAppStore();

const { fullMessage } = storeToRefs(store);

const title = ref('About');

watch(fullMessage, (value) => {
  if(!value) {
    return;
  }

  emit('new-message', value);
});

watch(fullMessage, (value) => {
  if(!value) {
    return;
  }

  fetch('https://server.com/user', {
    method: 'POST',
    body: JSON.stringify(pick(user.value, 'id'))
  })
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <title-component  
      :text="title"
      @on-mounted="($event: string) => { store.changeMessage($event) }"
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
