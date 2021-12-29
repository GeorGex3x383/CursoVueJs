import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', ()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })

    // test('debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()

    // })

    test('h2 debe de tenr el valor por defecto', () => {

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('Counter')

    })

    test('El valor por defecto debe ser 100 en el p', () => {

        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()

        // expect(pTags[1].text()).toBe('100')
        expect(value).toBe('100')

    })

    test('debe de incrementar y decrementar el contador', async() => {

        // const buttons = wrapper.findAll('button')
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })

    test('debe de establecer el valor por defecto', ()=>{

        // const start = wrapper.props('start')
        const {start} = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)

    })

    test('debe de mostrar la prop title', () => {

        const title = 'Hola Mundo'

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)

    })

})