import { styled } from '../../styles'

import { Heading } from '../Heading'
import { Text as TextComponent } from '../Text'

const toastMargin = '20px'

export const ToastWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '$gray800',
    border: '1px solid $gray600',
    borderRadius: '$sm',
    padding: '$2 $5',
    width: '$80',
    position: 'absolute',

    variants: {
        position: {
            'top-left': {
                top: toastMargin,
                left: toastMargin,
            },
            'top-center': {
                top: toastMargin,
                left: '50%',
                transform: 'translateX(-50%)',
            },
            'top-right': {
                top: toastMargin,
                right: toastMargin,
            },
            'bottom-left': {
                bottom: toastMargin,
                left: toastMargin,
            },
            'bottom-center': {
                bottom: toastMargin,
                left: '50%',
                transform: 'translateX(-50%)',
            },
            'bottom-right': {
                bottom: toastMargin,
                right: toastMargin,
            },
        },
    },
})

export const ContentWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const ClosedWrapper = styled('div', {
    color: '$gray200',
    marginRight: '-$3',
    cursor: 'pointer',
})

export const Title = styled(Heading, {
    color: '$white',
    lineHeight: '$base',
})

export const Text = styled(TextComponent, {
    color: '$gray200',
})
