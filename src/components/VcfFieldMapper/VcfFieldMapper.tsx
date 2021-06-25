import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { selectRawDataHeaders, selectVcfFieldMapping } from '../../store/selectors'
import { VCF_FIELD_NAMES } from '../../utils/vcf'
import AddOptionalVcfField from './AddOptionalVcfField'
import FieldPicker from './FieldPicker'

export interface Props {
    className?: string
}

const VcfFieldMapper: React.FunctionComponent<Props> = ({ className = '' }) => {
    const rawDataHeaders = useSelector(selectRawDataHeaders)
    const vcfFieldMapping = useSelector(selectVcfFieldMapping)
    return (
        <div className={className}>
            {VCF_FIELD_NAMES.map((vcfFieldName) => (
                vcfFieldMapping[vcfFieldName] !== null ? (<FieldPicker
                    key={vcfFieldName}
                    vcfFieldName={vcfFieldName}
                    choices={rawDataHeaders}
                    selected={vcfFieldMapping[vcfFieldName]}
                />) : null
            ))}
            <AddOptionalVcfField vcfFieldMapping={vcfFieldMapping} />
        </div>
    )
}

export default styled(React.memo(VcfFieldMapper))``
