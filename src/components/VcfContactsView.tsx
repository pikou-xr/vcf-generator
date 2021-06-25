import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { VCF_FIELD_NAMES } from '../constants'
import { selectVcfContactsAndErrors } from '../store/selectors'
import DataTable from './DataTable/DataTable'

export interface Props {
    className?: string
}

const Component: React.FunctionComponent<Props> = ({ 
    className = ''
}) => {
    const {vcfContacts, errors} = useSelector(selectVcfContactsAndErrors)
    const headers = VCF_FIELD_NAMES
    return <DataTable data={vcfContacts} headers={headers} errors={errors} />
}

export default styled(React.memo(Component))``