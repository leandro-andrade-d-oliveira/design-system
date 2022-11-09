import { styled } from '../../styles'
import { Text } from './../Text'

const tooltipArrowSize = '8px'
const tooltipMargin = '$4'
const toolTipBackgroundColor = '$gray900'

export const TooltipWrapper = styled('div', {
    display: 'inline-block',
    position: 'relative',
})

export const TooltipContainer = styled('div', {
    position: 'absolute',
    borderRadius: '$sm',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '$2 $4',
    backgroundColor: toolTipBackgroundColor,
    whiteSpace: 'nowrap',
    filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

    '&:before': {
        content: '',
        left: '50%',
        border: 'solid $transparent',
        height: 0,
        width: 0,
        position: 'absolute',
        pointerEvents: 'none',
        borderWidth: tooltipArrowSize,
        marginLeft: `calc(${tooltipArrowSize} * -1)`,
    },

    variants: {
        direction: {
            top: {
                top: `calc(-100% - ${tooltipMargin} + ${tooltipArrowSize})`,

                '&:before': {
                    top: '100%',
                    borderTopColor: toolTipBackgroundColor,
                },
            },
            right: {
                left: `calc(100% + ${tooltipMargin})`,
                top: '50%',
                transform: 'translateX(0) translateY(-50%)',

                '&:before': {
                    left: `calc(${tooltipArrowSize} * -1)`,
                    top: '50%',
                    transform: 'translateX(0) translateY(-50%)',
                    borderRightColor: toolTipBackgroundColor,
                },
            },
            bottom: {
                marginTop: tooltipMargin,

                '&:before': {
                    bottom: '100%',
                    borderBottomColor: toolTipBackgroundColor,
                },
            },
            left: {
                left: 'auto',
                right: `calc(100% + ${tooltipMargin})`,
                top: '50%',
                transform: 'translateX(0) translateY(-50%)',

                '&:before': {
                    left: 'auto',
                    right: `calc(${tooltipArrowSize} * -2)`,
                    top: '50%',
                    transform: 'translateX(0) translateY(-50%)',
                    borderLeftColor: toolTipBackgroundColor,
                },
            },
        },
    },
})

export const Content = styled(Text, {
    color: '$gray200',
})
