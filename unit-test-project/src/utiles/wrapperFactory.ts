// import TitleComponentVue from '@/components/TitleComponent.vue';
import { createTestingPinia } from '@pinia/testing';
import { mount, type ComponentMountingOptions } from '@vue/test-utils';
import { merge } from 'lodash';

// const wrapperFactory = (component: any) => shallowMount(component, {
//     global: {
//         plugins: [createTestingPinia()],
//         renderStubDefaultSlot: true,
//         stubs: {
//             TitleComponent: TitleComponentVue
//         }
//     }
// });


const wrapperFactory = <VueComponent>(component: VueComponent, options?: ComponentMountingOptions<VueComponent>) => {
    const defaultOptions: ComponentMountingOptions<VueComponent> = {
        global: {
            plugins: [createTestingPinia()],
        }
    };

    return mount(component, merge(options ?? {}, defaultOptions));
}; 


export default wrapperFactory;
    