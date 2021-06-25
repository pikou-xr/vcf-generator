import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import {
    selectRawDataSafe,
    selectRawDataErrors,
    selectRawDataHeaders,
} from '../store/selectors'
import DataTable from './DataTable/DataTable'

export interface Props {
    className?: string
}

const RawDataView: React.FunctionComponent<Props> = ({ className = '' }) => {
    const data = useSelector(selectRawDataSafe)
    const headers = useSelector(selectRawDataHeaders)
    const errors = useSelector(selectRawDataErrors)
    if (!data) {
        return null
    }
    return <DataTable data={data} headers={headers} errors={errors} />
}

export default styled(React.memo(RawDataView))``
