import { mount } from '@vue/test-utils'
import PageGreeting from '../src/components/exercises/PageGreeting.vue'

it('should use the name prop to render String', () => {
  const wrapperJane = mount(PageGreeting, { props: { name: 'Jane' } })
  const headlineJane = wrapperJane.find('h1')
  expect(headlineJane.text()).toBe('Hello Jane!')

  const wrapperJoe = mount(PageGreeting, { props: { name: 'Joe' } })
  const headlineJoe = wrapperJoe.find('h1')
  expect(headlineJoe.text()).toBe('Hello Joe!')
})
