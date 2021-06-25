import React from 'react'
import styled from 'styled-components/macro'
import { DataHeaders, AnyDatum } from '../../types'

export interface Props {
    datum: AnyDatum
    headers: DataHeaders
    className?: string
}

const DataTableRow: React.FunctionComponent<Props> = ({ 
    datum, headers,
    className = ''
}) => {
    return (
        <tr className={className}>
            {headers.map(header => <td key={header}>{datum[header]}</td>)}
        </tr>
    )
}

export default styled(React.memo(DataTableRow))``