import { shallowMount } from '@vue/test-utils';
import Fab from '@/views/Fab'

describe('Pruebas en el Fab Component', () => {
    test('debe mostrar un icono por defecto: fa-plus', () => {
        const wrapper = shallowMount( Fab )
        const iTag = wrapper.find('i')
        expect( iTag.classes('fa-plus') ).toBeTruthy()
    })
    test('debe mostrar un icono por argumento: fa-circle', () => {
        const wrapper = shallowMount( Fab, {
            props: {
                icon: 'fa-circle'
            }
        })
        const iTag = wrapper.find('i')
        expect( iTag.classes('fa-circle') ).toBeTruthy()
    })
    test('debe emitir el evento on:click cuando se hace click', () => {
        const wrapper = shallowMount( Fab )
        wrapper.find('button').trigger('click')
        expect( wrapper.emitted( 'on:click') ).toHaveLength(1)
    })
})