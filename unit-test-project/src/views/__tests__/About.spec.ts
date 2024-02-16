import { describe, it, expect, vi } from 'vitest';

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

    })
  });
