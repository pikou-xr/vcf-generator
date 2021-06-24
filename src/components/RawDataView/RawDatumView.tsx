import React from 'react'
import styled from 'styled-components/macro'
import { DataHeaders, RawDatum } from '../../types'

export interface Props {
    datum: RawDatum
    headers: DataHeaders
    className?: string
}

const RawDatumView: React.FunctionComponent<Props> = ({ 
    datum, headers,
    className = ''
}) => {
    return (
        <tr className={className}>
            {headers.map(header => <td>{datum[header]}</td>)}
        </tr>
    )
}

export default styled(React.memo(RawDatumView))``