import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@leandro-ignite-ui-design-system/react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
    args: {},
    decorators: [
        Story => (
            <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                <Text size="sm">E-mail address</Text>
                {Story()}
            </Box>
        ),
    ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name',
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
    },
}

export const WithPrefixDisabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
        prefix: 'cal.com/',
    },
}
