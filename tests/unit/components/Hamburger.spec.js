import { mount } from '@vue/test-utils'
import Hamburger from '@/components/Hamburger/index.vue'

describe('Hamburger.vue', () => {
  const mockFn = jest.fn()
  const wrapper = mount(Hamburger, {
    propsData: {
      toggleClick: mockFn,
    }
  })
  it('toggle click', () => {
    expect(wrapper.props().toggleClick).toBe(mockFn)
    // wrapper.vm.$on('toggleClick', mockFn)
    wrapper.find('.hamburger').trigger('click')
    expect(mockFn).toBeCalled()
  })
  it('prop isActive', () => {
    wrapper.setProps({ isActive: true })
    expect(wrapper.contains('.is-active')).toBe(true)
    wrapper.setProps({ isActive: false })
    expect(wrapper.contains('.is-active')).toBe(false)
  })
})
