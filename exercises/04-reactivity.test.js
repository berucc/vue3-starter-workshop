import { mount } from '@vue/test-utils'
import VsPost from '../src/components/exercises/VsPost.vue'

it('should count and display likes', async () => {
  const wrapper = mount(VsPost)

  expect(wrapper.find('[data-id=like-counter]').text()).toBe('0')

  const likeButton = wrapper.find('[data-id=like-button]')
  await likeButton.trigger('click')
  expect(wrapper.find('[data-id=like-counter]').text()).toBe('1')
})
