import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        Story => (
            <Box as="label" css={{ display: 'flex', gap: '$2' }}>
                {Story()}
                <Text size="sm">Accept terms of use</Text>
            </Box>
        ),
    ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
