import type { StoryObj, Meta } from '@storybook/react'

import { Button, Tooltip, TooltipProps } from '@leandro-ignite-ui-design-system/react'

export default {
    title: 'UI Helpers/Tooltip',
    component: Tooltip,
    args: {
        text: 'Testando o elemento Tooltip',
        direction: 'right',
        delay: 400,
        children: <Button>Hover over me to see a nice tooltip!</Button>,
    },
    argTypes: {
        children: {
            table: { disable: true },
        },
        direction: {
            options: ['top', 'right', 'bottom', 'left'],
            control: 'inline-radio',
        },
        delay: {
            control: {
                type: 'number',
                min: 100,
                max: 1000,
                step: 100,
            },
        },
    },
    parameters: {
        layout: 'centered',
    },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
