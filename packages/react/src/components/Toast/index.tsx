import { X } from 'phosphor-react'

import { ToastWrapper, ContentWrapper, ClosedWrapper, Title, Text } from './styles'

type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export interface ToastProps {
    title: string
    text: string
    show: boolean
    onClose: () => void
    position?: Position
}

export function Toast({ title, text, show, onClose, position = 'bottom-right' }: ToastProps) {
    if (!show) return null

    return (
        <ToastWrapper position={position}>
            <ContentWrapper>
                <Title as="span" size="sm">
                    {title}
                </Title>
                <Text as="span" size="sm">
                    {text}
                </Text>
            </ContentWrapper>

            <ClosedWrapper onClick={onClose}>
                <X size={20} />
            </ClosedWrapper>
        </ToastWrapper>
    )
}

Toast.displayName = 'Toast'
