import React from 'react'
import styled from 'styled-components/macro'
import { DataHeaders } from '../../types'

export interface Props {
    headers: DataHeaders
    className?: string
}

const RawDataHeaders: React.FunctionComponent<Props> = ({ 
    headers,
    className = ''
}) => {
    return (
        <tr className={className}>
            {headers.map(fieldName => <th>{fieldName}</th>)}
        </tr>
    )
}

export default styled(React.memo(RawDataHeaders))``