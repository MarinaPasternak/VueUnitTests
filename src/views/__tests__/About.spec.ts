import { describe, it, expect, vi, beforeEach } from 'vitest';

import { useAppStore } from '@/stores/appStore';
import AboutViewVue from '../AboutView.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import wrapperFactory from '@/utiles/wrapperFactory'

describe('AboutView', () => {
    it('should dispatch changeMessage when TitleComponent emits on-mointed', () => {
      const wrapper = wrapperFactory(AboutViewVue);
      const titleComponentWrapper = wrapper.findComponent(TitleComponent);

      const store = useAppStore();

      titleComponentWrapper.vm.$emit('on-mounted', 'test');

      expect(store.changeMessage).toHaveBeenCalledWith('test');
    });

    it('should change the title when the titleComponent emit click event', async () => {
        const wrapper = wrapperFactory(AboutViewVue);
        const titleComponentWrapper = wrapper.findComponent(TitleComponent);

        await titleComponentWrapper.vm.$emit('click');
        
        expect(titleComponentWrapper.props('text')).toBe('About !!!');
    });

    it('should emit new-message event when myMessage changes', async () => {
        const wrapper = wrapperFactory(AboutViewVue);
        const store = useAppStore();

        store.message = 'This is a new message';

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('new-message')).toBeTruthy();
        expect(wrapper.emitted('new-message')?.[0][0]).toBe('the message: This is a new message');
        expect(wrapper.emitted('new-message')).toHaveLength(1);
    });

    it('should get the user on https://server.com/user will payload as { id: 123 } when the getter changed', async () => {
      const wrapper = wrapperFactory(AboutViewVue);  
      const store = useAppStore();
      global.fetch = vi.fn();

      await store.$patch({ message: 'This is a new message' });

      await wrapper.vm.$nextTick();

      expect(fetch).toHaveBeenCalledWith('https://server.com/user', {
        method: 'POST',
        body: "{\"id\":123}"
      });
    });
  });
