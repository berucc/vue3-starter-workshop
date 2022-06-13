import { mount } from '@vue/test-utils'
import PageGreeting from '../src/components/exercises/PageGreeting.vue'

it('should emit a custom event on button click', async () => {
  const wrapper = mount(PageGreeting)

  expect(wrapper.emitted('logout')).toBeUndefined()
  const logoutButton = wrapper.find('[data-id=logout-button]')
  await logoutButton.trigger('click')
  const logoutEventList = wrapper.emitted('logout')
  expect(logoutEventList).toHaveLength(1)
  const eventPayloadOfFirstEvent = logoutEventList[0]
  expect(eventPayloadOfFirstEvent).toEqual(['Bye bye'])
  // The following test code is a bad example for testing component internals and
  // is just used for the exercises.
  expect(wrapper.__app._instance.subTree.type.emits).toHaveLength(1)
  expect(wrapper.__app._instance.subTree.type.emits[0]).toEqual('logout')
})
