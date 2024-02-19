import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
    state: () => ({ message: '' }),
    
    getters: {
        fullMessage: (state) => `the message: ${state.message}`,
    },

    actions: {
        changeMessage(msg: string) {
            this.message = msg;
        },
    },
});
