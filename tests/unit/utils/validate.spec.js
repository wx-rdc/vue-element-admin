import { validUsername, validateURL } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('user')).toBe(true)
    expect(validUsername('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(validateURL('https://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(validateURL('http://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(validateURL('github.com/PanJiaChen/vue-element-admin')).toBe(false)
    expect(validateURL('/dashboard')).toBe(false)
    expect(validateURL('./dashboard')).toBe(false)
    expect(validateURL('dashboard')).toBe(false)
  })
})
