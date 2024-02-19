<script setup lang="ts">
import { onMounted } from 'vue';

export interface TitleComponentProps {
  text: string
};

defineProps<TitleComponentProps>();

const emit = defineEmits<{
    (e: 'on-mounted', payload: string): void
}>()

onMounted(() => {
    emit('on-mounted', 'test')
});

</script>

<template>
    <div>
        <h1><slot>{{ text }}</slot></h1>
    </div>
</template>

<style scoped>

</style>