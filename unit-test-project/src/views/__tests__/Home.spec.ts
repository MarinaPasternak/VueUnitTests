import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HomeViewVue from '../HomeView.vue';

const push = vi.fn();

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push
    })
}));

describe('HomeView', () => {
    it('should go to the about view when clicked on button', async () => {
        const wrapper = shallowMount(HomeViewVue);
        const button = wrapper.find('button');

        await button.trigger('click');

        expect(push).toHaveBeenCalledWith('/about');
    });
});
