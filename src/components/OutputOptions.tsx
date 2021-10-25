import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import {
    setOutputOptionsPrefix,
    setOutputOptionsGroupByField,
} from '../store/output-options'
import {
    selectOutputOptionsGroupByField,
    selectOutputOptionsPrefix,
    selectRawDataHeaders,
} from '../store/selectors'
import { SelectOptionValue } from '../types'
import { rawDataFieldNameToOption } from '../utils/select-field'
import StyledSelect from './StyledSelect'

// TODO : i18n
const GROUP_BY_FIELD_DEFAULT_OPTION = { value: null, label: 'DÉSACTIVÉ' }

export interface Props {
    className?: string
}

const OutputOptions: React.FunctionComponent<Props> = ({ className = '' }) => {
    const dispatch = useDispatch()
    const prefix = useSelector(selectOutputOptionsPrefix)
    const groupByField = useSelector(selectOutputOptionsGroupByField)
    const rawDataHeaders = useSelector(selectRawDataHeaders)
    const groupByFieldOptions = [
        GROUP_BY_FIELD_DEFAULT_OPTION,
        ...rawDataHeaders.map(rawDataFieldNameToOption),
    ]
    // TODO : i18n

    const onChangePrefix = (event: React.FormEvent<HTMLInputElement>) =>
        dispatch(setOutputOptionsPrefix(event.currentTarget.value))
    const onChangeGroupByField = (option: SelectOptionValue) =>
        dispatch(setOutputOptionsGroupByField(option.value))

    return (
        <div className={className}>
            {/* TODO : i18n */}
            <div>
                <label htmlFor="outputOptionsPrefix">Prefix</label>
                <input
                    type="text"
                    name="outputOptionsPrefix"
                    id="outputOptionsPrefix"
                    value={prefix}
                    onChange={onChangePrefix}
                />
            </div>
            <div>
                <label htmlFor="groupByField">Grouper par champ</label>
                <StyledSelect
                    id="outputOptionsGroupByField"
                    classNamePrefix="react-select"
                    options={groupByFieldOptions}
                    value={
                        groupByField
                            ? rawDataFieldNameToOption(groupByField)
                            : GROUP_BY_FIELD_DEFAULT_OPTION
                    }
                    onChange={onChangeGroupByField}
                />
            </div>
        </div>
    )
}

// Wrapping in styled component allows to use the exported component
// as a selector directly in other styled-components css code.
export default styled(React.memo(OutputOptions))`
    input {
        margin-left: 1em;
    }
`
