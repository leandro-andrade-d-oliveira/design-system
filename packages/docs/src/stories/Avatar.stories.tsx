import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@leandro-ignite-ui-design-system/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/leandro-andrade-d-oliveira.png',
        alt: 'Leandro Oliveira',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}
