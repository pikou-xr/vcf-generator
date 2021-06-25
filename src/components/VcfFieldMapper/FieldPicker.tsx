import React from 'react'
import styled from 'styled-components/macro'
import {
    DataHeaders,
    FieldName,
    SelectOptionValue,
} from '../../types'
import { setVcfFieldMapping } from '../../store/vcf-field-mapping'
import { useDispatch } from 'react-redux'
import {
    VCF_FIELD_NAMES_DISPLAY,
    VcfFieldName,
    VCF_FIELD_NAMES_REQUIRED,
} from '../../utils/vcf'
import StyledSelect from '../StyledSelect'

export interface Props {
    vcfFieldName: VcfFieldName
    choices: DataHeaders
    selected: FieldName | null
    className?: string
}

const rawDataFieldNameToOption = (rawDataFieldName: FieldName) => ({
    value: rawDataFieldName,
    label: rawDataFieldName,
})

const FieldPicker: React.FunctionComponent<Props> = ({
    choices,
    vcfFieldName,
    selected,
    className = '',
}) => {
    const isRequiredVcfField = VCF_FIELD_NAMES_REQUIRED.includes(vcfFieldName)
    const dispatch = useDispatch()
    const options = choices.map(rawDataFieldNameToOption)
    const displayVcfFieldName =
        (VCF_FIELD_NAMES_DISPLAY as any)[vcfFieldName] || vcfFieldName
    const onValueChange = (option: SelectOptionValue) =>
        dispatch(setVcfFieldMapping({ [vcfFieldName]: option.value }))
    const onCloseClicked = () =>
        dispatch(setVcfFieldMapping({ [vcfFieldName]: null }))
    return (
        <div className={className}>
            <VcfFieldNameContainer>{displayVcfFieldName}</VcfFieldNameContainer>
            <ArrowContainer>→</ArrowContainer>
            <StyledSelect
                classNamePrefix='react-select'
                options={options}
                value={selected ? rawDataFieldNameToOption(selected) : null}
                onChange={onValueChange}
            />
            {isRequiredVcfField ? null : (
                <button onClick={onCloseClicked}>✕</button>
            )}
        </div>
    )
}

const VcfFieldNameContainer = styled.span``
const ArrowContainer = styled.span``

export default styled(React.memo(FieldPicker))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${VcfFieldNameContainer} {
        width: 30%;
    }
    ${ArrowContainer} {
        font-size: 200%;
    }
    ${StyledSelect} {
        width: 60%;
    }
`
