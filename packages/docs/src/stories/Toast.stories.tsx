import type { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps } from '@leandro-ignite-ui-design-system/react'

export default {
    title: 'UI Helpers/Toast',
    component: Toast,
    args: {
        title: 'Agendamento realizado',
        text: 'Quarta-feira, 23 de Outubro às 16h',
        show: true,
        position: 'bottom-right',
    },
    argTypes: {
        onClose: {
            action: 'onClose',
            table: { disable: true },
        },
        position: {
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
            control: 'select',
        },
    },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
