import React, { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'
import theme from '../theme'

export type Props = PropsWithChildren<{
    title: string
    className?: string
}>

const AppPanel: React.FunctionComponent<Props> = ({
    title,
    children,
    className = '',
}) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <Container>{children}</Container>
        </div>
    )
}

const Container = styled.div``
export default styled(React.memo(AppPanel))`
    padding: 0.5em;
    margin: 0.5em;
    background-color: ${theme.colors.background2};
    h2 {
        margin-bottom: 0.5em;
    }
`
