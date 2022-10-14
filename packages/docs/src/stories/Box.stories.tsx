import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@suntech/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando componente Box</Text>,
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
