import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { VCF_FIELD_NAMES } from '../../constants'
import { selectRawDataHeaders, selectVcfFieldMapping } from '../../store/selectors'
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
                <FieldPicker
                    key={vcfFieldName}
                    vcfFieldName={vcfFieldName}
                    choices={rawDataHeaders}
                    selected={vcfFieldMapping[vcfFieldName]}
                />
            ))}
        </div>
    )
}

export default styled(React.memo(VcfFieldMapper))``
