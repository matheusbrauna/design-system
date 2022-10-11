import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@suntech/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio eligendi quaerat dolor, ullam harum alias dolorem placeat voluptatum ipsum officiis odio. Facere possimus exercitationem sapiente voluptatum quod non dolorum?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
