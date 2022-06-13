import { data as users } from './00-users-response.json'
import { mount } from '@vue/test-utils'
import FollowerList from '../src/components/exercises/FollowerList.vue'

it('should bind input value to a string in the ui', async () => {
  const wrapper = mount(FollowerList, { props: { followers: users } })
  const searchInput = wrapper.find('[data-id=search-input]')
  expect(searchInput.exists()).toBe(true)
  await searchInput.setValue('Jane')
  const searchTermElement = wrapper.find('[data-id=search-term]')
  expect(searchTermElement.exists()).toBe(true)
  expect(searchTermElement.text()).toBe("You searched for 'Jane'")
})

it('should filter user list by first and last name', async () => {
  const wrapper = mount(FollowerList, { props: { followers: users } })
  const searchInput = wrapper.find('[data-id=search-input]')
  await searchInput.setValue('Doe')
  const filteredUsers = wrapper.findAll('[data-id=user]')
  expect(filteredUsers).toHaveLength(2)
})
