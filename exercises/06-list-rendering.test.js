import { data as users } from './00-users-response.json'
import { mount } from '@vue/test-utils'
import FollowerList from '../src/components/exercises/FollowerList.vue'

it('should render the list of users', () => {
  const wrapper = mount(FollowerList, { props: { followers: users } })
  const renderedUsers = wrapper.findAll('[data-id=user]')
  expect(renderedUsers).toHaveLength(6)
  expect(renderedUsers[0].text()).toBe('George Bluth')
  expect(renderedUsers[2].text()).toBe('Emma Wong')
})
