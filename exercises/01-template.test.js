import { mount } from '@vue/test-utils'
import PageGreeting from '../src/components/exercises/PageGreeting.vue'

it('should render the expected string', () => {
  const wrapper = mount(PageGreeting)
  const headline = wrapper.find('h1')
  expect(headline.text()).toBe('Hello World!')
})
