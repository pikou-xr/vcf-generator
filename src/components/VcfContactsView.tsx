import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import {
    selectVcfContactsAndErrors,
    selectVcfFieldMapping,
} from '../store/selectors'
import { VCF_FIELD_NAMES_DISPLAY, VcfFieldName } from '../utils/vcf'
import DataTable from './DataTable/DataTable'

export interface Props {
    className?: string
}

const Component: React.FunctionComponent<Props> = ({ className = '' }) => {
    const { vcfContacts, errors } = useSelector(selectVcfContactsAndErrors)
    const vcfFieldMapping = useSelector(selectVcfFieldMapping)
    const headers = Object.entries(vcfFieldMapping)
        .filter(([_, rawDataFieldName]) => rawDataFieldName !== null)
        .map(([vcfFieldName]) => vcfFieldName as unknown as VcfFieldName)
    return (
        <DataTable
            className={className}
            data={vcfContacts}
            headers={headers}
            headersDisplayMapping={VCF_FIELD_NAMES_DISPLAY}
            errors={errors}
        />
    )
}

export default styled(React.memo(Component))``
