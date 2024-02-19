import { describe, it, expect, vi } from 'vitest';

import { mount, shallowMount } from '@vue/test-utils';
import TitleComponent from '../TitleComponent.vue';

describe('TitleComponent', () => {
    it('should display the title text', () => {
        const wrapper = shallowMount(TitleComponent, {
            props: { text: 'My Title' }
        });

        expect(wrapper.text()).toBe('My Title');
    })
});
