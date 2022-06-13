import { mount } from '@vue/test-utils'
import PageGreeting from '../src/components/exercises/PageGreeting.vue'

it('should render user of the day message', () => {
  const userOfTheDay = 'Jane'
  const userOfTheDayMessage = 'You are the user of the day!🎉'

  const wrapperJane = mount(PageGreeting, {
    props: { name: 'Jane', userOfTheDay },
  })
  expect(wrapperJane.text()).toContain(userOfTheDayMessage)

  const wrapperJoe = mount(PageGreeting, {
    props: { name: 'Joe', userOfTheDay },
  })
  expect(wrapperJoe.text()).not.toContain(userOfTheDayMessage)
})
