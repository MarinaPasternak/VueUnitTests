import { describe, it, expect, vi } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('HelloWorld test suits', () => {
  global.fetch = vi.fn();

  it('should make a fetch call using URL depending on msg property', async () => {
    const instance = shallowMount(HelloWorld);

    await instance.setProps({
      msg: 'test'
    });

    expect(fetch).toHaveBeenNthCalledWith( 1, 'https://example.com/test')
  });
})
