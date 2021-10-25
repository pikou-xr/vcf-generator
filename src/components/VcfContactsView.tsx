import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import {
    selectVcfContactsAndErrors,
    selectVcfFieldMapping,
} from '../store/selectors'
import { NO_GROUPING_KEY } from '../utils/group-by-field'
import { VCF_FIELD_NAMES_DISPLAY, VcfFieldName } from '../utils/vcf'
import DataTable from './DataTable/DataTable'

// TODO : i18n
const NO_GROUP_NAME_LABEL = 'GROUPE SANS NOM'

export interface Props {
    className?: string
}

const Component: React.FunctionComponent<Props> = ({ className = '' }) => {
    const vcfContactsAndErrors = useSelector(selectVcfContactsAndErrors)
    const vcfFieldMapping = useSelector(selectVcfFieldMapping)
    const headers = Object.entries(vcfFieldMapping)
        .filter(([_, rawDataFieldName]) => rawDataFieldName !== null)
        .map(([vcfFieldName]) => vcfFieldName as unknown as VcfFieldName)
    
    return (
        <Container>
            {Object.entries(vcfContactsAndErrors).map(([group, {vcfContacts, errors}]) => (
                <GroupContainer>
                    {group !== NO_GROUPING_KEY ? <h3>{group.length ? group : NO_GROUP_NAME_LABEL}</h3> : null}
                    <DataTable
                        className={className}
                        data={vcfContacts}
                        headers={headers}
                        headersDisplayMapping={VCF_FIELD_NAMES_DISPLAY}
                        errors={errors}
                    />
                </GroupContainer>
            ))}
        </Container>
    )
}

const Container = styled.div``
const GroupContainer = styled.div`
    margin: 1rem 0;
`

export default styled(React.memo(Component))``
