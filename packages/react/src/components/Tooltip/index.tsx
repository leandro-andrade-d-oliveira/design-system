import { ReactElement, useState } from 'react'

import { TooltipContainer, Content, TooltipWrapper } from './styles'

export type tipDirection = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps {
    text: string
    children: ReactElement
    delay?: number
    direction?: tipDirection
}

export function Tooltip({ text, children, direction = 'top', delay = 400 }: TooltipProps) {
    let timerToShowTip: ReturnType<typeof setTimeout>
    const [active, setActive] = useState(false)

    function showTip() {
        timerToShowTip = setTimeout(() => setActive(true), delay)
    }

    function hideTip() {
        clearInterval(timerToShowTip)
        setActive(false)
    }

    return (
        <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <TooltipContainer direction={direction}>
                    <Content as="span" size="sm">
                        {text}
                    </Content>
                </TooltipContainer>
            )}
        </TooltipWrapper>
    )
}

Tooltip.displayName = 'Tooltip'
