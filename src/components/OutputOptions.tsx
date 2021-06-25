import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { setOutputOptionsPrefix } from '../store/output-options'
import { selectOutputOptionsPrefix } from '../store/selectors'

export interface Props {
    className?: string
}

const OutputOptions: React.FunctionComponent<Props> = ({ className = '' }) => {
    const dispatch = useDispatch()
    const prefix = useSelector(selectOutputOptionsPrefix)
    const onChangePrefix = (event: React.FormEvent<HTMLInputElement>) =>
        dispatch(setOutputOptionsPrefix(event.currentTarget.value))
    return (
        <div className={className}>
            {/* TODO : i18n */}
            <label htmlFor="outputOptionsPrefix">Prefix</label>
            <input
                type="text"
                name="outputOptionsPrefix"
                id="outputOptionsPrefix"
                value={prefix}
                onChange={onChangePrefix}
            />
        </div>
    )
}

// Wrapping in styled component allows to use the exported component
// as a selector directly in other styled-components css code.
export default styled(React.memo(OutputOptions))``
