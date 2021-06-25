import React from 'react'
import styled from 'styled-components/macro'
import Select from 'react-select'
import { DataHeaders, FieldName, VcfFieldName } from '../../types'
import { setVcfFieldMapping } from '../../store/vcf-field-mapping'
import { useDispatch } from 'react-redux'

export interface Props {
    vcfFieldName: VcfFieldName
    choices: DataHeaders
    selected: FieldName | null
    className?: string
}

interface OptionValue {
    value: FieldName
    label: string
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
    console.log(vcfFieldName, selected)
    const dispatch = useDispatch()
    const options = choices.map(rawDataFieldNameToOption)
    const onValueChange = (option: OptionValue) =>
        dispatch(setVcfFieldMapping({ [vcfFieldName]: option.value }))
    return (
        <div className={className}>
            <VcfFieldNameContainer>{vcfFieldName}</VcfFieldNameContainer>
            <ArrowContainer>→</ArrowContainer>
            <StyledSelect
                options={options}
                value={selected ? rawDataFieldNameToOption(selected): null}
                onChange={onValueChange}
            />
        </div>
    )
}

const StyledSelect = styled(Select)``
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
