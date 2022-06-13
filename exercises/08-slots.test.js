import { mount } from '@vue/test-utils'
import VsPost from '../src/components/exercises/VsPost.vue'

it('should render default slot', async () => {
  const wrapper = mount(VsPost, { slots: { default: 'Some random content' } })
  expect(wrapper.html()).toContain('Some random content')
})

it('should render a named slot', async () => {
  const wrapper = mount(VsPost, {
    slots: { user: '<div data-id=user-info>Some user info</div>' },
  })
  const userInfo = wrapper.find('[data-id=user-info]')
  expect(userInfo.exists()).toBe(true)
  expect(userInfo.text()).toContain('Some user info')
  expect(wrapper.text()).not.toContain('No user info provided')
})

it('should render default content for a named slot', async () => {
  const wrapper = mount(VsPost)
  expect(wrapper.text()).toContain('No user info provided')
})
