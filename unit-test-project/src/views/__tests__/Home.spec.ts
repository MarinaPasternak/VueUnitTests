import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HomeViewVue from '../HomeView.vue';
import { useAppStore } from '@/stores/appStore';
import wrapperFactory from '@/utiles/wrapperFactory'

const push = vi.fn();

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push
    })
}));

let wrapper = wrapperFactory(HomeViewVue);

describe('HomeView', () => {
    beforeEach(() => {
        wrapper = wrapperFactory(HomeViewVue);
    });

    it('should go to the about view when clicked on button', async () => {
        const wrapper = shallowMount(HomeViewVue);
        const button = wrapper.find('button');

        await button.trigger('click');

        expect(push).toHaveBeenCalledWith('/about');
    });

    it('should dispatch changeMessage action when fullMessage changes', async () => {
        const store = useAppStore();

        store.message = 'This is a new value';
        await wrapper.vm.$nextTick();

        expect(store.changeMessage).toHaveBeenCalledOnce();
        expect(store.changeMessage).toHaveBeenCalledWith('Test');
    });
});
