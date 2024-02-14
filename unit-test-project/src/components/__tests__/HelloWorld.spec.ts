import { describe, it, expect, vi } from 'vitest';

import { mount, shallowMount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
import axios from 'axios';
import { createTestingPinia } from '@pinia/testing';
import { useAppStore } from '@/stores/appStore';

vi.mock('axios');

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('HelloWorld test suits', () => {
  global.fetch = vi.fn();

  // it('should make a fetch call using URL depending on msg property', async () => {
  //   const instance = shallowMount(HelloWorld);

  //   await instance.setProps({
  //     msg: 'test'
  //   });

  //   expect(fetch).toHaveBeenNthCalledWith( 1, 'https://example.com/test');
  // });

  // it('should call axios.get function with https://httpbin.org/get on msg property changed', async () => {
  //   const instance = shallowMount(HelloWorld);

  //   await instance.setProps({
  //     msg: 'test'
  //   });

  //   expect(axios.get).toHaveBeenNthCalledWith( 1, 'https://httpbin.org/get');
  // });

  it('should dispatch changeMessage with "test" msg property changed as "test"', async () => {
    const instance = shallowMount(HelloWorld, {
      global: {
        plugins: [createTestingPinia()]
      }
    });

    const store = useAppStore();

    await instance.setProps({
      msg: 'test'
    });

    expect(store.changeMessage).toHaveBeenNthCalledWith( 1, 'test');
  });
})
