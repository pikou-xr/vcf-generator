import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Select from 'react-select'
import { SelectOptionValue } from '../../types'
import { VcfFieldMapping, VcfFieldName, VCF_FIELD_NAMES, VCF_FIELD_NAMES_REQUIRED } from '../../utils/vcf'
import { useDispatch } from 'react-redux'
import { setVcfFieldMapping } from '../../store/vcf-field-mapping'

const vcfFieldNameToOption = (vcfFieldName: VcfFieldName) => ({
    value: vcfFieldName,
    label: vcfFieldName,
})

export interface Props {
    vcfFieldMapping: VcfFieldMapping
    className?: string
}

const AddOptionalVcfField: React.FunctionComponent<Props> = ({
    vcfFieldMapping,
    className = '',
}) => {
    const dispatch = useDispatch()
    const [isAddingVcfField, setIsAddingVcfField] = useState(false)
    const [selectedVcfFieldName, setSelectedVcfFieldName] =
        useState<null | VcfFieldName>(null)
    const vcfFieldOptions = VCF_FIELD_NAMES.filter((vcfFieldName) =>
        !VCF_FIELD_NAMES_REQUIRED.includes(vcfFieldName)
    )
        .filter((vcfFieldName) => vcfFieldMapping[vcfFieldName] === null)
        .map(vcfFieldNameToOption)

    const onAddFieldClicked = () => {
        setSelectedVcfFieldName(null)
        setIsAddingVcfField(!isAddingVcfField)
    }
    const onSelectChanged = (option: SelectOptionValue) =>
        setSelectedVcfFieldName(option.value as VcfFieldName)
    
    const onOkClicked = () => {
        if (!selectedVcfFieldName) {
            return
        }
        dispatch(setVcfFieldMapping({ [selectedVcfFieldName]: '' }))
    }
    return (
        <div className={className}>
            <button onClick={onAddFieldClicked}>
                {isAddingVcfField ? '✕' : '+'}
            </button>
            {isAddingVcfField ? (
                <StyledSelect options={vcfFieldOptions} onChange={onSelectChanged} value={selectedVcfFieldName}></StyledSelect>
            ) : null}
            {/* TODO : i18n */}
            {isAddingVcfField ? (
                <button
                    disabled={selectedVcfFieldName === null}
                    onClick={onOkClicked}
                >
                    Ok
                </button>
            ) : null}
        </div>
    )
}

const StyledSelect = styled(Select)``
export default styled(React.memo(AddOptionalVcfField))`
    display: flex;
    ${StyledSelect} {
        width: 60%;
    }
`
